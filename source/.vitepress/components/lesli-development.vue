<script setup>

import development from "../data/en/component_development.json"

</script>
<template>
    <section class="lesli-component-development">
        <div class="container">
            <div class="component-header">
                <h2>{{ development.title }}</h2>
                <p>{{ development.text }}</p>
            </div>
            <div class="hero-body">
                <div class="columns ">
                    <div class="column" v-for="highlight in development.content">
                        <div class="feature has-background-white">
                            <figure>
                                <i :class="highlight.icon"></i>
                            </figure>
                            <h3>{{ highlight.name }}</h3>
                            <p>{{ highlight.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">

// · 
@import "../stylesheets/components/lesli-component-development.scss";
</style>
