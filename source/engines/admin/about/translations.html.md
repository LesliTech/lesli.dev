# Translations

LesliAdmin stores locale files under `config/locales` and reserves the `lesli_admin` namespace for its user-facing text. Keeping every label inside that namespace prevents collisions with Lesli Core, the host application, and other engines.

---

## File and Namespace

Add each supported locale to its own file:

```text
config/locales/translations.en.yml
config/locales/translations.es.yml
config/locales/translations.fr.yml
config/locales/translations.it.yml
config/locales/translations.pt.yml
```

Organize labels by feature or controller bucket:

```yaml
# config/locales/translations.en.yml
en:
  lesli_admin:
    navigation:
      dashboard: "Dashboard"
      account: "Account"
      settings: "Settings"
    accounts:
      title: "Account information"
      company_name: "Company name"
      updated: "Account updated"
```

The path is always:

```text
locale.engine.bucket.label
en.lesli_admin.accounts.title
```

Use `shared` as the bucket only when a label is reused by several LesliAdmin features. A label shared by every engine belongs to the `lesli` namespace in Lesli Core.

---

## Use a Translation

Reference the complete key from controllers, views, components, and services:

```erb
<%= I18n.t("lesli_admin.accounts.title") %>
```

```ruby
stream_notification_success(
  I18n.t("lesli_admin.accounts.updated")
)
```

Prefer interpolation over sentence fragments:

```yaml
en:
  lesli_admin:
    accounts:
      engine_count: "%{count} installed engines"
```

```erb
<%= I18n.t(
  "lesli_admin.accounts.engine_count",
  count: LesliSystem.engines.size
) %>
```

When adding a label, add it to every locale file in the same change. Use the English value temporarily only when the translation is genuinely pending and make that state visible during review.

---

## Work with LesliBabel

When LesliBabel is installed, the standard database preparation scans routes and imports the local translation files:

```shell
bin/rails lesli:db:prepare
```

Run the individual tasks while developing translation structure:

```shell
bin/rails lesli_babel:scan
bin/rails lesli_babel:import
```

`scan` creates LesliBabel modules and buckets from the installed engine routes. `import` reads values below `lesli_admin` from each available locale.

LesliBabel may also deploy reviewed database values back to the engine's `translations.<locale>.yml` files. Treat that as a source change: inspect the complete diff and run the relevant interface tests before committing it.

The locale files shipped by LesliAdmin remain the version-controlled source of truth.

---

## Translation Checklist

* Use the `lesli_admin` engine namespace.
* Group labels by a stable feature or controller bucket.
* Replace visible hard-coded text rather than adding unused keys.
* Preserve interpolation variables in every locale.
* Add or update interface tests when translated text affects behavior.
* Run the Babel import when changing keys or bucket names.
* Review generated locale files before committing them.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/translations.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

