# Installation

LesliBell provides account-scoped notifications and announcements. It requires Lesli `~> 5.1.0` and uses the host application's users, roles, accounts, and database.

## Install and Mount

```shell
bundle add lesli_bell
```

The standard Lesli router mounts the engine at `/bell`:

```ruby
Rails.application.routes.draw do
  Lesli::Router.mount(self)
end
```

For a manual mount:

```ruby
Rails.application.routes.draw do
  mount LesliBell::Engine => "/bell"
end
```

Prepare the database and initialize existing accounts:

```shell
bin/rails lesli:db:prepare
```

## Verify the Installation

```shell
bin/rails routes -g bell
bin/rails server
```

Visit `http://127.0.0.1:3000/bell`. The engine exposes notification and announcement resources in addition to its standard health and root routes.

See [Translations](/engines/bell/about/translations) and [Database](/engines/bell/about/database) for integration details.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliBell/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

