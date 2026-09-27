# Collection colors

A Collection is a business category that groups related Engines or modules. The Collection owns the shared visual identity; individual Engines and modules do not have independent colors.

For example, Sales and Accounting may work together as part of the same business category. When they belong to the same Collection, both use that Collection's color so users can recognize their relationship across navigation, dashboards, cards, charts, and other interfaces.

```text
Collection
├── Engine or module A
├── Engine or module B
└── Engine or module C

Collection → assigned categorical color
Engine/module → inherits its Collection identity
```

Collection colors describe business grouping, not semantic state. They must never replace Info, Success, Warning, or Danger.

## Collection palette assignments

Each Collection receives an identity from the reusable [categorical palette](/gems/assets/theme/categorical).

| Collection | Categorical family | Identity color | CSS variable |
| --- | --- | --- | --- |
| Administration | Sky | `#2B88C0` | `--lesli-color-collection-administration` |
| Intelligence | Violet | `#9260DA` | `--lesli-color-collection-intelligence` |
| Productivity | Orange | `#C96E20` | `--lesli-color-collection-productivity` |
| Integration | Magenta | `#BE47B8` | `--lesli-color-collection-integration` |
| Analytics | Cyan | `#22909B` | `--lesli-color-collection-analytics` |
| Security | Indigo | `#526EE3` | `--lesli-color-collection-security` |
| Finance | Gold | `#B89D2B` | `--lesli-color-collection-finance` |
| Sales | Rose | `#D24572` | `--lesli-color-collection-sales` |
| IT | Teal | `#239576` | `--lesli-color-collection-it` |

Lime is intentionally unassigned. It remains available for future Collections, charts, datasets, calendars, categories, and other grouping needs.

## Identity preview

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-administration); color: #000000;">Administration</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-intelligence); color: #000000;">Intelligence</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-productivity); color: #000000;">Productivity</div>
</div>

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-integration); color: #000000;">Integration</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-analytics); color: #000000;">Analytics</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-security); color: #000000;">Security</div>
</div>

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-finance); color: #000000;">Finance</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-sales); color: #000000;">Sales</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-collection-it); color: #000000;">IT</div>
</div>

## Usage

Use the Collection token wherever the interface needs to show that Engines or modules belong together:

```css
.sales-collection-card {
    border-color: var(--lesli-color-collection-sales);
}

.finance-collection-marker {
    color: var(--lesli-color-collection-finance);
}
```

LesliAssets exposes the same identities to Tailwind:

```html
<section class="border-l-4 border-collection-sales">
    Engines and modules in the Sales Collection
</section>
```

Do not assign a unique color token to every Engine. The Collection token intentionally makes related Engines and modules share one identity.

## Accessibility

The Collection color is an identity accent, not a guaranteed text/background pair. The current `500` identities work best for borders, icons, chart marks, and other accents. For larger surfaces, use an appropriate foreground and a lighter or darker shade from the assigned categorical family.

## Historical palette aliases

`lesli-css` 4.1.0 preserves the historical Ruby, Ember, Maize, Agave, Jade, Cenote, Quetzal, Bugambilia, Cacao, and Obsidian token values for backward compatibility. They are deprecated and should not be used when implementing new Collection identities.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/theme/collections.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/27</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

