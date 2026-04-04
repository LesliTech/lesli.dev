# config.rb or helpers/seo_helpers.rb

module SeoHelpers
    def auto_title(current_page)

        # Define the site brand name shown at the end of the title.
        site_title = "Lesli"

        # Read the current page URL from Middleman.
        page_path = current_page.url.to_s

        # Treat empty paths as the homepage.
        page_path = "/" if page_path.empty?

        # Remove trailing index.html if present.
        page_path = page_path.gsub(/index\.html$/, "")

        # Ensure the path starts with a slash.
        page_path = "/#{page_path}" unless page_path.start_with?("/")

        # Remove trailing .html extension if present.
        page_path = page_path.gsub(/\.html$/, "")

        # Normalize repeated slashes.
        page_path = page_path.gsub(%r{/+}, "/")

        # Final fallback to homepage if normalization empties the path.
        page_path = "/" if page_path.empty?

        # Split the path into segments.
        segments = page_path.split("/").reject(&:empty?)

        # Read optional manual title from frontmatter.
        manual_title = current_page.data.title.to_s.strip

        # Define friendly names for common sections.
        pretty_names = {
            "docs" => "Documentation",
            "notes" => "Notes",
            "engines" => "Engines",
            "gems" => "Gems",
            "about" => nil,
            "getting-started" => "Getting Started",
            "pull requests" => "Pull Requests"
        }

        # Convert a URL segment into a readable label.
        humanize_segment = lambda do |segment|
            segment
            .to_s
            .gsub(/[-_]/, " ")
            .split
            .map(&:capitalize)
            .join(" ")
        end

        # Build the title parts.
        title_parts =
            if segments.empty?
                # Homepage title.
                [manual_title.empty? ? "Open-Source Ruby on Rails SaaS Framework" : manual_title, site_title]

            elsif (segments.first == "engines" || segments.first == "gems")
                # Engine pages:
                # /engines/admin/about/dashboards
                # => Dashboards · Admin · Engines · Lesli
                # Gem pages:
                # /gems/view/forms/builder
                # => Builder · Forms · View · Gems · Lesli

                engine = segments[1]
                tail_segments = segments[2..] || []

                tail_titles = tail_segments.filter_map do |segment|
                    pretty_names.key?(segment) ? pretty_names[segment] : humanize_segment.call(segment)
                end

                [
                    *tail_titles.reverse,
                    (manual_title.empty? ? humanize_segment.call(engine) : manual_title),
                    segments.first.capitalize,
                    site_title
                ]

            else
                # Generic fallback for all other pages.
                if manual_title.empty?
                    [
                        *segments.filter_map { |segment| pretty_names.key?(segment) ? pretty_names[segment] : humanize_segment.call(segment) }.reverse,
                        site_title
                    ]
                else
                    [manual_title, site_title]
                end
            end

        # Clean up the title parts.
        title_parts = title_parts.compact.map(&:strip).reject(&:empty?).uniq

        # Build the final title.
        final_title = title_parts.join(" · ")

        final_title 
    end

    def auto_description(page, max_length: 155)
        # Prefer explicit page description if present
        explicit = page.data.description.to_s.strip
        return explicit unless explicit.empty?

        # We need a real source file to inspect
        return default_og_description unless page.respond_to?(:source_file)
        return default_og_description unless page.source_file && File.exist?(page.source_file)

        content = File.read(page.source_file)

        # Remove YAML frontmatter
        content = content.sub(/\A---\s*\n.*?\n---\s*\n/m, "")

        # Remove the documentation replica comment if present
        content = content.gsub(
            /<!--\s*This file is a replica of the main documentation file for this section\s*-->/m,
            " "
        )

        # Remove ERB tags
        content = content.gsub(/<%=?[\s\S]*?%>/, " ")

        # Remove code fences
        content = content.gsub(/```[\s\S]*?```/, " ")

        # Remove inline code
        content = content.gsub(/`[^`]+`/, " ")

        # Convert markdown links: [text](url) -> text
        content = content.gsub(/\[([^\]]+)\]\([^)]+\)/, '\1')

        # Remove markdown images entirely
        content = content.gsub(/!\[.*?\]\(.*?\)/, " ")

        # Remove headings / blockquotes / list markers / emphasis chars
        content = content.gsub(/^\s{0,3}[#>\-\*\+]+\s?/m, " ")
        content = content.gsub(/[*_~]/, "")

        # Remove any raw HTML tags
        content = content.gsub(/<[^>]+>/, " ")

        # Normalize whitespace
        content = content.gsub(/\s+/, " ").strip

        return config.site_description if content.empty?

        # Truncate cleanly
        if content.length > max_length
            truncated = content[0...max_length]
            truncated = truncated.sub(/\s+\S*\z/, "")
            "#{truncated}…"
        else
            content
        end
    end
end
