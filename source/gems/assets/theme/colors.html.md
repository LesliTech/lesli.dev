# Color system

The Lesli color system separates brand identity, interface meaning, reusable categories, and business grouping. `lesli-css` 4.1.0 owns the canonical palettes; LesliAssets connects those tokens to Sass, CSS, Tailwind CSS, and application-level theme settings.

Application code should depend on a token's intent instead of copying its hexadecimal value.

## Architecture

```text
Lesli Color System
├── Brand
│   └── Primary
├── Semantic
│   ├── Info
│   ├── Success
│   ├── Warning
│   └── Danger
├── Foundation
│   └── Neutral
├── Categorical
│   ├── Rose, Orange, Gold, Lime, Teal
│   └── Cyan, Sky, Indigo, Violet, Magenta
└── Collections
    └── Business categories that group related Engines and modules
```

| Layer | Use it for | Documentation |
| --- | --- | --- |
| Brand / Primary | Lesli identity and primary actions | [Brand](/gems/assets/theme/brand) |
| Semantic | Information, success, warning, and danger states | [Semantic colors](/gems/assets/theme/semantics) |
| Foundation / Neutral | Text, borders, disabled states, and surfaces | [Foundation colors](/gems/assets/theme/semantics) |
| Categorical | Charts, datasets, calendars, and reusable categories | [Categorical colors](/gems/assets/theme/categorical) |
| Collections | Shared identity for related Engines and modules | [Collection colors](/gems/assets/theme/collections) |

Categorical colors never communicate semantic state. Rose is not Danger, Gold is not Warning, Teal is not Success, and Cyan is not Info. An Engine or module does not own an individual color; it uses the color of the Collection to which it belongs.

## Integration layers

| Layer | Responsibility |
| --- | --- |
| `lesli-css` | Defines the canonical Sass maps and exports generated CSS variables. |
| LesliAssets | Loads the tokens and exposes them through framework styles, Tailwind CSS, and runtime settings. |
| Lesli application | Consumes tokens by intent and supplies optional account-level theme values. |

## CSS custom properties

Every canonical palette entry is available as a portable CSS variable. A standalone CSS project can load the generated token file directly:

```css
@import "lesli-css/css/colors.css";

.primary-action {
    background-color: var(--lesli-color-primary-500);
    color: var(--lesli-color-neutral-50);
}

.success-message {
    background-color: var(--lesli-color-success-100);
    color: var(--lesli-color-success-800);
}

.sales-module {
    border-color: var(--lesli-color-collection-sales);
}
```

Canonical palette variables follow this pattern:

```text
--lesli-color-{palette}-{shade}
```

Collection identities omit the shade because the Collection owns a single public identity token:

```text
--lesli-color-collection-{collection}
```

## Sass API

Use the `lesli-css` Sass module when styles are compiled with Sass:

```scss
@use "lesli-css" as lesli;

.primary-action {
    background-color: lesli.lesli-color(primary, 500);
    color: lesli.lesli-color(neutral, 50);
}

.notification-success {
    background-color: lesli.lesli-color(success, 100);
    color: lesli.lesli-color(success, 800);
}
```

The default shade is `500`, so these expressions are equivalent:

```scss
color: lesli.lesli-color(primary);
color: lesli.lesli-color(primary, 500);
```

Use CSS variables instead when a value must react to runtime theme changes after Sass has been compiled.

## Tailwind CSS

LesliAssets maps the Lesli variables into Tailwind CSS v4 theme tokens. Standard utility prefixes such as `bg-`, `text-`, `border-`, `hover:`, and `focus:` can consume them:

```html
<button class="bg-primary-500 text-white hover:bg-primary-600">
    Save changes
</button>

<div class="bg-success-100 text-success-800">
    Changes saved
</div>

<section class="border-l-4 border-collection-sales">
    Sales and related modules
</section>
```

Use numbered utilities for stable design-system colors. The unnumbered `primary` utility follows the active application theme:

```html
<header class="bg-primary text-white">
    This surface follows the configured account theme.
</header>
```

## Stable palette and runtime theme

Lesli exposes two related but distinct concepts:

- `primary-50` through `primary-900` are stable Lesli brand tokens.
- Unnumbered `primary` is the runtime application color and may be customized for an account.

Use `primary-500` when a component must retain Lesli Blue. Use unnumbered `primary` when the component should follow the configured application theme.

An application can configure contextual colors without redefining the canonical Lesli palettes:

```ruby
Lesli.configure do |config|
    config.theme = {
        color_primary: "#276AD6",
        color_sidebar: "#ffffff",
        color_header: "transparent",
        color_footer: "transparent",
        color_background: "#eef2f6",
        color_sidebar_hover: "#E3EEFF"
    }
end
```

These settings are exposed as runtime CSS properties. They can change account surfaces while numbered tokens remain stable:

```html
<aside class="bg-sidebar">
    <a class="hover:bg-primary-100">Dashboard</a>
</aside>

<button class="bg-primary text-white">
    Uses the active account primary color
</button>
```

## Choosing a token

- Use Primary for Lesli identity and the main action hierarchy.
- Use Semantic for status or feedback whose meaning must remain consistent.
- Use Neutral for structure, typography, borders, and inactive states.
- Use Categorical for reusable visual differentiation without semantic meaning.
- Use a Collection token when several related Engines or modules share a business category.
- Never assign a unique color directly to an Engine or module.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/theme/colors.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/27</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

