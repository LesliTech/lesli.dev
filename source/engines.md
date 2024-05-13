---
layout: home
pageClass: lesli-page
title: Engines
---

<script setup>
    import componentLesliEngines from "./.vitepress/components/lesli-engines.vue"
    import componentLesliFooter from "./.vitepress/components/lesli-footer.vue"
</script>
<header class="lesli-page-header container">
    <div class="hero is-medium">
        <div class="hero-body">
            <img alt="Lesli Framework logo" src="/images/brand/lesli.svg" />
            <h1>We have a module for what you need.</h1>
            <p>Lesli provides carefully designed and developed modules ready for integration, extension, or immediate use in your daily work.</p>
        </div>
    </div>
</header>

<componentLesliEngines :title="false"/>

<componentLesliFooter />
