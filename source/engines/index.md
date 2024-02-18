---
layout: home
---
<style lang="scss">
    @import "../.vitepress/stylesheets/pages/engines.scss";
</style>

<script setup>
import collections from "../.vitepress/data/en/component_collections.json"
import componentLesliEngines from "../.vitepress/components/lesli-engines.vue"
import componentLesliFooter from "../.vitepress/components/lesli-footer.vue"
</script>

<div class="hero is-fullheight">
    <div class="hero-body">
        <componentLesliEngines />
    </div>
</div>
<componentLesliFooter />
