# Database

LesliSupport uses collection code `07` and engine code `02`.

| Migration code | Table | Responsibility |
| --- | --- | --- |
| `07.02.00.01.10` | `lesli_support_accounts` | Engine state for a Lesli account |
| `07.02.00.01.10` | `lesli_support_items_tasks` | Tasks attached to supported records |
| `07.02.00.01.10` | `lesli_support_items_activities` | Activity history for supported records |
| `07.02.00.01.10` | `lesli_support_items_discussions` | Threaded discussions for supported records |
| `07.02.00.20.10` | `lesli_support_catalogs` | Account-scoped catalog groups |
| `07.02.00.20.10` | `lesli_support_catalog_items` | Type, category, priority, and other catalog values |
| `07.02.10.01.10` | `lesli_support_slas` | Service-level configuration |
| `07.02.11.01.10` | `lesli_support_tickets` | Ticket details, ownership, classification, and lifecycle dates |

A ticket belongs to a Support account and its creator, may have an assigned owner, and references catalog items for type, category, and priority. Ticket records include the shared tasks, activities, and discussions features.

The current migrations do not create settings, workflows, subscribers, attachments, versions, or assignment tables. Some of those integrations remain visible as commented implementation code and must not be treated as persisted features.

```shell
bin/rails lesli:db:prepare
bin/rails db:migrate:status
```

Preserve account ownership in every query and service. See [Database Architecture](/engines/lesli/database/structure) for shared migration helpers and migration naming.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliSupport/tree/master/docs/about/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

