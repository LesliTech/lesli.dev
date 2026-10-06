# Lesli brand

The Lesli brand combines its wordmark, compact icon, and Lesli Blue. These elements identify Lesli itself; product state and business grouping use the separate [semantic, categorical, and Collection color layers](/gems/assets/theme/colors).

## Logo

Use the standard wordmark on light backgrounds and the negative wordmark on dark or saturated backgrounds.

<div class="columns lesli-css-color-logos">
    <div class="br-2 pl-6 pb-5 has-background-grey-lighter">
        <h4>Standard wordmark</h4>
        <img width="200" alt="Lesli Framework logo blue" src="/images/brand/lesli.svg" />
    </div>
    <div class="br-2 pl-6 pb-5 has-background-grey-darker">
        <h4 class="has-text-white">Negative wordmark</h4>
        <img width="200" alt="Lesli Framework logo white" src="/images/brand/lesli-white.svg" />
    </div>
</div>

## Compact icon

Use the compact icon when horizontal space is limited, including application navigation, favicons, and other square placements.

<div class="columns lesli-css-color-logos">
    <div class="br-2 pl-6 pb-5 has-background-grey-lighter">
        <h4>Standard icon</h4>
        <img width="180" class="m-auto display-block" alt="Lesli Framework icon blue" src="/images/brand/lesli-icon.svg" />
    </div>
    <div class="br-2 pl-6 pb-5 has-background-grey-darker">
        <h4 class="has-text-white">Negative icon</h4>
        <img width="180" class="m-auto display-block" alt="Lesli Framework icon white" src="/images/brand/lesli-icon-white.svg" />
    </div>
</div>

## Lesli Blue

Lesli Blue is the official brand color. Its canonical token is `primary-500` (`#276AD6`). Use Primary for Lesli identity, primary actions, links, focus states, and selected navigation.

Primary is not a synonym for Info, and it is separate from the Sky and Indigo categorical families.

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-400); color: #000000;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-primary-900); color: #ffffff;">900</div>
</div>

| Token | Hex |
| --- | --- |
| Primary 50 | `#F2F7FF` |
| Primary 100 | `#E3EEFF` |
| Primary 200 | `#C6DCFF` |
| Primary 300 | `#8FB5F5` |
| Primary 400 | `#4C83EA` |
| Primary 500 | `#276AD6` |
| Primary 600 | `#1F5BBB` |
| Primary 700 | `#194A99` |
| Primary 800 | `#133A78` |
| Primary 900 | `#0C2856` |

### Palette guidance

- Use 50–100 for subtle backgrounds.
- Use 200–300 for borders, selected surfaces, and quiet focus treatments.
- Use 500 for the canonical Lesli identity and primary actions.
- Use 600–700 for hover, active, and strong accent states.
- Use 800–900 for pressed states and dark surfaces.

For normal-sized text, use a sufficiently dark foreground on Primary 50–400 and white on Primary 500–900. Primary 400 does not provide enough contrast with white.

See the [color system documentation](/gems/assets/theme/colors) for CSS variables, Sass functions, Tailwind utilities, and runtime application themes.

## Packaged assets

LesliAssets exposes the default artwork under the `lesli_assets/brand` logical asset namespace.

| Asset | Purpose |
| --- | --- |
| `lesli_assets/brand/app-logo.svg` | Primary application wordmark |
| `lesli_assets/brand/app-logo.png` | Raster version for clients that do not support SVG |
| `lesli_assets/brand/app-icon.svg` | Compact application mark |
| `lesli_assets/brand/app-auth.svg` | Authentication-screen artwork |
| `lesli_assets/brand/favicon.svg` | Preferred browser icon |
| `lesli_assets/brand/favicon.png` | Fallback browser icon |

Use Rails asset helpers so the generated URL works with the configured asset pipeline:

```erb
<%= image_tag("lesli_assets/brand/app-logo.svg", alt: "Lesli") %>
```

The Lesli customization helper selects the default application logo and can return either its URL or an image tag:

```erb
<%= customization_instance_logo_tag(
    logo: "app-logo",
    options: { alt: "Application logo", width: 180 }
) %>
```

## Brand guidance

- Use the wordmark where enough horizontal space is available.
- Use the icon in compact navigation and square placements.
- Preserve the artwork's aspect ratio and clear space.
- Do not recolor, rotate, distort, outline, or apply decorative effects to the artwork.
- Choose the standard or negative asset appropriate for its background.
- Provide meaningful alternative text unless the image is purely decorative.

The current customization helper resolves these packaged defaults. Automatic per-account logo replacement is not enabled in the current implementation. Do not edit LesliAssets from a consuming application, because an upgrade can replace those changes.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/theme/brand.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/27</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

