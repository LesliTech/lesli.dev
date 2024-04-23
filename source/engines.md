---
aside: false
layout: home
pageClass: lesli-engines
---

<script setup>
    import componentLesliEngines from "./.vitepress/components/lesli-engines.vue"
    import componentLesliFooter from "./.vitepress/components/lesli-footer.vue"
</script>

<header class="lesli-page-header container">
    <img class="mb-5 logo" alt="Lesli Framework logo" src="/images/brand/lesli.svg" />
</header>

<componentLesliEngines :title="true"/>

<componentLesliFooter />

<style lang="scss">
    @import "./.vitepress/stylesheets/pages/engines.scss";
</style>
