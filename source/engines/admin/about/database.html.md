# Database

LesliAdmin uses collection code `01` and engine code `01`. Its migrations live under `db/migrate/v1` and are added to the host application's migration paths when the engine loads.

The host database remains the runtime source for all installed engines; LesliAdmin owns only the tables prefixed with `lesli_admin_`.

---

## Table Registry

| Migration code | Table | Responsibility | Important relationships |
| --- | --- | --- | --- |
| `01.01.00.01.10` | `lesli_admin_accounts` | Engine-specific state for a Lesli account | Required reference to `lesli_accounts` |
| `01.01.00.02.10` | `lesli_admin_account_details` | Company, contact, address, and social profile details | Reference to `lesli_accounts` |
| `01.01.00.03.13` | `lesli_admin_account_settings` | Account and optional user setting values | Required reference to `lesli_admin_accounts`; optional reference to `lesli_users` |
| `01.01.00.04.10` | `lesli_admin_account_locations` | Hierarchical account locations | Reference to `lesli_accounts`; self-reference through `parent_id` |
| `01.01.00.05.10` | `lesli_admin_account_currencies` | Account currency definitions | References to `lesli_admin_accounts` and `lesli_users` |

The final two digits are the migration revision. For example, `13` identifies revision 1.3 of the account-settings table; it must not be omitted when checking whether a migration code is unique.

---

## Account Ownership

`lesli_admin_accounts` is created with Lesli's shared account migration helper:

```ruby
create_table_lesli_shared_account_10(:lesli_admin)
```

The helper creates the engine account table and its required reference to the core `lesli_accounts` table. This establishes one engine-specific account record for each participating Lesli account.

Other tables currently use one of two ownership levels:

```text
lesli_accounts
├── lesli_admin_accounts
├── lesli_admin_account_details
└── lesli_admin_account_locations

lesli_admin_accounts
├── lesli_admin_account_settings
└── lesli_admin_account_currencies
```

When adding a table, choose the relationship deliberately:

* Reference `lesli_accounts` when the record belongs directly to the core account.
* Reference `lesli_admin_accounts` when it depends on LesliAdmin-specific account state.
* Reference `lesli_users` when a value belongs to or was selected by a specific user.

Always use an explicit `to_table` when the association name does not identify the target table.

---

## Locations and Uniqueness

Locations form a hierarchy through `parent_id`. Their composite unique index prevents duplicate names at the same level and parent within one account:

```ruby
add_index(
  :lesli_admin_account_locations,
  %i[account_id name level parent_id],
  unique: true,
  name: "location_uniqueness_index"
)
```

`level` stores a normalized geographic level such as `country`, `state`, or `city`; `native_level` can preserve the regional name for that level.

---

## Soft Deletion

The accounts, details, locations, and currencies tables include an indexed `deleted_at` column. The account-settings table does not currently use soft deletion.

Do not assume every engine table is recoverable. Check the migration and model before using deletion behavior in a service or maintenance task.

---

## Prepare and Verify

Run migrations through the host Rails application:

```shell
bin/rails lesli:db:prepare
bin/rails db:migrate:status
```

For a new reversible migration, verify both directions in a disposable environment:

```shell
bin/rails db:migrate
bin/rails db:rollback STEP=1
bin/rails db:migrate
```

Review the resulting `db/schema.rb` and run the host test suite. New migration names must follow the [Lesli migration versioning convention](/engines/lesli/database/versioning); broader ownership rules are documented in [Database Architecture](/engines/lesli/database/structure).

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

