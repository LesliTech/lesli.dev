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
theme and import only the utilities they need. They do not emit global theme
variables. Tailwind's internal `--tw-*` properties and generated animation rules
remain part of the utilities and should not be removed manually.

Every layout must load either `lesli_assets/application` or `lesli_assets/public`
before those consumer stylesheets. Release the updated LesliAssets together with
the engines and LesliView adopting this contract. Rebuild and publish the
compiled CSS; updating the source files alone does not change installed gems.

`test/tailwind_theme_test.rb` compiles both shared entrypoints and an independent
consumer to verify that global tokens remain available without being duplicated.

## Utilities are compiled per package

Global theme variables are centralized in LesliAssets, but utility classes are
generated separately for LesliAssets, LesliView, and each engine. Each package's
entrypoint scans its own declared `@source` paths and ships its compiled CSS.
`@reference` shares theme information during compilation; it does not deduplicate
utility classes across separate stylesheets.

Common utilities such as `flex`, `grid`, `items-center`, and `text-sm` can therefore
appear in more than one package. This small duplication is intentional and
accepted: it preserves independent package builds and lets Rails hosts use the
published CSS without compiling a single utility bundle for all installed engines.

Keep this arrangement simple. Do not maintain manual lists of shared utility
classes or remove repeated rules from compiled output. Those approaches couple
package releases and can change CSS cascade behavior. The shared theme remains
the source of global values; each package owns the utilities and component rules
needed by its interface.

LesliView uses Tailwind's `prefix(lesliview)` to isolate its utilities, for example
`lesliview:flex lesliview:flex-col lesliview:sm:flex-row`. LesliAssets uses `lesliassets:`; engines use their lowercase module name, with `lesli:` for Lesli. Do not reuse `lesliview` in another package: sharing the same
prefix would reintroduce collisions between separately compiled stylesheets.

Tailwind also prefixes theme variable references. The inline aliases in
`settings/shared-theme.css` connect LesliView's utilities to the unprefixed runtime
tokens supplied by LesliAssets. They contain references, not copied design
values, and are imported with `@reference` so they emit no additional variables.
When a new LesliView utility needs another runtime token, add its alias there.
The compiled stylesheet test rejects unresolved `--lesliview-*` references.

Keep component-specific CSS for actual component styles, such as form controls
and button variants. Responsive utilities can remain in LesliView templates now
that their names are isolated. Unprefixed shared shell utilities still need
component-owned rules when base and responsive classes could collide across
packages.

The documentation website uses Bulma. Keep its HTML previews and documentation
styling separate from the Tailwind styles shipped by the application packages.

## Rules for generated files

Do not hand-edit compiled CSS, bundled JavaScript, generated sprite partials, or compiled email HTML. Update the source and rebuild so the next compilation does not replace the change.

Run the Ruby tests after changing the gem or its build runners:

```shell
bundle exec rake
```

## Prefixes by package

LesliAssets uses `lesliassets:`, LesliView uses `lesliview:`, and engines use `lesli:`, `lesliadmin:`,
`lesliaudit:`, `leslibabel:`, `leslibell:`, `leslicalendar:`, `leslicontacts:`, `leslidashboard:`, `leslimailer:`,
`leslishield:`, and `leslisupport:`. Place the prefix before variants: `leslicalendar:sm:flex-row`.
Shared shell templates use `lesliassets:` because LesliAssets compiles their utilities.
Icon and semantic component classes retain their names.

LesliAssets application.css imports its prefixed utilities.css while retaining
the global unprefixed theme and reset. Inline aliases in settings/shared-theme.css
connect each package to those runtime variables without copying values.
Breakpoints retain compile-time values because media queries cannot use CSS
variables. Lesli brand mappings continue to reference the account theme directly.
Publish templates and compiled stylesheets together. Keep Bulma in website docs.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/about/development.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

