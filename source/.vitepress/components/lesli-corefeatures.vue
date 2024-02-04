<script setup>
/*
Lesli

Copyright (c) 2023, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

Lesli · Ruby on Rails SaaS Development Framework.

Made with ♥ by https://www.lesli.tech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import corefeatures from "../data/en/component_corefeatures.json"

</script>
<template>
    <section class="lesli-component-core-features hero is-fullheight ">
        <div class="hero-body">
            <div class="container">
                <div class="component-header">
                    <h2>{{ corefeatures.title }}</h2>
                    <p>{{ corefeatures.text }}</p>
                </div>
                <div class="columns ">
                    <div class="column" v-for="feature in corefeatures.content">
                        <div class="feature">
                            <figure>
                                <i :class="feature.icon"></i>
                            </figure>
                            <h3>{{ feature.name }}</h3>
                            <p>{{ feature.text }}</p>
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
section.lesli-component-core-features {
    padding: 8rem 0 6rem;
    background-color: $hint-of-red;

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
        padding: 30px 20px;
        border-radius: 5px 5px 5px 5px;
        color: lesli-css-color(silver);
        border: 1px solid lesli-css-color(silver, 300);
        box-shadow: 0px 2px 18px 0px rgba(78,133,200,0.1);
        background-color: white;
        
        i {
            font-size: 3rem;
        }

        h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: lesli-css-color(slate);
        }

        p {
            font-size: 1.1rem;
            color: lesli-css-color(silver, 900);
        }

    }

    $collections: 
    "administration", 
    "intelligence", 
    "productivity", 
    "integration", 
    "analytics",
    "finance", 
    "sales", 
    "it",
    "administration", 
    "intelligence", 
    "productivity", 
    "integration", 
    "analytics";

    $index: 0;

    @each $collection in $collections {

        $index: $index + 1;

        $i: index($collections, $collection);

        $color: lesli-css-color(collection, $collection);

        .column:nth-child(#{$index}) .feature i {
            color: $color;
        }

    }

}


@include lesli-css-breakpoint-only-mobile() {
    section.lesli-component-core-features {

    }
}
</style>
