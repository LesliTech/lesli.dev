---
layout: home
pageClass: lesli-page
title: Lesli Vue Documentation
---
<script setup>
const links = [{
    href: "/vue/elements/",
    icon: "ri-shapes-line",
    text: "Elements"
}, {
    href: "/vue/components/",
    icon: "ri-pages-line",
    text: "Components"
}, {
    href: "/vue/composables/",
    icon: "ri-box-3-line",
    text: "Composables"
}]
</script>

<header class="lesli-page-header container">
    <div class="hero is-medium">
        <div class="hero-body">
            <img class="Lesli CSS logo" src="/images/brand/lesli-css.svg" />
            <h1>LesliCSS</h1>
            <p>Utilities for websites and web applications</p>
        </div>
    </div>
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

<style lang="scss" scoped>
/* @import "./.vitepress/stylesheets/pages/lesli-vue.scss"; */
</style>
