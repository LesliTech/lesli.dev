# Development

LesliAssets keeps editable sources and generated Rails assets separate. Make changes in the source location, run the matching build target, and commit the generated output when the repository already tracks it.

## Setup

```shell
git clone https://github.com/LesliTech/LesliAssets.git
cd LesliAssets
bundle install
npm ci
```

The asset builders expect Node.js 20.x, npm, and the standard Lesli workspace layout.

## Build targets

| Command | Source | Generated output |
| --- | --- | --- |
| `make build.js` | `source/js` | `app/assets/javascripts/lesli_assets` |
| `make build.icons` | `app/assets/icons/lesli_assets` | SVG sprite partials under `app/views` |
| `make build.mails` | `source/mails` | Email views under `app/views/lesli_assets/emails` |
| `make build.tailwind` | workspace templates and Tailwind sources | Compiled Tailwind stylesheets |
| `make build` | All development targets | All generated development assets |

Tailwind CSS is the only stylesheet pipeline. Production targets use the `prod.*` names and enable minification where supported.

`make build.icons` uses the repository-local `node_modules/.bin/svgo`. If it reports that SVGO is missing, run `npm ci` from the LesliAssets directory before rebuilding.

## Shared theme

`source/tailwind/application.css` and `public.css` emit the complete Tailwind
theme with `theme(static)`. The Lesli mappings in `settings/theme.css` use
`@theme inline static` so every semantic token is available, including tokens
used only by an independently compiled engine.

Engines, LesliView, and the optional Calendar stylesheet use `@reference` for the
theme. Engines generate utility selectors; LesliView applies utilities inside
its own component selectors. These consumers do not emit global theme variables. Tailwind's internal `--tw-*` properties and generated animation rules
remain part of the utilities and should not be removed manually.

Every layout must load either `lesli_assets/application` or `lesli_assets/public`
before those consumer stylesheets. Release the updated LesliAssets together with
the engines and LesliView adopting this contract. Rebuild and publish the
compiled CSS; updating the source files alone does not change installed gems.

`test/tailwind_theme_test.rb` compiles both shared entrypoints and an independent
consumer to verify that global tokens remain available without being duplicated.

## Style ownership and compilation

Install build dependencies with `npm ci`. The pinned `lesli-css` package supplies
`css/colors.css`, imported by both global entrypoints. Only its compiled color
variables are imported, not its Bulma or Sass styles. The published gem ships
the compiled CSS and does not need Node or lesli-css at runtime.

Keep account overrides in `settings/variables.css` and Tailwind mappings in
`settings/theme.css`; update the palette in lesli-css instead of duplicating it here.

| Package | Responsibility | Published selectors |
| --- | --- | --- |
| LesliAssets | Global theme, reset, fonts, icons and shared application styles | Standard utilities and shared rules |
| LesliView | Reusable components, partials, layouts, widgets and charts | Component classes such as `lesli-button` and `lesli-error` |
| Core and other engines | Their own pages and feature-specific presentation | Standard utilities and engine-specific rules |

LesliAssets and engines use unprefixed Tailwind classes, including variants such
as `sm:flex-row` and `hover:bg-slate-50`. No package uses Tailwind's package-prefix
option. Names such as `lesli-button` are ordinary component classes, and
`--lesli-color-primary` is a shared CSS variable; neither is a Tailwind prefix.

Every package keeps its own build. LesliAssets and engine entrypoints scan their
declared `@source` paths. LesliView disables utility discovery and explicitly
imports component stylesheets; those use `@apply` without publishing global
selectors such as `.flex` or `.text-sm`.

Common utility rules may appear in both LesliAssets and engine bundles. This
small duplication is intentional. Do not deduplicate generated CSS or create
manual lists of shared utility classes.

Every consumer imports Tailwind's default theme with `theme(reference)` and
references `settings/theme.css` for Lesli's semantic tokens. This single Lesli
mapping keeps `text-primary`, `bg-header` and semantic palettes available to
every independently compiled package without emitting global variables again.

Tailwind may include default fallbacks or compiled values for its standard
utilities, such as shadows. Lesli semantic colors reference the runtime
`--lesli-*` variables directly. Breakpoints remain compile-time values.

LesliAssets' `source/tailwind/application.css` defines the global theme, reset,
shared source discovery and application-shell rules in one entrypoint. They
compile into `lesli_assets/application.css`; no separate shared utility stylesheet
is loaded. Core loads that shared stylesheet, LesliView, and the active engine
stylesheet through the existing asset mechanism. Component sidecar files
are compiled into LesliView's single stylesheet, not loaded separately.

The documentation website still uses Bulma. Keep its previews and styling
separate from the Tailwind styles shipped by application packages.

## Rules for generated files

Do not hand-edit compiled CSS, bundled JavaScript, generated sprite partials, or compiled email HTML. Update the source and rebuild so the next compilation does not replace the change.

Run the Ruby tests after changing the gem or its build runners:

```shell
bundle exec rake
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/about/development.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

