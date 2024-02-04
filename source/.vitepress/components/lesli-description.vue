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
import data from "../data/en/component_description.json"

</script>
<template>
    <section class="lesli-component-description">
        <div class="component-header">
            <p v-html="data.description"></p>
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

// · 
@import "../stylesheets/component.scss";


// · 
section.lesli-component-description {
    padding: 10rem 0 6rem;

    .component-header {
        p {
            max-width: 800px;
        }
    }

    .columns {
        @include lesli-css-flex-columns(360px);
        max-width: 1200px;
        margin: 0 auto;
    }

    .column {

        div {
            border-radius: 4px;
            border: 2px solid #000;
            padding: 2rem;
            height: 100%;

            i {
                font-size: 4rem;
            }

            h3 {
                font-weight: 400;
                font-size: 2rem;
                margin: 0;
            }

            p {
                font-size: 1.1rem;
            }

            ul {
                margin: 0;
                padding-left: 1rem;
            }

            li {
                list-style: inside;
                list-style-type: '- ';
                font-size: 1.1rem;
            }

        }
    }
}


// · 
@include lesli-css-breakpoint-only-mobile() {
    section.lesli-component-description {
        p.description {
            padding: 0 .85rem;
            font-size: 1.5rem;
            margin-bottom: 6rem;
        }
    }
}
</style>
