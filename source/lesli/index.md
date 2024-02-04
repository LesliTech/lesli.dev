<script setup>

    const links = [{
        href: "/docs/lesli/5x/database/",
        icon: "ri-database-line",
        text: "Database"
    }, {
        href: "/docs/lesli/5x/ruby-on-rails/",
        icon: "ri-server-line",
        text: "Ruby on Rails"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-window-line",
        text: "Frontend"
    }, {
        href: "/docs/lesli/5x/theming/",
        icon: "ri-palette-line",
        text: "Theming"
    }, {
        href: "/docs/lesli/5x/security/",
        icon: "ri-shield-line",
        text: "Security"
    }, {
        href: "/docs/lesli/5x/generators/",
        icon: "ri-code-line",
        text: "Generators"
    }, {
        href: "/docs/lesli/5x/testing/",
        icon: "ri-bug-line",
        text: "Testing"
    }, {
        href: "/docs/lesli/5x/engines/",
        icon: "ri-shapes-line",
        text: "Engines"
    }, {
        href: "/docs/lesli/5x/deployment/",
        icon: "ri-flashlight-line",
        text: "Deployment"
    }]
</script>

<header class="lesli-page-header">
    <img class="logo m-auto" alt="cat docs" src="/images/cats/docs.svg" />
    <p class="description">
        Lesli Framework core documentation
    </p>
</header>

<section class="container lesli-page-content-boxes">
    <div class="columns">
        <div class="column" v-for="link in links">
            <a :href="link.href">
                <i :class="[link.icon]"></i>
                {{ link.text }}
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    @import "../.vitepress/stylesheets/pages/lesli.scss";
</style>
