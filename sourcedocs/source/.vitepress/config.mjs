

import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";
import themeConfig from "./theme-config.mjs"



// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Lesli Documentation",
    description: "Ruby on Rails SaaS Development Framework.",
    base: "/docs/",
    outDir: "../../build/docs",
    themeConfig: themeConfig,
    vite: { plugins: [SearchPlugin({})] }
})
