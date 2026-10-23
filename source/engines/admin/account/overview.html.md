# Account Management

LesliAdmin provides the administrative interface for the current Lesli account. The account page separates the core identity and company profile into horizontal tabs so administrators can update each area independently.

Open the page from the Admin navigation or visit:

```text
/admin/account
```

---

## General

The General tab reads the signed-in user's current `Lesli::Account` and exposes these fields:

| Field | Purpose |
| --- | --- |
| Name | Account or organization name shown throughout the application |
| Email | Primary account email address |
| Status | Account lifecycle state, such as active, onboarding, or suspended |
| Data region | Region used to place or identify account data |

Submitting the form updates the existing core account. LesliAdmin does not create a second account identity; its engine-specific account record extends the account owned by Lesli Core.

---

## Company Profile

The Company profile tab updates the `LesliAdmin::Account::Detail` associated with the engine account. Its ownership path is `current_user.account.admin.detail`. When an account does not have a detail record yet, the account service builds an unsaved record so the same form supports the initial save and later updates.

The profile contains:

* Public and legal company names and a tagline
* Address, city, state or region, country catalog ID, and postal code
* Public email, website, and up to four phone numbers
* GitHub, LinkedIn, X/Twitter, Facebook, and YouTube URLs

The core account and company profile use separate forms. Saving one tab does not submit fields from the other tab.

---

## Request and Response Behavior

The account controller scopes both reads and writes to `current_user.account`. Core fields are persisted in `Lesli::Account`; company-detail fields are persisted through `current_user.account.admin`. Both writes run in one transaction.

The controller supports HTML, Turbo Stream, and JSON responses for the account resource. Validation errors render the account page again and are shown above the tabs. Host applications should use the mounted engine route instead of constructing controller URLs manually.

---

## Extending Account Information

LesliAdmin also owns database structures for locations, settings, and currencies. Those structures are extension points and are not currently exposed as account-editing workflows.

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
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

