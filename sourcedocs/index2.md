---
layout: home
---

<script setup>
    import LesliLogo from "./public/images/brand/lesli.svg"
    import LogoPostgres from "./public/images/tools/logo-postgresql.svg"
    import LogoRails from "./public/images/tools/logo-rails.svg"
    import LogoVue from "./public/images/tools/logo-vue.svg"
    import LogoSaas from "./public/images/tools/logo-sass.svg"
    import LogoBulma from "./public/images/tools/logo-bulma.svg"

    import LesliComponentDescription from "./.vitepress/theme/components/LesliComponentDescription.vue"
    import LesliComponentCoreFeatures from "./.vitepress/theme/components/LesliComponentCoreFeatures.vue"
    import LesliComponentEngines from "./.vitepress/theme/components/LesliComponentEngines.vue"
</script>

<header class="hero is-medium lesli-page-header">
    <section class="hero-body">
        <div class="container">
            <LesliLogo class="logo" />
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
                Source code
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/database/">
                <i class="ri-book-2-line"></i>
                Documentation
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli/5x/ruby-on-rails/">
                <i class="ri-arrow-right-line"></i>
                Demo
            </a>
        </div>
    </div>
</section>

<section class="lesli-techstack">
    <ul>
        <li class="is-hidden-touch"><p>built with awesome technologies</p></li>
        <li><LogoPostgres /></li>
        <li><LogoRails /></li>
        <li><LogoVue /></li>
        <li><LogoSaas /></li>
        <li><LogoBulma /></li>
    </ul>
</section>

<LesliComponentDescription />
<LesliComponentCoreFeatures />
<LesliComponentEngines />

<style lang="scss">
    @import "./.vitepress/theme/stylesheets/index.scss";
</style>
