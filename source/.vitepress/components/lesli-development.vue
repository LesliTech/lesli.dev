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
                        <div class="feature">
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
@import "../stylesheets/component.scss";


// · 
section.lesli-component-development {
    padding: 8rem 0 4rem;

    .columns {
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        max-width: 1200px;
        justify-content: center;
    }

    .column {
        margin-top: 0rem;
        flex-basis: 400px;
        max-width: 400px;
    }

    .feature {
        height: 100%;
        padding: 30px;
        border-radius: 5px 5px 5px 5px;
        border: 1px solid lesli-css-color(silver, 300);
        box-shadow: 0px 2px 18px 0px rgba(lesli-css-color(blue, 300),0.1);
        
        i {
            font-size: 3rem;
            color: lesli-css-color(silver, 900)
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem;
        }
    }
}
</style>
