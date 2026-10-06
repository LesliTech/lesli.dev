# Installation

LesliBabel manages translation modules, buckets, and labels for installed Lesli engines. It requires Lesli `~> 5.1.0` and stores managed translations in the host database.

## Install and Mount

```shell
bundle add lesli_babel
```

The standard router mounts the engine at `/babel`:

```ruby
Rails.application.routes.draw do
  Lesli::Router.mount(self)
end
```

For a manual mount:

```ruby
Rails.application.routes.draw do
  mount LesliBabel::Engine => "/babel"
end
```

Prepare the database and import translations from installed engines:

```shell
bin/rails lesli:db:prepare
```

During this command, Lesli scans the route matrix to create translation buckets and then imports values from each engine's `config/locales/translations.<locale>.yml` files.

## Verify the Installation

```shell
bin/rails routes -g babel
bin/rails server
```

Visit `http://127.0.0.1:3000/babel` and confirm that installed engines appear as modules. See [Translations](/engines/babel/about/translations), [Tasks](/engines/babel/about/tasks), and [Database](/engines/babel/about/database) before synchronizing package files.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliBabel/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

