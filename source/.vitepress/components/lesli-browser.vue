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
const props = defineProps({
    url: {
        type: String,
        required: false,
        default: ""
    }
})
</script>
<template>
    <div class="lesli-component-browser">
        <div class="lesli-browser-toolbar">
            <div class="lesli-browser-controls">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="lesli-browser-arrows">
                <span class="icon">
                    <i class="ri-arrow-left-s-line"></i>
                </span>
                <span class="icon">
                    <i class="ri-arrow-right-s-line"></i>
                </span>
            </div>
            <div class="lesli-browser-address">
                <p>
                    <span class="icon is-small">
                        <i class="ri-lock-line"></i>
                    </span>
                    <span>https://</span>www.lesli.dev/{{ props.url }}
                </p>
            </div>
            <div class="lesli-browser-settings">
                <span class="icon">
                    <i class="ri-equalizer-fill"></i>
                </span>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<style lang="scss">
@import "../stylesheets/components/lesli-browser.scss";
</style>
