---
aside: false
pageClass: lesli-engines
---
<style lang="scss">
    @import "../.vitepress/stylesheets/pages/engines.scss";
</style>

<script setup>
import engine  from "../assets/icons/lesli/icon-module.svg";
import collections from "../.vitepress/data/en/component_collections.json"
import componentLesliEngines from "../.vitepress/components/lesli-engines.vue"
</script>

<header class="lesli-page-header">
    <engine/>
    <p class="description">{{ collections.text }}</p>
</header>

<div class="hero is-fullheight">
    <div class="hero-body">
        <componentLesliEngines :title="false"/>
    </div>
</div>
