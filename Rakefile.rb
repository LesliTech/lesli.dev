=begin
  
Copyright (c) 2021, all rights reserved.

All the information provided by this platform is protected by international laws related  to 
industrial property, intellectual property, copyright and relative international laws. 
All intellectual or industrial property rights of the code, texts, trade mark, design, 
pictures and any other information belongs to the owner of this platform.

Without the written permission of the owner, any replication, modification,
transmission, publication is strictly forbidden.

For more information read the license file including with this software.

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
  
=end


# · 
namespace :deploy do

    def deploy(env)
        puts "*  *  *   Deploying to #{env}   *  *  *"
        puts "-·-   -·-   -·-   -·-   -·-   -·-   -·-"
        system "TARGET=#{env} bundle exec middleman deploy"
    end

    task :preview do
        deploy :preview
    end

    task :production do
        deploy :production
    end

end
