# Translations

LesliSupport ships English, Spanish, French, Italian, and Portuguese locale files. They are currently ready for engine labels but contain no Support-specific keys.

Keep new labels below the `lesli_support` namespace and group them by feature:

```yaml
en:
  lesli_support:
    tickets:
      title: "Tickets"
      create: "Create ticket"
    dashboard:
      open_tickets: "Open tickets"
```

Use complete keys from Ruby and views:

```ruby
I18n.t("lesli_support.tickets.title")
```

Add matching keys to `translations.en.yml`, `translations.es.yml`, `translations.fr.yml`, `translations.it.yml`, and `translations.pt.yml`. Preserve interpolation variables and keep reusable copy in a `shared` bucket instead of duplicating it across screens.

When LesliBabel is installed:

```shell
bin/rails lesli_babel:scan
bin/rails lesli_babel:import
```

Review generated changes before committing them. The files in LesliSupport remain the locale source distributed with the gem.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliSupport/tree/master/docs/about/translations.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

