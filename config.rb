# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

set :site_url, "https://www.lesli.dev"
set :site_title, "Lesli Framework"
set :site_description, "Lesli is an open-source Ruby on Rails framework for building scalable SaaS applications."
set :trailing_slash, false


# Layouts
page "/", layout: "website"
page "/gems/*", layout: "documentation"
page "/engines/*", layout: "documentation"
page "/notes.html", layout: "documentation"
page "/notes/*", layout: "documentation"
page "/*.json", layout: false
page "/*.xml", layout: false
page "/*.txt", layout: false


# · auxiliar pages
page "/404.html", :directory_index => false


# · redirections
redirect "start.html", to: "/engines/lesli/start/"
redirect "about.html", to: "/engines/lesli/about/"
redirect "blog.html", to: "/notes/"


# · localization
activate :i18n, :mount_at_root => :en


activate :autoprefixer do |prefix|
  prefix.browsers = "last 10 versions"
end


# · Activate and configure extensions
activate :livereload
activate :directory_indexes
activate :syntax do |syntax|
  syntax.css_class = "syntax-highlight"
end


# · build settings (production)
configure :build do
    activate :gzip
    activate :asset_hash
    activate :minify_css
    activate :minify_html
    #activate :minify_javascript
end


# · deploy settings 
activate :deploy do |deploy|
    system "rm -rf ./build"
    deploy.build_before = true
    deploy.deploy_method = :git
    deploy.branch = "production"
end


# · 
set :markdown, tables: true, autolink: true, gh_blockcode: true, fenced_code_blocks: true, with_toc_data: false
set :markdown_engine, :redcarpet
