---
layout: home
pageClass: lesli-home
---
<script setup>
    import componentLesliLinks from "./.vitepress/components/lesli-links.vue"
    import componentLesliDescription from "./.vitepress/components/lesli-description.vue"
    import componentLesliTechStack from "./.vitepress/components/lesli-techstack.vue"
    import componentLesliCoreFeatures from "./.vitepress/components/lesli-corefeatures.vue"
    import componentLesliEngines from "./.vitepress/components/lesli-engines.vue"
    import componentLesliDevelopment from "./.vitepress/components/lesli-development.vue"
    import componentLesliFooter from "./.vitepress/components/lesli-footer.vue"
</script>

<header class="hero is-medium lesli-home-header">
    <section class="hero-body">
        <div class="container">
            <img class="mb-5 logo" alt="Lesli Framework logo" src="/images/brand/lesli.svg" />
            <h1>
                The Open Source Ruby on Rails <span class="lesli-title-colored">SaaS Development Framework.</span>
            </h1>
            <p>
                Lesli provides all the necessary tools to build your SaaS, empowering you and your team to focus on business and what makes your software special. 
            </p>
        </div>
    </section>
    <componentLesliLinks class="lesli-component-links" />
</header>


<componentLesliTechStack />

<componentLesliDescription />

<componentLesliCoreFeatures />

<componentLesliEngines />

<componentLesliDevelopment />

<componentLesliFooter />

<style lang="scss">
    @import "./.vitepress/stylesheets/pages/index.scss";
</style>
