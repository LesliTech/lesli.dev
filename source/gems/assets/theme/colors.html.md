# Primary colors

Lesli uses a blue primary palette inspired by Maya blue. Use it for brand identity, primary actions, links, focus states, and selected navigation.

## Palette

<div class="columns">
    <div class="br-2 py-4 has-text-centered lesli-background-primary-50">50</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-100">100</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-200">200</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-300">300</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-400">400</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-500 has-text-white">500</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-600 has-text-white">600</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-700 has-text-white">700</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-800 has-text-white">800</div>
    <div class="br-2 py-4 has-text-centered lesli-background-primary-900 has-text-white">900</div>
</div>

| Token | Hex | Tailwind utility example |
| --- | --- | --- |
| Primary 50 | `#F2F7FB` | `bg-primary-50` |
| Primary 100 | `#E3EEF6` | `bg-primary-100` |
| Primary 200 | `#BDD5E8` | `bg-primary-200` |
| Primary 300 | `#8DAEC9` | `bg-primary-300` |
| Primary 400 | `#4F83AE` | `bg-primary-400` |
| Primary 500 | `#245F93` | `bg-primary-500` |
| Primary 600 | `#1F527F` | `bg-primary-600` |
| Primary 700 | `#1A466C` | `bg-primary-700` |
| Primary 800 | `#153A59` | `bg-primary-800` |
| Primary 900 | `#123553` | `bg-primary-900` |

The palette is available to every Tailwind color utility. For example:

```html
<button class="bg-primary-500 text-white hover:bg-primary-600">
    Save changes
</button>

<a class="text-primary-600 hover:text-primary-700" href="#">
    View details
</a>
```

## Usage guidance

- Use 50–100 for soft backgrounds.
- Use 200–300 for borders, subtle surfaces, and selected states.
- Use 500 for primary buttons, links, and active states.
- Use 600–700 for hover states and strong accents.
- Use 800–900 for pressed states and dark text.

Use dark text on Primary 50–400 and white text on Primary 500–900. Primary 400 does not provide enough contrast with white for normal-sized text.

## Stable and runtime colors

Lesli exposes two related kinds of primary color:

- `primary-50` through `primary-900` are stable design-system colors.
- `primary` is the runtime application color and can be customized for an account.

Use `bg-primary-500` when a component must retain the Lesli palette. Use `bg-primary` when it should follow the configured application theme.

```html
<header class="bg-primary text-white">
    This background follows the active application theme.
</header>
```

The source palette is maintained by `lesli-css`. LesliAssets consumes its generated CSS variables and exposes them as Tailwind theme tokens.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/theme/colors.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

