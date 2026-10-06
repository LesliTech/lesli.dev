# Translations

LesliContacts should place all user-facing labels below the `lesli_contacts` namespace. The engine does not yet ship locale files, so create `config/locales/translations.<locale>.yml` when extracting its current hard-coded interface text.

```yaml
en:
  lesli_contacts:
    contacts:
      title: "Contacts"
      new: "New contact"
      empty: "No contacts found"
```

Use complete keys:

```erb
<%= I18n.t("lesli_contacts.contacts.title") %>
```

Add the same key set for every locale supported by the application. Keep contact data entered by users separate from interface translations.

When LesliBabel is installed, register and import the new namespace with:

```shell
bin/rails lesli_babel:scan
bin/rails lesli_babel:import
```

Commit the locale files with the views that consume them. See the [engine documentation standard](/engines/lesli/contributing/engines#translation-page) for the shared structure.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliContacts/tree/master/docs/about/translations.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

