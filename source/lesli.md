---
layout: home
pageClass: docs-page
---
<script setup>

const links = [{
    href: "/engines/lesli/database/",
    icon: "ri-database-line",
    text: "Database"
}, {
    href: "/engines/lesli/ruby-on-rails/",
    icon: "ri-server-line",
    text: "Ruby on Rails"
}, {
    href: "/engines/lesli/theming/",
    icon: "ri-window-line",
    text: "Frontend"
}, {
    href: "/engines/lesli/theming/",
    icon: "ri-palette-line",
    text: "Theming"
}, {
    href: "/engines/lesli/security/",
    icon: "ri-shield-line",
    text: "Security"
}, {
    href: "/engines/lesli/generators/",
    icon: "ri-code-line",
    text: "Generators"
}, {
    href: "/engines/lesli/testing/",
    icon: "ri-bug-line",
    text: "Testing"
}, {
    href: "/engines/lesli/engines/",
    icon: "ri-shapes-line",
    text: "Engines"
}, {
    href: "/engines/lesli/deployment/",
    icon: "ri-flashlight-line",
    text: "Deployment"
}]

import componentLesliFooter from "./.vitepress/components/lesli-footer.vue"
</script>

<header class="lesli-page-header">
    <img class="logo m-auto" alt="cat docs" src="/images/cats/docs.svg" />
    <p class="description">Lesli Documentation</p>
</header>

<section class="container lesli-page-content-boxes">
    <div class="columns">
        <div class="column" v-for="link in links">
            <a :href="link.href">
                <i :class="[link.icon]"></i>
                {{ link.text }}
            </a>
        </div>
    </div>
</section>

<br />
<br />
<br />
<br />

<componentLesliFooter/>

<style lang="scss">
    @import "./.vitepress/stylesheets/pages/docs.scss";
</style>
