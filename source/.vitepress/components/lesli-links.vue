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
const links = [{
    href: "/engines/lesli/about/",
    icon: "ri-heart-line",
    text: "About"
}, {
    href: "/engines/lesli/getting-started/",
    icon: "ri-send-plane-line",
    text: "Getting started"
}, {
    href: "/engines/lesli/contributing/",
    icon: "ri-git-pull-request-line",
    text: "Contributing"
}, {
    href: "/engines/lesli/about/",
    icon: "ri-book-2-line",
    text: "Documentation"
}]
</script>
<template>
    <section class="lesli-component-links lesli-page-content-boxes">
        <div class="container">
            <div class="columns">
                <div class="column" v-for="link in links">
                    <a class="has-background-white" :href="link.href">
                        <i :class="link.icon"></i>
                        {{ link.text }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
