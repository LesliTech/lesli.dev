# Installation

LesliContacts provides an account-scoped contact directory. It requires Lesli `~> 5.0` and stores contacts in the host database.

## Install and Mount

```shell
bundle add lesli_contacts
```

The standard router mounts the engine at `/contacts`:

```ruby
Rails.application.routes.draw do
  Lesli::Router.mount(self)
end
```

For a manual mount:

```ruby
Rails.application.routes.draw do
  mount LesliContacts::Engine => "/contacts"
end
```

Prepare the database and initialize existing accounts:

```shell
bin/rails lesli:db:prepare
```

## Verify the Installation

```shell
bin/rails routes -g contacts
bin/rails server
```

Visit `http://127.0.0.1:3000/contacts`. The engine exposes contact listing, creation, and detail routes plus its account resource.

See [Translations](/engines/contacts/about/translations) and [Database](/engines/contacts/about/database) before extending the engine.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliContacts/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

