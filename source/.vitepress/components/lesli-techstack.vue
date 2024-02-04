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
const tools_logo = ['postgresql', 'rails', 'vue', 'sass', 'bulma']
</script>
<template>
    <section class="lesli-techstack">
        <ul>
            <li class="is-hidden-touch"><p>built with awesome technologies</p></li>
            <template v-for="tool in tools_logo">
                <li><img :alt="tool" :src="`/images/tools/logo-${tool}.svg`"/></li>
            </template>
        </ul>
    </section>
</template>
<style lang="scss">

// · 
@import "../stylesheets/component.scss";


// · 
section.lesli-techstack {
    background-color: #f8f5f5;

    ul {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        p {
            font-size: 1.2rem;
            font-weight: 400;
            text-transform: uppercase;
            color: lesli-css-color(silver, 900);
        }

        li {

            img {
                height: 60px;
                opacity: .8;
                display: inline-block;
            }

            &:nth-child(3) img {
                height: 52px;
            }
        }
    }
}
</style>
