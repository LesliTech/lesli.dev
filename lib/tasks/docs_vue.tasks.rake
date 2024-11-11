
#require "L2"
require "fileutils"

VUE_DOCUMENTATION_DESTINATION_PATH = File.join("source", "vue")
VUE_DOCUMENTATION_SOURCE_PATHS = [
    "../lesli-vue/source/composables",
    "../lesli-vue/source/components",
    "../lesli-vue/source/elements"
]

namespace :docs_vue do
    desc "build"
    task :build do
        documentation
    end
end

def documentation 

    FileUtils.rm_rf(VUE_DOCUMENTATION_DESTINATION_PATH)
    FileUtils.mkdir_p(VUE_DOCUMENTATION_DESTINATION_PATH)

    VUE_DOCUMENTATION_SOURCE_PATHS.each do |source_folder|
        Dir.glob(File.join(source_folder, "*", "*.md")) do |file_to_copy|

            file_name = File.basename(file_to_copy, ".*").downcase

            if file_name == "readme"
                file_name = "index.html.md.erb"
            else
                file_name = "#{file_name}.html.md"
            end

            file_folder = File.join(
                VUE_DOCUMENTATION_DESTINATION_PATH, 
                source_folder.split("/").last
            )

            FileUtils.mkdir_p(file_folder) unless File.exist?(file_folder)

            file_to_paste = File.join(
                file_folder,
                file_name
            )

            FileUtils.cp(file_to_copy, file_to_paste)
        end
    end


    return 
    VUE_DOCUMENTATION_SOURCE_PATHS.each do |source_path|
        Dir.glob(File.join(source_path, "*", "*.md")) do |file|

            pp file

            folder_name = file
                .sub(source_path, "")

            

            destination_path = File.join(VUE_DOCUMENTATION_DESTINATION_PATH, folder_name)
            pp folder_name
            next
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
