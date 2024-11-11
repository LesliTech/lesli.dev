
#require "L2"
require "fileutils"

DOCUMENTATION_SOURCE_PATH = File.join("source", "engines")
DOCUMENTATION_DESTINATION_PATH = File.join("source", "engines")

namespace :docs do
    desc "build"
    task :build do
        #documentation
        documentation_empty
        #images
    end
end

def get_engine_name(file)
    file = file.split("/")[3].downcase
    return file if file == "lesli" 
    return file.sub("lesli", "")
end

def get_engine_path(file)
    engine_name = get_engine_name(file)
    engine_path = file
    engine_path = engine_path.gsub("../LesliBuilder/", "")
    engine_path = engine_path.gsub("/docs", "")
    engine_path = engine_path.gsub("Lesli", "") if engine_name != "lesli"
    engine_path.downcase
  end

def images
    source_paths = [
        "../LesliBuilder/engines/*/docs/images/*",
        "../LesliBuilder/engines/*/app/assets/images/*/*.svg"
    ]

    destination_base = "source/images/engines"
    FileUtils.rm_rf(destination_base)
    FileUtils.mkdir_p(destination_base)

    source_paths.each do |source_folder|
        Dir.glob(source_folder).each do |file_to_copy|

            file_name = File.basename(file_to_copy).downcase
            engine_name = get_engine_name(file_to_copy)
            
            folder_path = File.join(
                destination_base, 
                engine_name
            )

            # Create destination directory if it doesn't exist
            FileUtils.mkdir_p(folder_path)

            file_to_paste = File.join(
                folder_path,
                file_name
            )

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Copied #{file_to_paste}"
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
            file_to_paste = file_to_paste.gsub(".md", ".html.md.erb")
            
            if file_to_paste.end_with?("readme.html.md")
                file_to_paste = file_to_paste.gsub("readme.html.md.erb", "index.html.md.erb")
            end  

            FileUtils.mkdir_p(File.dirname(file_to_paste)) unless File.exist?(File.dirname(file_to_paste))

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_to_copy, file_to_paste)
            puts "Copied #{file_to_paste}"
        end
    end
end

def documentation_empty
    Dir.glob("source/engines/*/*.md.erb") do |file|
        pp file
        pp File.size(file)
        if File.size(file) < 100
            File.write(file, <<~TEXT.gsub("\n", " ")
            <section class="lesli-parche-working">
                <%= image_tag "cats/dev.png", alt: "cat docs" %>
                <p>Work in progress...</p>
                <a href="/">Take me home</a>
            </section>
            TEXT
            )
        end
    end 
end 
