# Account Management

LesliAdmin provides the administrative interface for the current Lesli account. The public account page currently allows an administrator to review and update the core account name and email address.

Open the page from the Admin navigation or visit:

```text
/admin/account
```

---

## Account Information

The account form reads the signed-in user's current `Lesli::Account` and exposes these fields:

| Field | Purpose |
| --- | --- |
| Name | Account or organization name shown throughout the application |
| Email | Primary account email address |

Submitting the form updates the existing core account. LesliAdmin does not create a second account identity; its engine-specific account record extends the account owned by Lesli Core.

The controller also supports HTML, Turbo Stream, and JSON responses for the account resource. Host applications should use the mounted engine route rather than constructing controller URLs manually.

---

## Extending Account Information

LesliAdmin owns database structures for company details, locations, settings, and currencies. Those structures are extension points under active development and are not all exposed as public account workflows yet.

When extending the account interface:

* Keep the core identity in `Lesli::Account`.
* Store LesliAdmin-specific values in the corresponding `lesli_admin_` table.
* Scope every query to the current account.
* Add routes only when the controller and authorization behavior are complete.
* Add translated labels below the `lesli_admin` namespace.
* Document the user-facing workflow when it becomes supported.

See [Database](/engines/admin/about/database) for table ownership and [Translations](/engines/admin/about/translations) for label conventions.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/account/overview.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

