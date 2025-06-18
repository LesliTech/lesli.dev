=begin

Lesli

Copyright (c) 2024, Lesli Technologies, S. A.

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

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
=end

require "fileutils"

namespace :docs do
    task :build do

        # delete the generated docs & assets for gems
        FileUtils.rm_rf("source/gems")
        FileUtils.rm_rf("source/images/gems")

        # delete the generated docs & assets for engines
        FileUtils.rm_rf("source/engines")
        FileUtils.rm_rf("source/images/engines")

        images
        documentation
        documentation_replaces
    end
end

def get_engine_name(file)
    file = file.split("/")[3].downcase
    return file if file == "lesli" 
    return file.sub("lesli", "")
end

def images

    def get_file_to_paste section, file
        engine_name = get_engine_name(file)
        engine_path = file

        # replace some source paths
        engine_path = engine_path.gsub("../LesliBuilder/#{section}", "")
        engine_path = engine_path.gsub("/docs", "")
        engine_path = engine_path.gsub("/images", "")
        #engine_path = engine_path.gsub("/lesli-css", "/css") # used only with tools
        engine_path = engine_path.gsub("Lesli", "") if engine_name != "lesli"

        # fix path for images from rails assets folder
        engine_path = engine_path.gsub("app/assets/", "")
        engine_path = engine_path.gsub("lesli_#{engine_name}/", "")

        File.join("source", "images", section, engine_path.downcase)
    end 

    [
        "../LesliBuilder/engines/*/docs/images/*",
        "../LesliBuilder/engines/*/app/assets/images/*/*.svg"
    ].each do |source_folder|
        Dir.glob(source_folder).each do |file_to_copy|

            file_to_paste = get_file_to_paste("engines", file_to_copy)

            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Image #{file_to_paste}"
        end
    end

    [
        "../LesliBuilder/gems/*/docs/images/*"
    ].each do |source_folder|
        Dir.glob(source_folder).each do |file_to_copy|

            file_to_paste = get_file_to_paste("gems", file_to_copy)

            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Image #{file_to_paste}"
        end
    end
end

def documentation 

    def get_file_to_paste file
        engine_name = get_engine_name(file)
        engine_path = file
        engine_path = engine_path.gsub("../LesliBuilder/", "")
        engine_path = engine_path.gsub("/docs", "")
        engine_path = engine_path.gsub("/lesli-", "/")
        engine_path = engine_path.gsub("Lesli", "") if engine_name != "lesli"
        File.join("source", engine_path.downcase)
    end 

    source_paths = [
        "../LesliBuilder/engines/*/docs/*/*.md",
        "../LesliBuilder/engines/*/docs/*.md",
        "../LesliBuilder/gems/*/docs/*.md"
    ].each do |source_path|
        Dir.glob(source_path) do |file_to_copy|

            file_to_paste = get_file_to_paste(file_to_copy)
            file_to_paste = file_to_paste.gsub(".md", ".html.md")
            
            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            if file_to_paste.end_with?("lesli.dev.html.md")
                file_to_paste = file_to_paste.gsub("lesli.dev.html.md", "index.html.md.erb")
            end  

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Copied #{file_to_paste}"

            # Add a placeholder to indicate doc as work in progress
            documentation_empty(file_to_paste) if File.size(file_to_paste) < 100

            # Add links and info about the doc, only if file is not index, 
            # index include other files that already has markdown info and links
            documentation_footer(file_to_copy, file_to_paste) unless file_to_paste.end_with?("index.html.md.erb")
        end
    end
end

def documentation_empty file_to_paste

    footer= <<~TEXT
        <section class="lesli-parche-working">
            <img alt="cat docs" src="/images/cats/dev.png" />
            <p>Work in progress...</p>
            <a href="/">Take me home</a>
        </section>
    TEXT

    # Append the new content to the file
    File.open(file_to_paste, 'a') do |f|
        f.puts(footer)
    end

    puts "Empty #{file_to_paste}"
end

def documentation_footer file_to_copy, file_to_paste

    file_mtime = File.mtime(file_to_copy)

    file_mtime_utc = file_mtime.utc.strftime("%Y/%m/%d")

    file_link = file_to_copy
        .gsub("../LesliBuilder/engines/", "https://github.com/LesliTech/")
        .gsub("/docs/", "/tree/master/docs/")

    footer= <<~TEXT

        <section class="lesli-markdown-info">
            <p><a target="blank" href="#{file_link}"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
            <p><b>Last Update: </b>#{file_mtime_utc}</p>
        </section>

        <!-- This code was automatically generated -->
        <!-- to update this docs please run rake docs:build -->

    TEXT

    # Append the new content to the file
    File.open(file_to_paste, 'a') do |f|
        f.puts(footer)
    end

    puts "Footer #{file_to_paste}"

end 

def documentation_replaces
    ["engines", "gems"].each do |section|
        [
            "source/#{section}/*/*.html.md*",
            "source/#{section}/*/*/*.html.md*"
        ].each do |folder|
            Dir.glob(folder) do |file|

                project = file.gsub("source/#{section}/", "").split("/").first

                content = File.read(file)

                content.gsub!('src="../app/assets/images/lesli/', "src=\"/images/#{section}/lesli/")
                content.gsub!('src="../app/assets/images/lesli_', "src=\"/images/#{section}/")

                content.gsub!('src="../images/', "src=\"/images/#{section}/#{project}/")
                content.gsub!('src="./images/', "src=\"/images/#{section}/#{project}/")

                content.gsub!('src="./docs/images/', "src=\"/images/#{section}/#{project}/")

                File.write(file, content)

                puts "Replaced #{file}"
            end 
        end
    end
end 
