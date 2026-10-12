require "time"

site_url = config.site_url.to_s.chomp("/")

xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
    sitemap.resources
    .select do |page|
        page.destination_path.end_with?(".html") &&
            page.url &&
            !page.url.empty? &&
            !page.data.noindex &&
            !page.is_a?(Middleman::Sitemap::Extensions::RedirectResource)
    end
    .sort_by(&:url)
    .each do |page|
        xml.url do
            xml.loc "#{site_url}#{page.url}"

            if page.data.updated_at
                xml.lastmod Time.parse(page.data.updated_at.to_s).utc.iso8601
            end
        end
    end
end
