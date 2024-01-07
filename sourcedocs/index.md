---
layout: home
---

<script setup>
    import LesliComponentDescription from "./.vitepress/theme/components/LesliComponentDescription.vue"
    import LesliComponentCoreFeatures from "./.vitepress/theme/components/LesliComponentCoreFeatures.vue"
    import LesliComponentEngines from "./.vitepress/theme/components/LesliComponentEngines.vue"

    const links = [{
        href: "/docs/about/",
        icon: "ri-heart-line",
        text: "About"
    }, {
        href: "/docs/lesli/5x/getting-started/",
        icon: "ri-send-plane-line",
        text: "Getting started"
    }, {
        href: "/docs/lesli/5x/contributing/",
        icon: "ri-git-pull-request-line",
        text: "Contributing"
    }, {
        href: "/docs/lesli/5x/database/",
        icon: "ri-database-line",
        text: "Database"
    }, {
        href: "/docs/lesli/5x/ruby-on-rails/",
        icon: "ri-server-line",
        text: "Ruby on Rails"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-window-line",
        text: "Frontend"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-palette-line",
        text: "Theming"
    }, {
        href: "/docs/lesli/5x/security/",
        icon: "ri-shield-line",
        text: "Security"
    }, {
        href: "/docs/lesli/5x/generators/",
        icon: "ri-code-line",
        text: "Generators"
    }, {
        href: "/docs/lesli/5x/testing/",
        icon: "ri-bug-line",
        text: "Testing"
    }, {
        href: "/docs/lesli/5x/engines/",
        icon: "ri-shapes-line",
        text: "Engines"
    }, {
        href: "/docs/lesli/5x/deployment/",
        icon: "ri-flashlight-line",
        text: "Deployment"
    }, {
        href: "/docs/lesli-vue/1x/",
        icon: "ri-vuejs-line",
        text: "Lesli Vue"
    }, {
        href: "/docs/lesli-js/1x/",
        icon: "ri-javascript-line",
        text: "Lesli JS"
    }, {
        href: "/docs/lesli-css/1x/",
        icon: "ri-css3-line",
        text: "Lesli CSS"
    }, {
        href: "/docs/lesli-mails/1x/",
        icon: "ri-mail-open-line",
        text: "Lesli Mails"
    }]
</script>

<header class="hero is-medium lesli-page-header">
    <section class="hero-body">
        <div class="container">
            <img class="m-auto" alt="cat docs" src="/images/cats/docs.svg" />
            <h1 class="title">
                The Open Source Ruby on Rails <span class="lesli-title-colored">SaaS Development Framework.</span>
            </h1>
            <p class="description">
                Lesli provides all the necessary tools to build your SaaS, empowering you and your team to focus on business and what makes your software special. 
            </p>
        </div>
    </section>
</header>

<section class="container lesli-page-content-boxes">
    <div class="columns">
        <div class="column" v-for="link in links">
            <a :href="link.href">
                <i :class="link.icon"></i>
                {{ link.text }}
            </a>
        </div>
    </div>
</section>

<!-- <LesliComponentEngines /> -->

<style lang="scss">
    @import "./.vitepress/theme/stylesheets/pages/index.scss";
</style>
