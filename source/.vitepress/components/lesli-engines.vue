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

Made with ♥ by LesliTech
Building a better future, one line of code at a time.

@contact  hello@lesli.tech
@website  https://www.lesli.tech
@license  GPLv3 http://www.gnu.org/licenses/gpl-3.0.en.html

// · ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~     ~·~
// · 
*/


// · 
import collections from "../data/en/component_collections.json"


// · 
import bell from "../../assets/icons/lesli/engine-bell.svg"
import admin from "../../assets/icons/lesli/engine-admin.svg"
import babel from "../../assets/icons/lesli/engine-babel.svg"
import audit from "../../assets/icons/lesli/engine-audit.svg"
import shield from "../../assets/icons/lesli/engine-shield.svg"
import support from "../../assets/icons/lesli/engine-support.svg"
import security from "../../assets/icons/lesli/engine-security.svg"
import calendar from "../../assets/icons/lesli/engine-calendar.svg"


// · 
const logos = {
    admin, calendar, bell, audit, support, shield, security, babel
}


// · 
const props = defineProps({
    title: {
        type: Boolean,
        default: true
    }
})
</script>
<template>
    <section class="lesli-component-engines has-background-white hero">
        <div class="hero-body">
            <div class="container">
                <div v-if="title" class="component-header">
                    <h2>{{ collections.title }}</h2>
                    <p class="description">{{ collections.text }}</p>
                </div>
                <div class="columns">
                    <template v-for="collection in collections.collection">
                        <template v-for="engine in collection.engines">
                            <div class="column" v-if="logos[engine.name.toLowerCase()]">
                                <a :href="'/engines/' + engine.name.toLowerCase() + '/'">
                                    <component :is="logos[engine.name.toLowerCase()]"></component>
                                    <h3>{{ engine.name }}</h3>
                                    <p>{{ engine.text }}</p>
                                </a>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
@import "../stylesheets/components/lesli-component-engines.scss";
</style>
