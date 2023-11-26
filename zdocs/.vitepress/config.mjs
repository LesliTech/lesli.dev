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
import { defineConfig } from "vitepress"
import { SearchPlugin } from "vitepress-plugin-search";
import themeConfig from "./theme-config.mjs"



// · website config
export default defineConfig({
    title: "Lesli Documentation",
    description: "Ruby on Rails SaaS Development Framework.",
    base: "/docs/",
    outDir: "../build/docs",
    vite: { plugins: [SearchPlugin({})] },
    head: [
        ["link", { rel: "icon", href: "/favicon.png" }],
        [
            "script", {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-8SZFQK2DZB",
            },
        ],
        [
            "script", {},
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-8SZFQK2DZB');",
        ]
    ],
    themeConfig: themeConfig
})
