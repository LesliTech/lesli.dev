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
import DefaultTheme from "vitepress/theme"


// · 
const { Layout } = DefaultTheme

</script>
<template>
    <Layout>
        <template #not-found>
            <section class="lesli-component-404">
                <img alt="404 cat" src="/images/cats/404.png" />
                <h3>404</h3>
                <p>PAGE NOT FOUND</p>
                <a href="/">Take me home</a>
            </section>
        </template>
    </Layout>
</template>
<style lang="scss">
@import "../stylesheets/components/lesli-404.scss";
</style>
