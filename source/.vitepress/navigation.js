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
import LesliAboutNavigation from "./navigation/lesli-about-navigation"
import LesliStartNavigation from "./navigation/lesli-start-navigation"
import LesliContributingNavigation from "./navigation/lesli-contributing-navigation"


// · 
import lesliCoreNavigation from "./navigation/lesli-core-navigation"
import lesliVueNavigation from "./navigation/lesli-vue-navigation"
import lesliCSSNavigation from "./navigation/lesli-css-navigation"


// · 
import LesliEngineGuard from "./navigation/lesli-engines"


// · 
const navigationAbout = [
    ...LesliAboutNavigation, 
    ...LesliStartNavigation, 
    ...LesliContributingNavigation
]


// · 
export default {
    "/about/": navigationAbout,
    "/start/": navigationAbout,
    "/contributing/": navigationAbout,

    "/lesli/": lesliCoreNavigation,
    "/vue/": lesliVueNavigation,
    "/css/": lesliVueNavigation,

    "/engines/": LesliEngineGuard
}
