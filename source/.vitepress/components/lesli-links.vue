<script setup>

    const links = [{
        href: "/about/",
        icon: "ri-heart-line",
        text: "About"
    }, {
        href: "/start/",
        icon: "ri-send-plane-line",
        text: "Getting started"
    }, {
        href: "/contributing/",
        icon: "ri-git-pull-request-line",
        text: "Contributing"
    }, {
        href: "/docs.html",
        icon: "ri-book-2-line",
        text: "Documentation"
    }]
</script>
<template>
    <section class="container lesli-component-links lesli-page-content-boxes">
        <div class="columns">
            <div class="column" v-for="link in links">
                <a :href="link.href">
                    <i :class="link.icon"></i>
                    {{ link.text }}
                </a>
            </div>
        </div>
    </section>
</template>
