/*

Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import fs from "fs"
import path from "path"

import { 
    navigationLesliAbout, 
    navigationLesliStart, 
    navigationLesliDatabase 
} from "./navigationLesli"


function getNavigation(folder, name) {
    const folderPath = path.resolve("source", folder)

    const pages = fs.readdirSync(folderPath)
    .filter(file => path.extname(file) === '.md')
    .filter(file => file.toLowerCase() !== 'index.md')
    .map(file => file.replace(".md", ""))
    .map(file => {
        return {
            text: file.charAt(0).toUpperCase() + file.substr(1),
            link: `/${folder}/${file}`
        }
    })

    return [{
        text: name,
        items: pages
    }]
}


// · d
function getNavigationEngine(folder, name) { 

    var navigation = getNavigation(folder, name).map(folder => {
        folder.items = folder.items.filter(link => {
            return ![
                "About",
                "Installation", 
                "Translations", 
                "Dashboards", 
                "Database", 
                "Tasks"
            ].includes(link.text)
        })
        return folder
    })

    return [{
        text: name,
        items: [
            { text: "About",        link: `/${folder}/about` },
            { text: "Installation", link: `/${folder}/installation` },
            { text: "Dashboards",   link: `/${folder}/dashboards` },
            { text: "Database",     link: `/${folder}/database` },
            { text: "Tasks",        link: `/${folder}/tasks` }
        ]
    }, {
        text: "",
        items: navigation[0].items
    }]
}


// · 
export default {
    "/engines/security/": getNavigation("engines/security", "Engine Security"),
    "/engines/shield/": getNavigation("engines/shield", "Engine Shield"),
    "/engines/admin/": getNavigation("engines/admin", "Engine Admin"),
    "/engines/babel/": getNavigationEngine("engines/babel", "Engine Babel"),
    "/engines/lesli/": [
        navigationLesliAbout,
        navigationLesliStart,
        ...getNavigation("engines/lesli/contributing", "Contributing"),
        navigationLesliDatabase,
        ...getNavigation("engines/lesli/ruby-on-rails", "Ruby on Rails"),
        ...getNavigation("engines/lesli/theming", "Theming"),
        ...getNavigation("engines/lesli/testing", "Testing")
    ],
    
    "/vue/": [
        ...getNavigation("vue/elements", "Elements"),
        ...getNavigation("vue/components", "Components"),
        ...getNavigation("vue/composables", "Composables"),
    ]
}
