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
            <a href="/docs/lesli-vue/1x/composables/url">
                <span class="icon">
                    <i class="ri-link"></i>
                </span>
                URL
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-vue/1x/composables/msg">
                <span class="icon">
                    <i class="ri-chat-2-line"></i>
                </span>
                Msg
            </a>
        </div>
        <div class="column">
            <a href="/docs/lesli-vue/1x/components/chart-line">
                <span class="icon">
                    <i class="ri-line-chart-line"></i>
                </span>
                Msg
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
