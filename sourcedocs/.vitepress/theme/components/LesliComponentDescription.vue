<script setup>
    import data from "../../data/en/component_description.json"
</script>
<template>
    <section class="lesli-component-description">
        <div class="container">
            <p class="description" v-html="data.description"></p>
        </div>
        <div class="columns is-flex-wrap-wrap">
            <div class="column" v-for="component in data.components">
                <div>
                    <i :class="component.icon"></i>
                    <h3>{{ component.name }}</h3>
                    <p>{{ component.text }}</p>
                    <ul>
                        <li v-for="item in component.items">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
@import "../stylesheets/components/lesli-component-description.scss";
</style>
