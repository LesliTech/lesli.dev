# Icons

LesliAssets packages framework icons as SVG symbol sprites. A sprite keeps repeated icons lightweight and lets application markup reference each symbol by its stable identifier.

## Icon groups

| Group | Identifier prefix | Purpose |
| --- | --- | --- |
| Engines | `engine-` | Lesli engines and framework navigation |
| Gems | `gem-` | Lesli libraries and development tools |
| Flags | `locale-` | Locale and country selection |
| Social | `social-` | Social platforms and external profiles |

The main Lesli layout already renders the engines sprite. Render another sprite once near the application root before using symbols from that group:

```erb
<div class="hidden" aria-hidden="true">
    <%= render("lesli_assets/partials/application-lesli-icons-social") %>
</div>
```

Reference a symbol with an SVG `use` element:

```html
<svg class="size-6" role="img" aria-label="Calendar">
    <use href="#engine-calendar"></use>
</svg>
```

For a decorative icon, hide it from assistive technology and keep the visible label outside the SVG:

```html
<button class="inline-flex items-center gap-2">
    <svg class="size-5" aria-hidden="true">
        <use href="#engine-calendar"></use>
    </svg>
    Calendar
</button>
```

## Adding icons

Add the source SVG to the appropriate folder under `app/assets/icons/lesli_assets`, then rebuild the sprites:

```shell
make build.icons
```

The build optimizes the source files and regenerates the ERB sprite partials in `app/views/lesli_assets/partials`. Treat those generated partials as build output rather than editing them directly.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/theme/icons.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

