---
pageClass: lesli-vue
aside: false
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

<header class="lesli-page-header">
    <img class="logo m-auto" src="/images/brand/lesli-css.svg" />
    <p class="description">
        Utilities for websites and web applications
    </p>
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
@import "../.vitepress/stylesheets/pages/lesli-vue.scss";
</style>
