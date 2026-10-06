# Database

LesliContacts uses collection code `02` and engine code `02`.

| Migration code | Table | Responsibility | Important relationships |
| --- | --- | --- | --- |
| `02.02.00.01.10` | `lesli_contacts_accounts` | Engine state for a Lesli account | Required core account reference |
| `02.02.10.01.10` | `lesli_contacts_contacts` | Account contact profiles | Contacts account |
| `02.02.10.01.10` | `lesli_contacts_contact_items_discussions` | Polymorphic discussions attached to contacts | Contacts account, core user, and contact target |

The contacts migration creates the contact table and its shared discussion structure together. Contacts include an indexed `deleted_at` column and belong to `lesli_contacts_accounts`.

Run schema operations through the host application:

```shell
bin/rails lesli:db:prepare
bin/rails db:migrate:status
```

New migrations must use the Contacts `02.02` prefix and a globally unique ten-digit version. See [Database Architecture](/engines/lesli/database/structure) and [Migration Versioning](/engines/lesli/database/versioning).

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliContacts/tree/master/docs/about/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

