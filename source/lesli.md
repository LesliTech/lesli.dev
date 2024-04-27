---
layout: home
pageClass: lesli-page
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

<header class="lesli-page-header container">
    <div class="hero is-medium">
        <div class="hero-body">
            <img alt="Lesli Framework logo" src="/images/brand/lesli.svg" />
            <h1>Core documentation</h1>
            <p>Lesli is a SaaS development framework designed to build highly scalable, secure and customizable software products.</p>
        </div>
    </div>
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
    
</style>
