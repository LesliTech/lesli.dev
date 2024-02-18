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
function url(engineName, url="") {
    return `/engines/${ engineName.toLowerCase() }/${ url }`
}


// · 
export default function(name) {
    return [{
        collapsed: false,
        text: name + " engine",
        items: [
            { text: "About",        link: url(name) },
            { text: "Installation", link: url(name, "installation") },
            { text: "Configuration",link: url(name, "configuration") },
            { text: "Translations", link: url(name, "translations") },
            { text: "Dashboards",   link: url(name, "dashboards") },
            { text: "Database",     link: url(name, "database") },
            { text: "Testing",      link: url(name, "testing") },
            { text: "Tasks",        link: url(name, "tasks") },
            { text: "Demo",         link: url(name, "demo") }
        ]
    }, {
        collapsed: false,
        text: "Users",
        items: [
            { text: "Add user",     link: url(name, "users-add") },
            { text: "List users",   link: url(name, "users-list") },
            { text: "Admin users",  link: url(name, "users-admin") },
        ]
    }]
}
