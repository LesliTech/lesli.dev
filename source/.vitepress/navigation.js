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
import path from "path"
import fs from "fs"


// · 
function getNavigation(folder, name) { 

    const folderPath = path.resolve("source", folder)

    const links = [
        { text: "About",        link: `/${folder}/about` },
        { text: "Installation", link: `/${folder}/installation` },
        { text: "Translations", link: `/${folder}/translations` },
        { text: "Dashboards",   link: `/${folder}/dashboards` },
        { text: "Database",     link: `/${folder}/database` },
        { text: "Tasks",        link: `/${folder}/tasks` }
    ]

    const pages = fs.readdirSync(folderPath)
    .filter(file => path.extname(file) === '.md')
    .filter(file => file.toLowerCase() !== 'index.md')
    .filter(file => {
        return ![
            "about.md",
            "installation.md", 
            "translations.md", 
            "dashboards.md", 
            "database.md", 
            "tasks.md"
        ].includes(file)
    })
    .map(file => file.replace(".md", ""))
    .map(file => {
        return {
            text: file.charAt(0).toUpperCase() + file.substr(1),
            link: `/${folder}/${file}`
        }
    })

    return [{
        text: name,
        items: links
    },{
        text: "",
        items: pages
    }]
}


// · 
const navigationCore = [
    ...getNavigation("about", "About"),
    ...getNavigation("start", "Getting started"),
    ...getNavigation("contrib", "Contributing")
]

// · 
export default {
    "/about/": navigationCore,
    "/start/": navigationCore,
    "/contrib/": navigationCore,
    "/engines/": navigationCore,

    "/engines/guard/": getNavigation("engines/guard", "Engine Guard"),
    "/engines/babel/": getNavigation("engines/babel", "Engine Babel"),

    "/lesli/": [
        ...getNavigation("lesli/database", "Database"),
        ...getNavigation("lesli/ruby-on-rails", "Ruby on Rails"),
        ...getNavigation("lesli/frontend", "Frontend")
    ],
    
    "/vue/": [
        ...getNavigation("vue/elements", "Elements"),
        ...getNavigation("vue/components", "Components"),
        ...getNavigation("vue/composables", "Composables"),
    ]
}
