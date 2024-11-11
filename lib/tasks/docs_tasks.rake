
#require "L2"
require "fileutils"

DOCUMENTATION_SOURCE_PATH = File.join("source", "engines")
DOCUMENTATION_DESTINATION_PATH = File.join("source", "engines")

DOCS_FOLDERS = ["lesli"]

namespace :docs do
    desc "build"
    task :build do
        documentation
        images
    end
end

def images
    source_paths = [
        "../LesliBuilder/engines/*/docs/images/*",
        "../LesliBuilder/engines/*/app/assets/images/*/*.svg"
    ]

    destination_base = "source/public/images/engines"

    # Define a helper method to get the engine name from the path
    def get_engine_name(file)
        file.match(%r{engines/([^/]+)/})[1]
    end

    source_paths.each do |pattern|
        Dir.glob(pattern).each do |file_path|
            engine_name = get_engine_name(file_path)
            destination_dir = File.join(destination_base, engine_name)

            # Create destination directory if it doesn't exist
            FileUtils.mkdir_p(destination_dir)

            # Copy file to the destination directory, preserving its name
            FileUtils.cp(file_path, destination_dir)
            puts "Copied #{file_path} to #{destination_dir}"
        end
    end
end

def documentation 

    def get_engine(file_path)
        file_path = file_path.sub("../LesliBuilder/engines/","").sub("/docs","")
        file_path = File.dirname(file_path).downcase
        return file_path if file_path == "lesli" 
        return file_path if file_path.start_with?("lesli/")
        file_path.sub("lesli", "")
    end

    FileUtils.rm_rf(DOCUMENTATION_DESTINATION_PATH)
    FileUtils.mkdir_p(DOCUMENTATION_DESTINATION_PATH)

    source_paths = [
        "../LesliBuilder/engines/*/docs/*/*.md",
        "../LesliBuilder/engines/*/docs/*.md"
    ].each do |source_path|
        files = Dir.glob(source_path) do |file_path|

            engine_folder_name = get_engine(file_path)
            engine_folder_path = File.join("source", "engines", engine_folder_name)
            file_name = File.basename(file_path, '.*')

            FileUtils.mkdir_p(engine_folder_path) unless File.exist?(engine_folder_path)

            if file_name == "readme"
                file_name = "index.html.md.erb"
            else
                file_name = "#{file_name}.html.md"
            end

            dest_path = File.join(engine_folder_path, file_name)

            if File.size(file_path) < 45
                File.write("#{dest_path}.erb", <<~TEXT.gsub("\n", " ")
                <section class="lesli-parche-working">
                    <%= image_tag "cats/dev.png", alt: "cat docs" %>
                    <p>Work in progress...</p>
                    <a href="/">Take me home</a>
                </section>
                TEXT
                )
                next
            end

            FileUtils.cp(file_path, dest_path)
            #pp "Copied #{dest_path}"
        end
    end
end
