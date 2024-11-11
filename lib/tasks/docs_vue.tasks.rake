
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

def documentation3 

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
end
