---
layout: home
---

<header class="hero is-medium docs-header">
    <section class="hero-body">
        <img alt="Lesli-CSS logo" src="/images/brand/lesli-css.svg" />
        <p class="description">
            Utilities for websites and web applications
        </p>
    </section>
</header>

<section class="container docs-content">
    <div class="columns">
        <div class="column">
            <a href="/docs/lesli-css/1x/normalize">
                <span class="icon">
                    <i class="ri-archive-2-line"></i>
                </span>
                Normalize
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/fonts">
                <span class="icon">
                    <i class="ri-font-family"></i>
                </span>
                Fonts
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/blockquotes">
                <span class="icon">
                    <i class="ri-double-quotes-l"></i>
                </span>
                Blockquotes
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/columns">
                <span class="icon">
                    <i class="ri-layout-column-line"></i>
                </span>
                Columns
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/container">
                <span class="icon">
                    <i class="ri-layout-line"></i>
                </span>
                Container
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/navigation">
                <span class="icon">
                    <i class="ri-menu-line"></i>
                </span>
                Navigation
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/colors">
                <span class="icon">
                    <i class="ri-palette-line"></i>
                </span>
                Colors
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/breakpoints">
                <span class="icon">
                    <i class="ri-layout-2-line"></i>
                </span>
                Breakpoints
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/flex">
                <span class="icon">
                    <i class="ri-layout-masonry-line"></i>
                </span>
                Flex
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/scrollbar">
                <span class="icon">
                    <i class="ri-layout-right-2-line"></i>
                </span>
                Scrollbar
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-css/1x/variables">
                <span class="icon">
                    <i class="ri-tools-line"></i>
                </span>
                Variables
            </a>
        </div>
    </div>
</section>

<style scoped lang="scss">
@import "lesli-css";
@import "../.vitepress/theme/stylesheets/page.scss";
.docs-header {
    img {
        width: 280px;
    }
}
@include lesli-css-breakpoint-mobile() {
    .docs-header {
        img {
            width: 200px;
        }
    }
}
</style>
