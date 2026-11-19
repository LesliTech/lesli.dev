# Color system

The Lesli color system separates brand identity, interface meaning, reusable categories, and business grouping. The `lesli-css` package defines the canonical CSS variables. LesliAssets connects them to Tailwind CSS and application-level theme settings.

Application code should depend on a token's intent instead of copying its hexadecimal value.

## Architecture

```text
Lesli Color System
├── Brand
│   └── Primary
│       └── Lesli Blue (`primary-500`, `#276AD6`)
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
| Brand / Primary | Lesli Blue, Lesli identity, and primary actions | [Brand](/gems/assets/theme/brand) |
| Semantic | Information, success, warning, and danger states | [Semantic colors](/gems/assets/theme/semantics) |
| Foundation / Neutral | Text, borders, disabled states, and surfaces | [Foundation colors](/gems/assets/theme/semantics) |
| Categorical | Charts, datasets, calendars, and reusable categories | [Categorical colors](/gems/assets/theme/categorical) |
| Collections | Shared identity for related Engines and modules | [Collection colors](/gems/assets/theme/collections) |

Categorical colors never communicate semantic state. Rose is not Danger, Gold is not Warning, Teal is not Success, and Cyan is not Info. An Engine or module does not own an individual color; it uses the color of the Collection to which it belongs.

## Integration layers

| Layer | Responsibility |
| --- | --- |
| lesli-css | Defines and publishes the canonical palette in `css/colors.css`. |
| LesliAssets | Imports the palette and exposes it through framework styles, Tailwind CSS, and runtime settings. |
| Lesli application | Consumes tokens by intent and supplies optional account-level theme values. |

## CSS custom properties

Every canonical palette entry is available as a portable CSS variable. LesliAssets imports `lesli-css/css/colors.css` into its application and public stylesheets during compilation. The palette is not copied into the source tree, and browsers do not load a separate token file:

```css
.primary-action {
    background-color: var(--lesli-color-primary);
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

## Tailwind CSS

LesliAssets maps the Lesli variables into Tailwind CSS v4 theme tokens. Standard utility prefixes such as `bg-`, `text-`, `border-`, `hover:`, and `focus:` can consume them:

```html
<button class="bg-primary text-white hover:bg-primary-strong">
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

- `primary-50` through `primary-900` are the stable Lesli Blue brand palette.
- Unnumbered `primary` is the runtime application color and may be customized for an account.

Use `primary-500` when a component must retain Lesli Blue. Use unnumbered `primary` when the component should follow the configured application theme.

Without an account override, unnumbered `primary` uses the darker interface shade
(`primary-700`, `#194A99`). The brand color remains `primary-500` (`#276AD6`). Its fallback references the canonical token:

```css
--lesli-color-primary: var(--lesli-theme-color-primary, var(--lesli-color-primary-700));
```

Core's application layout accepts account colors through `@lesli`:

```ruby
@lesli[:customization] = {
    colors: {
        lesli_theme_color_primary: "#7C3AED"
    }
}
```

The layout emits `--lesli-theme-color-primary` from that value. This changes
unnumbered `primary`, while the numbered palette remains stable. Core loads the account-wide `lesli_theme_color_primary` setting from
`current_user.account.admin.settings` when LesliAdmin is installed. This does not recolor components using fixed utilities such as
`bg-blue-600`.

```html
<aside class="bg-sidebar">
    <a class="hover:bg-primary-100">Dashboard</a>
</aside>

<button class="bg-primary text-white">
    Uses the active account primary color
</button>
```

## Choosing a token

See [Semantic colors](/gems/assets/theme/semantics) for the final palette,
contrast pairs and examples of primary, info, success, warning and danger.

- Use Primary for Lesli identity and the main action hierarchy.
- Use Semantic for status or feedback whose meaning must remain consistent.
- Use Neutral for structure, typography, borders, and inactive states.
- Use Categorical for reusable visual differentiation without semantic meaning.
- Use a Collection token when several related Engines or modules share a business category.
- Never assign a unique color directly to an Engine or module.

## Component and engine colors

Use `text-primary`, `bg-primary`, `border-primary` and `ring-primary` for actions
and selection. Use `primary-soft` for light backgrounds, `primary-muted` for
subtle borders, and `primary-strong` for hover states and dark text. These values
are derived with `color-mix()` from the account's primary color at runtime.
Changing `--lesli-theme-color-primary` updates them without rebuilding CSS.

Numbered `primary-50` through `primary-900` remain the fixed Lesli brand palette;
do not use them for account-customizable controls. Use `neutral-*` for neutral
text and borders, and `info-*`, `success-*`, `warning-*` and `danger-*` for states.
Categorical colors, such as Calendar's external sources and weather illustrations,
retain their own meaning instead of adopting the account primary. White surfaces
and white text on solid buttons remain explicit; this is not a dark-mode theme.

LesliView consumes these tokens through its component classes. Engines use the
same tokens in their utilities and continue compiling their own stylesheets.

### Saving an account primary color

When LesliAdmin is installed, store the preference in the account's local
administration settings (not in user-specific settings):

```ruby
setting = account.admin.settings.find_or_initialize_by(
    name: "lesli_theme_color_primary",
    user_id: nil
)
setting.update!(value: "#7C3AED")
```

Core applies this preference on subsequent authenticated page requests. Three-
and six-digit hexadecimal colors are supported. A missing administration
workspace, a missing or blank setting, or an invalid color emits no override;
LesliAssets then uses the interface default, Primary 700 (`#194A99`). Core also works without
LesliAdmin or an authenticated user. No database default or CSS rebuild is needed.
Set the value to `nil` to return to the default color. Account administrators can also use the Appearance tab at `/admin/settings`
to select a color or restore the interface default.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/theme/colors.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

