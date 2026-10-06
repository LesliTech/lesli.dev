# Typography

Lesli uses Domine and Open Sans. Both variable fonts are packaged by LesliAssets and loaded by the framework stylesheet.

## Typefaces

| Role | Typeface | Use |
| --- | --- | --- |
| Headings | Domine | Page titles, section headings, and editorial emphasis |
| Interface | Open Sans | Body text, navigation, labels, buttons, tables, and forms |

Domine gives headings a recognizable editorial character. Open Sans keeps dense application interfaces readable and neutral.

## Domine examples

The following specimens explicitly select Domine and set the variable `wght` axis so they are not affected by the documentation site's inherited typography.

<div class="br-2 p-5 mb-5 has-background-white">
    <p style="font-family: 'Domine', serif !important; font-size: 2rem; line-height: 1.25; font-weight: 400; font-variation-settings: 'wght' 400;">Build useful software for real people.</p>
    <p style="font-family: 'Domine', serif !important; font-size: 1.25rem; font-weight: 400; font-variation-settings: 'wght' 400;">Regular 400 — The quick brown fox jumps over the lazy dog.</p>
    <p style="font-family: 'Domine', serif !important; font-size: 1.25rem; font-weight: 500; font-variation-settings: 'wght' 500;">Medium 500 — The quick brown fox jumps over the lazy dog.</p>
    <p style="font-family: 'Domine', serif !important; font-size: 1.25rem; font-weight: 600; font-variation-settings: 'wght' 600;">Semibold 600 — The quick brown fox jumps over the lazy dog.</p>
    <p style="font-family: 'Domine', serif !important; font-size: 1.25rem; font-weight: 700; font-variation-settings: 'wght' 700;">Bold 700 — The quick brown fox jumps over the lazy dog.</p>
</div>

## Open Sans examples

These specimens explicitly select Open Sans and force the same weight variations used throughout the product interface.

<div class="br-2 p-5 mb-5 has-background-white">
    <p style="font-family: 'OpenSans', sans-serif !important; font-size: 1rem; line-height: 1.6; font-weight: 400; font-variation-settings: 'wght' 400;">Regular 400 — Clear interface copy helps people complete their work.</p>
    <p style="font-family: 'OpenSans', sans-serif !important; font-size: 1rem; line-height: 1.6; font-weight: 500; font-variation-settings: 'wght' 500;">Medium 500 — Clear interface copy helps people complete their work.</p>
    <p style="font-family: 'OpenSans', sans-serif !important; font-size: 1rem; line-height: 1.6; font-weight: 600; font-variation-settings: 'wght' 600;">Semibold 600 — Clear interface copy helps people complete their work.</p>
    <p style="font-family: 'OpenSans', sans-serif !important; font-size: 1rem; line-height: 1.6; font-weight: 700; font-variation-settings: 'wght' 700;">Bold 700 — Clear interface copy helps people complete their work.</p>
    <p style="font-family: 'OpenSans', sans-serif !important; font-size: 1rem; line-height: 1.6; font-weight: 400; font-variation-settings: 'wght' 400;">ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789</p>
</div>

## Framework behavior

The global Lesli styles apply Open Sans to the document body and Domine to heading elements. Components inherit the correct family without needing a utility class.

## Guidance

- Use Domine sparingly inside dense product interfaces.
- Use Open Sans for controls and long-form interface copy.
- Avoid introducing decorative font families into framework components.
- Preserve the browser's ability to synthesize appropriate variable-font weights.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/theme/fonts.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

