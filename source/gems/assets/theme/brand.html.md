# Lesli theme

LesliAssets is the framework implementation of the Lesli visual language. It connects the shared color definitions from `lesli-css` to Tailwind CSS and provides the fonts, logos, icons, views, and email assets used by Lesli applications.

## Theme layers

| Layer | Responsibility |
| --- | --- |
| `lesli-css` | Owns the canonical color palettes and generates reusable CSS variables. |
| LesliAssets | Maps those variables to Tailwind and packages the framework assets. |
| Lesli application | Uses Tailwind utilities and supplies account-level theme settings. |

Lesli applications use the Tailwind interface documented here. The lower-level palette API and token generation belong to the `lesli-css` library.

## Color groups

- [Primary colors](/gems/assets/theme/colors) provide the core Lesli brand scale.
- [Semantic colors](/gems/assets/theme/semantics) communicate status and intent.
- [Collection colors](/gems/assets/theme/collections) identify product areas and data series.

## Runtime customization

The numbered palettes are stable design tokens. A Lesli application can separately configure contextual colors such as the primary brand, sidebar, header, footer, and page background.

```ruby
Lesli.configure do |config|
    config.theme = {
        color_primary: "#245F93",
        color_sidebar: "#ffffff",
        color_header: "transparent",
        color_footer: "transparent",
        color_background: "#eef2f6",
        color_sidebar_hover: "#E3EEF6"
    }
end
```

These values are exposed as runtime CSS properties and can change without recompiling Tailwind. In application markup, use unnumbered utilities for theme-aware surfaces and numbered utilities for fixed design-system colors:

```html
<aside class="bg-sidebar">
    <a class="hover:bg-primary-100">Dashboard</a>
</aside>

<button class="bg-primary text-white hover:bg-primary-600">
    Continue
</button>
```

The complete Tailwind theme API and build workflow will be documented separately.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/theme/brand.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

