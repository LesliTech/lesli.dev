require "time"

site_url = config.site_url.to_s.chomp("/")

xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
    sitemap.resources
    .select { |page| page.destination_path.end_with?(".html") }
    .each do |page|

        next if page.data.noindex
        next if page.url.nil? || page.url.empty?

        xml.url do
            xml.loc "#{site_url}#{page.url}"

            if page.data.updated_at
                xml.lastmod Time.parse(page.data.updated_at.to_s).utc.iso8601
            elsif page.source_file && File.exist?(page.source_file)
                xml.lastmod File.mtime(page.source_file).utc.iso8601
            end

            xml.changefreq(page.data.changefreq || "monthly")
            xml.priority(page.data.priority || "0.5")
        end
    end
end
