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

    def lesli_current_section current_page
        return "index" if current_page.blank?
        return "index" if current_page.path == 'index.html'
        return "documentation" if current_page.path.start_with?("documentation")
    end

    def lesli_current_page current_page
        return "index" if current_page.blank?
        return current_page.path.sub('.html', '')
    end

    def lesli_website_version
        Time.now.strftime("%y%m%d.%H%M")
    end

    def language_name locale
        return 'English' if locale == :en
        return 'Español' if locale == :es
        return 'Deutsch' if locale == :de
    end 

    # print a custom icon for lesli
    # this is a copy of Lesli/app/helpers/html_helper.rb
    def lesli_svg(name)
        content_tag("svg", :width => "64px", :height => "64px") do 
            "<use xlink:href='##{name}'></use>".html_safe
        end
    end 

end
