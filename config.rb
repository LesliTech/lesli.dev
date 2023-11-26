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


# · custom comopressor for javascript
require "uglifier"


# · Ignore vitepress docs
ignore "/docs/*"


# · 
config[:host] = "https://www.lesli.dev"


# · Layouts
page '/*.html', layout: "website"
page '/*.json', layout: false
page '/*.xml', layout: false
page '/*.txt', layout: false

page "/404.html", :directory_index => false
page "/docs/*", :directory_index => false
page "/dist/*", :directory_index => false


# · Activate and configure extensions
activate :directory_indexes
activate :livereload
activate :inline_svg


# · localization
activate :i18n, :mount_at_root => :en


# · extensions settings
activate :autoprefixer do |prefix|
    prefix.browsers = "last 10 versions"
end


# · development settings 
configure :development do
    set :debug_assets, true
end


# · build settings (production)
configure :build do
    activate :gzip
    activate :asset_hash
    activate :minify_css
    activate :minify_html
    #activate :minify_javascript, :inline => true, compressor: proc { ::Uglifier.new(harmony: true)}
end


# · deploy settings 
activate :deploy do |deploy|
    #system "rm -rf ./build"
    #deploy.build_before = true
    deploy.deploy_method = :git
    deploy.branch = "production"
end
