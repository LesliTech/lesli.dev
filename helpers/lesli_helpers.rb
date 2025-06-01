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

module LesliHelpers

    def lesli_current_page current_page
        return "index" if current_page.blank?
        return current_page.path.sub('.html', '')
    end

    def lesli_stylesheet_for(current_page)
        return "notes" if current_page.path.start_with?("notes")
        return "documentation" if current_page.path =~ %r{^engines/.+}
        return "documentation" if current_page.path.start_with?("documentation")
        return lesli_current_page(current_page)
    end      

    def lesli_website_version
        Time.now.strftime("%y%m%d.%H%M")
    end

    def language_name locale
        return 'English' if locale == :en
        return 'Español' if locale == :es
        return 'Deutsch' if locale == :de
    end 

    def documentation_title current_page 
        current_page.path
        .sub("engines/", "")
        .sub(".html", "") 
    end

    # print a custom icon for lesli
    # this is a copy of Lesli/app/helpers/html_helper.rb
    def lesli_svg(name)
        content_tag("svg", :width => "64px", :height => "64px") do 
            "<use xlink:href='##{name}'></use>".html_safe
        end
    end 

    def get_files_from folder 
        Dir.glob(folder)
        .reject{ |file| File.basename(file) == "index.html.md.erb" }
        .sort.map do |files|
            {
                :name => File.basename(files).sub(".html.md", "").sub(".erb",""),
                :url => files.sub("source", "").sub(".html.md", "").sub(".erb","")
            }
        end
    end

    def get_navigation_for_vue folder

        composables = get_files_from(File.join("source", "vue", "composables", "*.md"))
        components = get_files_from(File.join("source", "vue", "components", "*.md"))
        elements = get_files_from(File.join("source", "vue", "elements", "*.md"))

        [{
            name: "Composables",
            url: "vue/composables",
            items: folder == "composables" ? composables : []
        }, {
            name: "Components",
            url: "vue/components",
            items: folder == "components" ? components : []
        }, {
            name: "Elements",
            url: "vue/elements",
            items: folder == "elements" ? elements : []
        }]
    end

    def get_navigation_for_engine engine 
        return get_navigation_for_engine_lesli if engine == "lesli"
        return [{
            name: "Engine #{engine}",
            items: [
                { name: "About",        url: "/engines/#{engine}" },
                { name: "Installation", url: "/engines/#{engine}/installation" },
                { name: "Translations", url: "/engines/#{engine}/translations" },
                { name: "Dashboards",   url: "/engines/#{engine}/dashboards" },
                { name: "Database",     url: "/engines/#{engine}/database" },
                { name: "Tasks",        url: "/engines/#{engine}/tasks" }
            ]
        }, {
            name: "",
            items: get_files_from("source/engines/#{engine}/*.md").reject do |item|
                [
                    "about", 
                    "installation", 
                    "translations", 
                    "dashboards", 
                    "database", 
                    "tasks"
                ].include?(item[:name])
          end
           
        }]
    end 

    def get_navigation_for_engine_lesli 
        [{
            name: "About",
            items: [
                { name: "Lesli",    url: "/engines/lesli/about/lesli" },
                { name: "Brand",     url: "/engines/lesli/about/brand" },
                { name: "Demo",     url: "/engines/lesli/about/demo" },
                { name: "Ecosystem",url: "/engines/lesli/about/ecosystem" }
            ]
        }, {
            name: "Getting started",
            items: [
                { name: "Installation", url: "/engines/lesli/getting-started/installation" },
                { name: "Development",  url: "/engines/lesli/getting-started/development" },
                { name: "Credentials",  url: "/engines/lesli/getting-started/credentials" },
                { name: "Configuration",url: "/engines/lesli/getting-started/configuration" }
            ]
        }, {
            name: "Database",
            items: [
                { name: "Structure", url: "/engines/lesli/database/structure" },
                { name: "Versioning", url: "/engines/lesli/database/versioning" },
            ]
        }, {
            name: "Ruby on Rails",
            items: get_files_from(File.join("source", "lesli", "ruby-on-rails", "*"))
        }, {
            name: "Theming",
            items: get_files_from(File.join("source", "lesli", "theming", "*"))
        }, {
            name: "Testing",
            items: get_files_from(File.join("source", "lesli", "testing", "*"))
        }, {
            name: "Contributing",
            items: get_files_from(File.join("source", "lesli", "contributing", "*"))
        }]
    end
end
