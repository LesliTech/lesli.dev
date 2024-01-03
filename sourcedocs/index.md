---
layout: home
---

<script setup>
    import LesliComponentDescription from "./.vitepress/theme/components/LesliComponentDescription.vue"
    import LesliComponentCoreFeatures from "./.vitepress/theme/components/LesliComponentCoreFeatures.vue"
    import LesliComponentEngines from "./.vitepress/theme/components/LesliComponentEngines.vue"
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
        <div class="column">
            <a href="/docs/about/">
                <i class="ri-heart-line"></i>
                About
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/getting-started/">
                <i class="ri-send-plane-line"></i>
                Getting started
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/contributing/">
                <i class="ri-git-pull-request-line"></i>
                Contributing
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/database/">
                <i class="ri-database-line"></i>
                Database
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/ruby-on-rails/">
                <i class="ri-server-line"></i>
                Ruby on Rails
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/theming/">
                <i class="ri-window-line"></i>
                Frontend
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/theming/">
                <i class="ri-palette-line"></i>
                Theming
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/security/">
                <i class="ri-shield-line"></i>
                Security
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/generators/">
                <i class="ri-code-line"></i>
                Generators
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/testing/">
                <i class="ri-bug-line"></i>
                Testing
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/engines/">
                <i class="ri-shapes-line"></i>
                Engines
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/deployment/">
                <i class="ri-flashlight-line"></i>
                Deployment
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-vue/1x/">
                <i class="ri-vuejs-line"></i>
                Lesli Vue
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-js/1x/">
                <i class="ri-javascript-line"></i>
                Lesli JS
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/">
                <i class="ri-css3-line"></i>
                Lesli CSS
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-mails/1x/">
                <i class="ri-mail-open-line"></i>
                Lesli Mails
            </a>
        </div>
    </div>
</section>

<LesliComponentEngines />

<style lang="scss">
    @import "./.vitepress/theme/stylesheets/index.scss";
</style>
