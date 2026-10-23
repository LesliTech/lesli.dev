# Dashboards

LesliAdmin integrates with LesliDashboard through the framework's shared dashboard contract. Its dashboard summarizes the current account without mixing configuration catalogs or operational settings into the overview.

LesliDashboard is an optional integration. When it is installed, it provides persisted component placement and rendering. LesliAdmin still prepares the account summary before rendering the shared dashboard.

---

## Registered Components

`LesliAdmin::Dashboard` registers four components:

| Component | Width | Position | Content |
| --- | ---: | ---: | --- |
| `users` | 4 | 1 | Number of users belonging to the current account |
| `roles` | 4 | 2 | Number of roles belonging to the current account |
| `installed_engines` | 4 | 3 | Number of engines in the Lesli engine registry |
| `account_metadata` | 12 | 4 | Account ID, owner, status, creation date, and last update |

Widths use LesliDashboard's twelve-column desktop grid. Components stack on smaller screens.

The dashboard intentionally excludes locations, currencies, and settings. Older persisted components with those names are retired automatically when the dashboard is opened.

---

## Data Loading

`LesliAdmin::AccountService#summary` loads the current account with its owner, users, and roles, then returns one account-scoped payload:

```ruby
{
  account: account,
  users: account.users.size,
  roles: account.roles.size,
  installed_engines: LesliSystem.engines.size
}
```

The dashboard partials consume `@account_summary`. Keep additional queries out of the partials; extend the service when a new metric needs data.

---

## Component Partials

Component names map to partials in `app/views/lesli_admin/dashboards`:

```text
users             -> _component-users.html.erb
roles             -> _component-roles.html.erb
installed_engines -> _component-installed-engines.html.erb
account_metadata  -> _component-account-metadata.html.erb
```

The three count metrics use `LesliView::Widgets::Count`. Account metadata has its own responsive component because it presents several related values and a status badge.

A new component should include:

* A stable snake-case name in `LesliAdmin::Dashboard::COMPONENTS`
* A matching `_component-<name>.html.erb` partial
* Account-scoped data loaded by a service
* An accessible label and a useful empty state where applicable
* Responsive content that fits the configured width
* Model or rendering tests for its registration and behavior

---

## Synchronize Existing Accounts

Prepare the application after installing LesliDashboard or registering a new component:

```shell
bin/rails lesli:db:prepare
```

The dashboard controller also registers missing LesliAdmin components when the dashboard is opened. Registration preserves the persisted size, position, and configuration of existing components, while the controller removes components listed in `RETIRED_COMPONENTS`.

Verify the result by visiting the LesliAdmin dashboard at `/admin`.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/dashboards.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/21</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

