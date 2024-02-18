---
aside: false
---
<script setup>
import guard from "../../assets/icons/lesli/cloud-guard.svg"
import LesliBrowser from "../../.vitepress/components/lesli-browser.vue"
</script>

<header class="lesli-page-header">
    <guard class="logo mb-0" />
    <p class="description">
        Security management module
    </p>
</header>

<lesli-browser url="guard">
    <img alt="Guard front page" src="/images/engines/guard/screenshot.png" />
</lesli-browser>

<style lang="scss">
@import "../../.vitepress/stylesheets/template.scss";
@import "../../.vitepress/stylesheets/components/page-header.scss";
</style>
