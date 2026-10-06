# Dashboards

LesliAdmin integrates with LesliDashboard through the framework's shared dashboard contract. The engine currently registers one component, `installed_engines`, which displays the number of Lesli engines loaded by the host application.

LesliDashboard is an optional integration and must be installed for shared dashboard persistence and rendering.

---

## Register Components

LesliAdmin declares its components in `LesliAdmin::Dashboard`:

```ruby
module LesliAdmin
  class Dashboard < Lesli::Shared::Dashboard
    COMPONENTS = %i[installed_engines]
  end
end
```

A symbol uses the LesliDashboard defaults:

| Option | Default |
| --- | --- |
| `size` | `4` columns in the twelve-column desktop grid |
| `position` | `1` |
| `config` | `{}` |

The shared renderer stacks components on small screens and applies the persisted width on larger screens.

---

## Render a Component

The component name maps to a partial in the engine dashboard directory:

```text
installed_engines
    ↓
app/views/lesli_admin/dashboards/_component-installed-engines.html.erb
```

The current component reads the installed engine registry:

```erb
<div class="box has-text-centered py-6">
  <p class="is-title is-size-3 mb-2">
    <b><%= LesliSystem.engines.size %></b>
  </p>
  <p class="is-title is-size-4">Installed engines</p>
</div>
```

The shared dashboard renderer also passes the persisted dashboard component as the `component` local. Use it when the partial supports values stored in `component.config`.

Keep queries account-scoped and move substantial data loading into a service instead of performing it directly in the partial.

---

## Add a Custom Component

Add the component name and its initial options to the dashboard model:

```ruby
module LesliAdmin
  class Dashboard < Lesli::Shared::Dashboard
    COMPONENTS = [
      :installed_engines,
      {
        account_summary: {
          size: 8,
          position: 2,
          config: { show_status: true }
        }
      }
    ].freeze
  end
end
```

Then create the matching partial:

```text
app/views/lesli_admin/dashboards/_component-account-summary.html.erb
```

Use a stable snake-case component name. The renderer converts underscores to dashes when resolving the partial.

A production component should provide:

* A clear heading or accessible label
* An empty state when there is no data
* Account-scoped queries and authorization where required
* Responsive content that fits its configured width
* Tests for its data and rendering behavior

---

## Initialize Existing Accounts

Register any missing dashboards and components after installing LesliDashboard or adding a component:

```shell
bin/rails lesli_dashboard:register
```

The task creates missing records for every Lesli account. It is safe to rerun, but it does not overwrite existing component size, position, or configuration. Changing defaults affects newly created component records; provide an explicit migration or maintenance task when existing records must change.

Verify the component by visiting the LesliAdmin dashboard at `/admin`.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/dashboards.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

