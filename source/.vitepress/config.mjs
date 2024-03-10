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
import { fileURLToPath } from "node:url"
import { defineConfig } from "vitepress"
import themeConfig from "./theme.mjs"
import svgLoader from 'vite-svg-loader'
import { withMermaid } from "vitepress-plugin-mermaid";


// · website config
const config = defineConfig({
    title: "Lesli · Ruby on Rails SaaS Development Framework",
    description: "Ruby on Rails SaaS Development Framework.",
    themeConfig: themeConfig,
    outDir: "../build",
    base: "/",
    vite: { 
        plugins: [svgLoader()],
        resolve: {
            alias: [{
                find: '@lesli-dev',
                replacement: fileURLToPath(new URL('./', import.meta.url))
            },{
                find: '@lesli-vue',
                replacement: fileURLToPath(new URL('../../../lesli-vue', import.meta.url))
            }]
          }
    },
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
        ],
        [
            "script", {},
            'document.addEventListener("DOMContentLoaded", () => { localStorage.setItem("vitepress-theme-appearance", "light"); var htmlElement = document.querySelector("html"); htmlElement.classList.remove("dark");})'
        ]
    ]
})


export default withMermaid(config);
