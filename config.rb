# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 10 versions"
end


# Layouts
page '/', layout: "website"
page '/engines/*', layout: "documentation"
page '/*.json', layout: false
page '/*.xml', layout: false
page '/*.txt', layout: false

page "/404.html", :directory_index => false


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
    #activate :minify_javascript, :inline => true, compressor: proc { ::Uglifier.new(harmony: true)}
end


# · 
set :markdown, tables: true, autolink: true, gh_blockcode: true, fenced_code_blocks: true, with_toc_data: false
set :markdown_engine, :redcarpet
