
#require "L2"
require "fileutils"

namespace :docs do
    desc "build"
    task :build do

        FileUtils.rm_rf("source/engines")
        FileUtils.rm_rf("source/images/engines")

        documentation
        documentation_empty
        documentation_replaces
        images
    end
end

def get_engine_name(file)
    file = file.split("/")[3].downcase
    return file if file == "lesli" 
    return file.sub("lesli", "")
end


def images

    def get_file_to_paste file
        engine_name = get_engine_name(file)
        engine_path = file
        engine_path = engine_path.gsub("../LesliBuilder/engines", "")
        engine_path = engine_path.gsub("/docs", "")
        engine_path = engine_path.gsub("/images", "")
        engine_path = engine_path.gsub("Lesli", "") if engine_name != "lesli"

        # fix path for images from rails assets folder
        engine_path = engine_path.gsub("app/assets/", "")
        engine_path = engine_path.gsub("lesli_#{engine_name}/", "")

        File.join("source", "images", "engines", engine_path.downcase)
    end 

    [
        "../LesliBuilder/engines/*/docs/images/*",
        "../LesliBuilder/engines/*/app/assets/images/*/*.svg"
    ].each do |source_folder|
        Dir.glob(source_folder).each do |file_to_copy|

            file_to_paste = get_file_to_paste(file_to_copy)

            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Image #{file_to_paste}"
        end
    end
end

def documentation 

    def get_file_to_paste file
        engine_name = get_engine_name(file)
        engine_path = file
        engine_path = engine_path.gsub("../LesliBuilder/", "")
        engine_path = engine_path.gsub("/docs", "")
        engine_path = engine_path.gsub("Lesli", "") if engine_name != "lesli"
        File.join("source", engine_path.downcase)
    end 

    source_paths = [
        "../LesliBuilder/engines/*/docs/*/*.md",
        "../LesliBuilder/engines/*/docs/*.md"
    ].each do |source_path|
        Dir.glob(source_path) do |file_to_copy|

            file_to_paste = get_file_to_paste(file_to_copy)
            file_to_paste = file_to_paste.gsub(".md", ".html.md")
            
            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            if file_to_paste.end_with?("lesli.dev.html.md")
                file_to_paste = file_to_paste.gsub("lesli.dev.html.md", "index.html.md.erb")
            end  

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Copied #{file_to_paste}"

            documentation_footer(file_to_copy, file_to_paste) unless file_to_paste.end_with?("index.html.md.erb")
        end
    end
end

def documentation_empty
    [
        "source/engines/*/*.html.md*",
        "source/engines/*/*/*.html.md*"
    ].each do |folder|
        Dir.glob(folder) do |file|
            if File.size(file) < 100
                File.write(file, <<~TEXT.gsub("\n", " ")
                <section class="lesli-parche-working">
                    <%= image_tag "cats/dev.png", alt: "cat docs" %>
                    <p>Work in progress...</p>
                    <a href="/">Take me home</a>
                </section>
                TEXT
                )
                File.rename(file, file.gsub(".md", ".md.erb"))
                puts "Empty #{file}"
            end
        end 
    end 
end

def documentation_replaces
    [
        "source/engines/*/*.html.md*",
        "source/engines/*/*/*.html.md*"
    ].each do |folder|
        Dir.glob(folder) do |file|

            engine = file.gsub("source/engines/", "").split("/").first

            content = File.read(file)

            content.gsub!('src="../app/assets/images/lesli/', 'src="/images/engines/lesli/')
            content.gsub!('src="../app/assets/images/lesli_', 'src="/images/engines/')

            content.gsub!('src="../images/', "src=\"/images/engines/#{engine}/")
            content.gsub!('src="./images/', "src=\"/images/engines/#{engine}/")

            File.write(file, content)

            puts "Replaced #{file}"
        end 
    end
end 



def documentation_footer file_to_copy, file_to_paste

    file_mtime = File.mtime(file_to_copy)

    file_mtime_utc = file_mtime.utc.strftime("%Y/%m/%d %H:%M")

    file_link = file_to_copy
        .gsub("../LesliBuilder/engines/", "https://github.com/LesliTech/")
        .gsub("/docs/", "/tree/master/docs/")

    footer= <<~TEXT

        <section class="lesli-documentation-footer">
            <p><a target="blank" href="#{file_link}"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
            <p><b>Last Update: </b>#{file_mtime_utc}</p>
        </section>

        <!-- This code was automatically generated -->
        <!-- to update this docs please run rake docs:build -->

    TEXT

    # Append the new content to the file
    File.open(file_to_paste, 'a') do |f|
        f.puts(footer)
    end

    puts "Footer #{file_to_paste}"

end 
