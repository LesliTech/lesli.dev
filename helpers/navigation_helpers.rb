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

module NavigationHelpers

    def titleize(string)
        string.split(" ").map {|word| word.capitalize}.join(" ")
    end

    def sort_files_by(array, desired_order)
        # Create a hash mapping each name in the desired_order to its index
        # e.g., { "Versioning" => 0, "Environment" => 1 }
        desired_set = desired_order.each_with_index.to_h

        # Sort the array with a custom sort key
        # We use `with_index` to retain original positions for fallback sorting
        array.sort_by.with_index do |item, index|
            if desired_set.key?(item[:name])
                # If the item's name is in the desired order,
                # return a tuple [0, position_in_desired_order] to sort it first
                [0, desired_set[item[:name]]]
            else
                # Otherwise, return [1, original_index] to place it after
                # the desired items, keeping the original order
                [1, index]
            end
        end
    end

    def get_files_from folder, order:nil
        files = Dir.glob(folder)
        .reject{ |file| File.basename(file) == "index.html.md.erb" }
        .sort.map do |files|
            {
                :name => File.basename(files).sub(".html.md", "").sub(".erb","").sub("-"," "),
                :url => files.sub("source", "").sub(".html.md", "").sub(".erb","")
            }
        end

        return sort_files_by(files, order) if order
        return files
    end

    def get_navigation_for section, project 

        standard_files = [
            "about", 
            "installation", 
            "translations", 
            "dashboards", 
            "database", 
            "tasks"
        ]

        return get_navigation_for_lesli if project == "lesli"
        return [{
            name: titleize(project),
            items: get_files_from(
                File.join("source", section, project, "*"),
                order: standard_files
            ).reject do |item|
                !standard_files.include?(item[:name])
            end
        }, {
            name: "",
            items: get_files_from(File.join("source", section, project, "*")).reject do |item|
                standard_files.include?(item[:name])
          end
           
        }]
    end 

    def get_navigation_for_lesli 
        [{
            name: "About",
            items: get_files_from(
                File.join("source", "engines", "lesli", "about", "*"),
                order: ["lesli"]
            )
        }, {
            name: "Getting started",
            items: get_files_from(
                File.join("source", "engines", "lesli", "getting-started", "*"),
                order: ["installation", "development"]
            )
        }, {
            name: "Database",
            items: get_files_from(
                File.join("source", "engines", "lesli", "database", "*"),
                order: ["structure", "versioning"]
            )
        }, {
            name: "Backend",
            items: get_files_from(File.join("source", "engines", "lesli", "backend", "*"))
        # }, {
        #     name: "Frontend",
        #     items: get_files_from(File.join("source", "engines", "lesli", "frontend", "*"))
        }, {
            name: "Theming",
            items: get_files_from(File.join("source", "engines", "lesli", "theming", "*"))
        }, {
            name: "Testing",
            items: get_files_from(File.join("source", "engines", "lesli", "testing", "*"))
        # }, {
        #     name: "Security",
        #     items: get_files_from(File.join("source", "engines", "lesli", "security", "*"))
        # }, {
        #     name: "Deployment",
        #     items: get_files_from(File.join("source", "engines", "lesli", "deployment", "*"))
        }, {
            name: "Contributing",
            items: get_files_from(
                File.join("source", "engines", "lesli", "contributing", "*"),
                order: ["environment"]
            )
        }]
    end
end
