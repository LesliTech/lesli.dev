# Semantic and Foundation colors

Semantic colors communicate state consistently across Lesli applications. Choose them by meaning, never only because a hue looks appropriate. Neutral belongs to the Foundation layer and supplies text, borders, surfaces, and disabled states.

| Layer | Palette | Purpose |
| --- | --- | --- |
| Foundation | `neutral` | Text, borders, surfaces, and disabled states |
| Semantic | `info` | Guidance and contextual information |
| Semantic | `success` | Completed actions and valid states |
| Semantic | `warning` | Situations that require attention |
| Semantic | `danger` | Errors, blocked flows, and destructive actions |
| Foundation | `black` | High-contrast neutral content and surfaces |

## Choosing primary or a semantic color

Primary expresses action hierarchy and follows the account's configured color,
falling back to Primary 700 (`#194A99`). Primary 500 (`#276AD6`) remains the brand color. Semantic colors express a state and stay consistent
across accounts. The final palette uses sky, emerald, amber and rose inspired
tones; these are Lesli tokens, not aliases for Tailwind's built-in scales.

| Token | When to use it | Example |
| --- | --- | --- |
| `primary` | Main actions and selected navigation | Create ticket, Save changes, selected tab |
| `info` | Helpful context without success, risk or failure | A report is ready to review; explain a feature |
| `success` | Successful completion or explicit acceptance | Changes saved; accept an invitation |
| `warning` | Something needs attention before continuing | Upcoming maintenance; review missing fields |
| `danger` | Failed operations or destructive actions | Save failed; delete a record |

Use an outlined primary button for a secondary action. Do not assign `info`
merely to make an action look less prominent. Pair color with clear labels or
icons to explain the meaning.

## Solid surfaces and contrast

| Role | Background | Foreground | Contrast |
| --- | --- | --- | --- |
| Default primary (700) | `#194A99` | White | 8.46:1 |
| `info-500` | `#087EAE` | White | 4.56:1 |
| `success-500` | `#09855E` | White | 4.64:1 |
| `warning-500` | `#F0A51B` | `warning-900` (`#452B08`) | 6.31:1 |
| `danger-500` | `#D73554` | White | 4.64:1 |

These opaque pairs exceed 4.5:1 for normal text. Info, success and danger buttons
use shade `600` on hover; warning uses `600` with the same dark foreground.
Those hover pairs also exceed 4.5:1. Do not use white text on warning buttons.

Announcements and notifications use shade `50` for backgrounds, `300` for
borders and `900` for text. Their text contrast ranges from 8.92:1 to 12.65:1.
Opacity, other shade combinations and account-customized primary colors require
their own contrast check. The default primary ratio does not apply to every
account color.

The canonical palette lives in `lesli-css/css/colors.css`. LesliAssets imports
it and exposes the Tailwind tokens; LesliView and engines compile their own
stylesheets against those global variables. Do not duplicate the palette in
component or engine styles.

## Foundation

### Neutral

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-400); color: #000000;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-neutral-900); color: #ffffff;">900</div>
</div>

## Semantic palettes

### Info

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-400); color: #1F2933;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-info-900); color: #ffffff;">900</div>
</div>

### Success

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-400); color: #1F2933;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-success-900); color: #ffffff;">900</div>
</div>

### Warning

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-400); color: #1F2933;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-500); color: #1F2933;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-600); color: #000000;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-warning-900); color: #ffffff;">900</div>
</div>

### Danger

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-400); color: #1F2933;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-danger-900); color: #ffffff;">900</div>
</div>

### Black

<div class="columns">
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-50); color: #1F2933;">50</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-100); color: #1F2933;">100</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-200); color: #1F2933;">200</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-300); color: #1F2933;">300</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-400); color: #ffffff;">400</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-500); color: #ffffff;">500</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-600); color: #ffffff;">600</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-700); color: #ffffff;">700</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-800); color: #ffffff;">800</div>
    <div class="br-2 py-4 has-text-centered" style="background-color: var(--lesli-color-black-900); color: #ffffff;">900</div>
</div>

## Canonical values

The semantic scales use perceptually spaced OKLab transitions around the fixed
`500` identity colors. Shades `50–100` remain soft backgrounds, while `600` is
the hover tone. Warning preserves its `600` for contrast with dark labels.
Use shades `200–300` for decorative borders; functional boundaries and focus
indicators need their own contrast check.

| Palette | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Neutral | `#F8FAFC` | `#F1F4F8` | `#E5EAF0` | `#C7D0DA` | `#8F9BAA` | `#667383` | `#4B5663` | `#34404C` | `#28323D` | `#1F2933` |
| Info | `#F0F9FF` | `#DEF2FC` | `#B0D5E9` | `#82B7D5` | `#529BC2` | `#087EAE` | `#0F6F99` | `#136085` | `#145271` | `#14445E` |
| Success | `#EDFCF5` | `#D5F7E7` | `#A9DAC3` | `#7DBDA0` | `#4FA17E` | `#09855E` | `#0E7554` | `#11664A` | `#125740` | `#124936` |
| Warning | `#FFFBED` | `#FFF1C6` | `#FCDEA4` | `#F9CC80` | `#F5B858` | `#F0A51B` | `#D18B10` | `#97620E` | `#71490C` | `#452B08` |
| Danger | `#FFF1F4` | `#FFE1E8` | `#FABAC1` | `#F1929C` | `#E56877` | `#D73554` | `#BF324D` | `#A72E45` | `#902A3E` | `#792637` |
| Black | `#F5F5F5` | `#E0E0E0` | `#C2C2C2` | `#A3A3A3` | `#525252` | `#333333` | `#1F1F1F` | `#141414` | `#0A0A0A` | `#000000` |

Every palette is available through generated variables such as `--lesli-color-success-500` and through the corresponding LesliAssets color utilities.

```html
<div class="border border-warning-300 bg-warning-50 text-warning-800">
    Review the highlighted fields.
</div>

<p class="text-success-700">Changes saved successfully.</p>
```

## Accessibility

- Prefer shades 50–100 for message backgrounds and 700–900 for text.
- Use a dark foreground on Warning 50–600; white is appropriate at Warning 700 and darker.
- Use dark text on semantic shades 50–400. For solid info, success and danger actions, use the default shade 500 with white text.
- Do not communicate status with color alone. Pair it with text, an icon, or both.

Semantic and categorical palettes are independent. Do not substitute Cyan for Info, Teal for Success, Gold for Warning, or Rose for Danger.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/theme/semantics.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

