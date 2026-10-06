# Installation

LesliAdmin provides account administration for applications built with Lesli. The current gem requires Lesli `~> 5.1.0` and uses the host application's database, authentication, assets, and application layout.

---

## Add the Engine

Install the released gem from the host Rails application:

```shell
bundle add lesli_admin
```

For local engine development, reference the LesliBuilder checkout instead:

```ruby
# Gemfile
gem "lesli_admin", path: "engines/LesliAdmin"
```

Then install the updated bundle:

```shell
bundle install
```

---

## Mount the Routes

The standard Lesli router mounts LesliAdmin at `/admin` when the gem is installed:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  Lesli::Router.mount(self)
end
```

Applications that do not use the standard router can mount the isolated engine directly:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  mount LesliAdmin::Engine => "/admin"
end
```

The direct mount exposes LesliAdmin, but the host application remains responsible for mounting the other Lesli engines and authentication routes it needs.

---

## Prepare the Database

Run the Lesli preparation task from the host application:

```shell
bin/rails lesli:db:prepare
```

This runs pending migrations, initializes installed engines for existing accounts, rebuilds the Lesli resource index, and configures optional integrations such as LesliShield and LesliBabel when they are installed.

LesliAdmin owns its migrations inside the gem. Do not copy them into the host application.

---

## Optional Dashboard Integration

Install LesliDashboard when the application should render LesliAdmin's shared dashboard and its installed-engines component:

```shell
bundle add lesli_dashboard
bin/rails lesli:db:prepare
```

See [Dashboards](/engines/admin/about/dashboards) for component registration and customization.

---

## Verify the Installation

Confirm that Rails loaded the mounted routes:

```shell
bin/rails routes -g admin
```

Start the application and visit:

```text
http://127.0.0.1:3000/admin
```

The exact host and port depend on the Rails server configuration. Authentication may redirect a signed-out visitor to the application's login page.

---

## Upgrade

After updating the gem, prepare the host application again and run its tests:

```shell
bundle update lesli_admin
bin/rails lesli:db:prepare
bin/rails test
```

Review the LesliAdmin release notes before upgrading across a minor or major version.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

