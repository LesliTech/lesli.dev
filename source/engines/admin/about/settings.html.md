# Settings and Configuration

LesliAdmin provides an administrative view of the effective Lesli configuration and the engines loaded by the host application. Open it from the Admin navigation or visit:

```text
/admin/settings
```

The page is organized into Default, Modules, and About tabs.

---

## Default Configuration

The Default tab is a read-only viewer for values exposed through `Lesli.config`. It summarizes the Rails environment, number of sections, number of leaf values, and demo-mode state before presenting the configuration in collapsible sections.

The current sections are:

| Section | Source |
| --- | --- |
| Instance | `Lesli.config.demo` and `Lesli.config.instance` |
| Company | `Lesli.config.company` |
| Locales | `Lesli.config.babel[:locales]` |
| Date and time | `Lesli.config.datetime` |
| Security | `Lesli.config.security` |
| Theme | `Lesli.config.theme` |
| Layout | `Lesli.config.layout` |
| Mailer | `Lesli.config.mailer` |
| Paths | `Lesli.config.shield[:path_after_login]` |

The first sections are expanded initially; the remaining sections can be opened as needed. The viewer does not provide search or editing controls.

Hashes and arrays are rendered recursively. Booleans use enabled or disabled badges, missing values are identified explicitly, and hexadecimal colors include a visual swatch.

---

## Sensitive Values

Sensitive values are filtered while the server renders the partial. A key matching password, secret, token, API key, private key, credential, encryption, or salt is replaced by a `Filtered` badge.

The original value is never included in the generated HTML. Filtering applies recursively to nested hashes and arrays. When adding a new configuration group, render its values through `_configuration_value.html.erb` instead of interpolating the object directly.

The view test verifies both the filtered indicator and the absence of the configured security password:

```shell
bin/rails test test/views/lesli_admin/settings_defaults_test.rb
```

The filter is a display safeguard, not a replacement for keeping credentials out of logs, exceptions, and other responses.

---

## Modules

The Modules tab lists engines registered in `LesliSystem` and renders their name, version, and metadata through the shared engine specification component.

Module activation choices are stored in the browser's `localStorage` under `engineData`. This interface state does not install or uninstall gems and does not change the server bundle. Engine availability is still determined when the Rails application boots.

---

## About

The About tab renders the LesliAdmin engine specification from the Lesli engine registry. Use it to inspect the engine's published metadata and loaded version.

---

## Tailwind Sources

All settings partials must remain registered as Tailwind sources so their utility classes are included in the compiled engine stylesheet:

```css
@source "../../app/views/lesli_admin/settings/_defaults.html.erb";
@source "../../app/views/lesli_admin/settings/_configuration_value.html.erb";
@source "../../app/views/lesli_admin/settings/_modules.html.erb";
```

After changing utility classes, rebuild the shared stylesheets from LesliAssets:

```shell
cd gems/LesliAssets
make build.tailwind
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/settings.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/21</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

