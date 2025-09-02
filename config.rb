# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 10 versions"
end


# Layouts
page "/", layout: "website"
page "/gems/*", layout: "documentation"
page "/engines/*", layout: "documentation"
page "/notes.html", layout: "notes"
page "/notes/*", layout: "notes"
page "/*.json", layout: false
page "/*.xml", layout: false
page "/*.txt", layout: false


ignore "/notes/*"
ignore "/notes.html"


# · auxiliar pages
page "/404.html", :directory_index => false


# · redirections
redirect "start.html", to: "/engines/lesli/getting-started/"
redirect "start/", to: "/engines/lesli/getting-started/"


# · localization
activate :i18n, :mount_at_root => :en


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
