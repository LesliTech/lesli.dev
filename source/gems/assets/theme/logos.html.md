# Logos and brand images

LesliAssets packages the default artwork used by the Lesli framework. Rails exposes these files under the `lesli_assets/brand` logical asset namespace.

## Wordmark

<div class="columns lesli-css-color-logos">
    <div class="br-2 pl-6 pb-5 has-background-grey-lighter">
        <h4>Use the standard logo on light backgrounds.</h4>
        <img width="200" alt="Lesli Framework logo blue" src="/images/brand/lesli.svg" />
    </div>
    <div class="br-2 pl-6 pb-5 has-background-grey-darker">
        <h4 class="has-text-white">Use the negative logo on dark or saturated backgrounds.</h4>
        <img width="200" alt="Lesli Framework logo white" src="/images/brand/lesli-white.svg" />
    </div>
</div>

## Compact icon

Use the compact icon when horizontal space is limited, including application navigation, favicons, and other square placements.

<div class="columns lesli-css-color-logos">
    <div class="br-2 pl-6 pb-5 has-background-grey-lighter">
        <h4>Use the standard icon on light backgrounds.</h4>
        <img width="180" class="m-auto display-block" alt="Lesli Framework icon blue" src="/images/brand/lesli-icon.svg" />
    </div>
    <div class="br-2 pl-6 pb-5 has-background-grey-darker">
        <h4 class="has-text-white">Use the negative icon on dark backgrounds.</h4>
        <img width="180" class="m-auto display-block" alt="Lesli Framework icon white" src="/images/brand/lesli-icon-white.svg" />
    </div>
</div>

## Packaged assets

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

## Usage guidance

- Use the wordmark where enough horizontal space is available.
- Use the icon in compact navigation and square placements.
- Preserve the artwork's aspect ratio and clear space.
- Do not rotate, distort, outline, or apply decorative effects.
- Provide meaningful alternative text unless the image is purely decorative.

The current customization helper resolves these packaged defaults. Automatic per-account logo replacement is not enabled in the current implementation. Do not edit LesliAssets from a consuming application, because an upgrade can replace those changes.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/theme/logos.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

