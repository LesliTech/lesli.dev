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
        string.gsub("-", " ").split(" ").map(&:capitalize).join(" ")
    end

    def safe_join(array, sep = "")
        array.join(sep)
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
        .reject{ |file| File.basename(file) == "index.html.md" }
        .sort.map do |files|
            {
                :name => File.basename(files).sub(".html.md", "").sub(".erb","").sub("-"," "),
                :url => files.sub("source", "").sub(".html.md", "").sub(".erb","")
            }
        end

        return sort_files_by(files, order) if order
        return files
    end

    def navigation_for(namespace, project, folder, order:nil)

        if project != "lesli" and folder == "about"
            order = [
                "about", 
                "installation", 
                "translations", 
                "dashboards", 
                "database", 
                "tasks"
            ]
        end

        files = get_files_from(File.join("source", namespace, project, folder, "*"),order:order)

        links = files.map do |file|
            content_tag(:li) do
                content_tag(:a, file[:name], href: file[:url])
            end
        end

        content_tag(:ul) do
            content_tag(:li, content_tag(:h3, titleize(folder))) + safe_join(links).html_safe
        end
    end
end
