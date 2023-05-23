=begin
  
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails Development Platform.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// ·   
=end


require "L2"
require "time"
require "date"
require "rouge"
require "nokogiri"
require "fileutils"
require "redcarpet"
require "listen"


# This override is necessary to override some parts of the library to be able to include examples
# of html code that renders normally, thats why I override the block_code method
# if language is "raw" we should not process the code due we want to render that code
# without any modification, however the gem does not work well with the super method
# to invoke the original method from the HTML class due that class is written in C
# thats why we duplicate (copy/paste) the block_code for other languages than 'raw'
class CustomHTMLRender < Redcarpet::Render::HTML

    def initialize(options={})
        super options.merge(:hard_wrap => true)
    end

    def block_code(code, language)

        # use html inline formater
        formatter = Rouge::Formatters::HTMLInline.new(Rouge::Themes::Github)

        case language
            when 'js' then lexer = Rouge::Lexers::Javascript.new;   # parser for js code
            when 'vue' then lexer = Rouge::Lexers::Vue.new;         # parser for vue code
            when 'yaml' then lexer = Rouge::Lexers::YAML.new;
            when 'ruby' then lexer = Rouge::Lexers::Ruby.new;       # parser for ruby code
            when 'html' then lexer = Rouge::Lexers::HTML.new;       # parser for html code
            when 'json' then lexer = Rouge::Lexers::JSON.new;       # parser for json code
            when 'scss' then lexer = Rouge::Lexers::Scss.new;       # parser for scss code
            when 'shell' then lexer = Rouge::Lexers::Shell.new;     # parser for shell code
            when 'nginx' then lexer = Rouge::Lexers::Nginx.new;     # parser for nginx code
            when 'textplain' then lexer = Rouge::Lexers::PlainText.new;
        end

        # do not format for raw or non specific code blocks
        return "<pre><code>#{ html_escape(code) }</code></pre>" if language.nil?

        # do not format for raw or non specific code blocks
        return code if language == "raw"

        # format code and return
        return "<pre class=\"#{language}\"><code>#{ formatter.format(lexer.lex(code)) }</code></pre>"

    end

    private

    # TODO: This is far from ideal to have such method as we
    # are duplicating existing code from Houdini. This method
    # should be defined at the C level.
    def html_escape(string)
        string.gsub(/['&\"<>\/]/, {
            '&' => '&amp;',
            '<' => '&lt;',
            '>' => '&gt;',
            '"' => '&quot;',
            "'" => '&#x27;',
            "/" => '&#x2F;',
        })
    end

end

DOCS_FOLDERS = ["about", "getting-started"]
NAVIGATION_PATH = File.join("source", "documentation", "_navigation.html.erb")
DOCUMENTATION_SOURCE_PATH = File.join("source", "documentation")
DOCUMENTATION_DESTINATION_PATH = File.join("source", "documentation")

markdown = Redcarpet::Markdown.new(
    CustomHTMLRender.new,
    fenced_code_blocks: true,
    tables: true
)

FileUtils.rm_rf(DOCUMENTATION_SOURCE_PATH)
FileUtils.mkdir_p(DOCUMENTATION_SOURCE_PATH)

namespace :docs do

    desc ""
    task :dev do 
        listener = Listen.to(*[
            "docs/about",
            "docs/getting-started"
        ]) do |modified, added, removed|
            system("rake docs:build")
        end
        listener.start
        system("rake docs:build")
        sleep
    end

    desc "build"
    task :build do

        sections = Hash.new

        # iterate over the documentation folder in a desire specif order
        DOCS_FOLDERS.each do |folder|

            # get all the documentation files
            files = Dir.glob(File.join("docs", folder, "*.md")).sort

            # process every documentation file found
            files.each do |file|

                # extract information from file
                path = file.sub("docs/", "").sub(".md", "").gsub("/","-")
                path = file.sub("docs/", "").sub(".md", "")
                file_name = File.basename(file, ".md")
                file_label = file_name.tr("0-9", "").tr("-", " ")

                # create a collection of documentation
                sections[folder] = [] if !sections.has_key?(folder)

                # render documentation from markdown to html
                markdown_rendered = markdown.render(File.read(file))

                # add some nice styles & format to the final html documentation
                markdown_rendered = documentation_template(markdown_rendered, file)

                # create the directory if does not exist
                dirname = File.join(DOCUMENTATION_SOURCE_PATH, File.dirname(path + '.html.erb'))
                FileUtils.mkdir_p(dirname) unless File.directory?(dirname)

                # write processed documentation file
                File.write(File.join(DOCUMENTATION_SOURCE_PATH, path + '.html.erb'), markdown_rendered, mode: 'w+')

                # push the file to the vue apps container
                sections[folder].push({ path: path, file: file_name, label: file_label })

                L2.m "  Generate documentation for: #{File.join(DOCUMENTATION_SOURCE_PATH, path)}"
            end
        end

        sections.each do |section, files|
            File.open(NAVIGATION_PATH, 'a') do |f|
                f.puts("<ul>")
                f.puts("<li>#{section.gsub("-", " ")}</li>")
                files.each do |file|
                    f.puts("<li><a href=\"/documentation/#{file[:path]}\">#{file[:label]}</a></li>")
                end
                f.puts("</ul>")
            end
        end

        # Duplicate the first file (introduction) so I can show this file as main documentation index file
        FileUtils.cp(File.join(DOCUMENTATION_SOURCE_PATH, "getting-started", "about.html.erb"), File.join(DOCUMENTATION_SOURCE_PATH, "_introduction.html.erb"))

        L2.br
        L2.info('Documentation build process completed!')
    end
end


# create a template compatible with vue componentes
# add aditional information to documentation page
def documentation_template content, file

    content = content.gsub("{{", "{&#8205;{")
    content = content.gsub("}}", "}&#8205;}")
    content = content.gsub("<table>", '<table class="table is-bordered is-striped is-narrow is-fullwidth">')

    file_mtime = File.mtime(file)
    datei = file_mtime.iso8601
    dateo = DateTime.iso8601(datei)
    dates = dateo.strftime("%Y/%m/%d")

    %(
        <section>
            <div class="columns mt-0">
                <div class="navigation column is-3">
                    <figure>
                        <%= inline_svg("brand/lesli-name.svg") %>
                    </figure>
                    <%= partial("documentation/navigation") %>
                </div>
                <div class="documentation column">
                    <%= partial("partials/navigation") %>
                    <div class="lesli-documentation section pb-0">
                        <div class="container">
                            #{ content }
                        </div>
                        <div class="lesli-documentation-footer">
                            <div class="level">
                                <div class="level-left">
                                    <p><a href="https://github.com/LesliTech/lesli.dev/blob/master/#{file}" target="_blank">
                                        <span class="icon-text">
                                            <span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"/></svg>
                                            </span>
                                            <span>
                                                Edit this page on GitHub
                                            </span>
                                        </span>
                                    </a></p>
                                </div>
                                <div class="level-right">
                                    <p><b>Last Update: </b>#{ dates }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <%= partial("partials/footer") %>
                </div>
            </div>
        </section>
    )
end
