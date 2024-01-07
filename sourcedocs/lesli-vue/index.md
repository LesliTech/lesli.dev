---
layout: home
---
<script setup>
    const links = [{
        href: "/docs/lesli-vue/1x/composables/url",
        icon: "ri-link",
        text: "URL"
    }, {
        href: "/docs/lesli-vue/1x/composables/msg",
        icon: "ri-chat-2-line",
        text: "Getting started"
    }, {
        href: "/docs/lesli/5x/contributing/",
        icon: "ri-git-pull-request-line",
        text: "Contributing"
    }]
</script>

<header class="hero is-medium lesli-page-header">
    <section class="hero-body">
        <div class="container">
            <img class="m-auto" src="/images/brand/lesli-css.svg" />
            <p class="description">
                Utilities for websites and web applications
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

<style lang="scss">
    @import "../.vitepress/theme/stylesheets/pages/lesli-vue.scss";
</style>
