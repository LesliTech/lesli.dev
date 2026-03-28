=begin

Lesli

Copyright (c) 2025, Lesli Technologies, S. A.

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



# Usage:
#   rails new LesliDemo -m lesli_demo_template.rb --skip-bundle
#   rails new LesliDemo -m https://www.lesli.dev/rails/template-dev.rb



# List of engines to install
LESLI_ENGINES = [
    "Lesli", 
    "LesliBell", 
    "LesliAdmin", 
    "LesliBabel", 
    "LesliAudit", 
    "LesliShield",
    "LesliSupport", 
    "LesliCalendar", 
    "LesliDashboard"
]



# List of gems to install
LESLI_GEMS = [
    "LesliDate",
    "LesliView",
    "LesliAssets",
    "LesliSystem"
]



# Reusable method to install packages
def install_lesli_package(folder, package_name)

    # get the engine folder name (development only)
    package_code = package_name.gsub(/([a-z\d])([A-Z])/, '\1_\2').downcase

    empty_directory("#{folder}/#{package_name}")
    run(%(git clone --depth 1 --branch master git@github.com:LesliTech/#{package_name}.git #{folder}/#{package_name}))

    # load engine from source code
    gem "#{package_code}", path: "#{folder}/#{package_name}"
end



# Install dependencies
LESLI_ENGINES.each {|engine_name| install_lesli_package('engines', engine_name) } 
LESLI_GEMS.each {|gem_name| install_lesli_package('gems', gem_name) } 



# Clean lockfile 
remove_file "Gemfile.lock" if File.exist?("Gemfile.lock")



# Install general gems
say_status :bundle, "Installing gems", :blue
run "bundle install"



# Run Lesli installer
say_status :lesli, "Running rails generate lesli:install", :blue
run "bundle exec rails generate lesli:install"



# Enable demo mode 
gsub_file 'config/initializers/lesli.rb', 'config.demo = false', 'config.demo = true'



# Reset DB + seed demo data (docs)
say_status :lesli, "Running rake lesli:db:reset", :blue
run "bundle exec rake lesli:db:reset"



# Installation completed!
say_status :done, "Lesli demo app ready ✅", :green
