# Installation

LesliMailer provides the engine account and base Rails mailer/job namespaces used for email capabilities in a Lesli application. It requires Lesli `~> 5.0`.

## Install and Mount

```shell
bundle add lesli_mailer
```

The standard router mounts the engine at `/mailer`:

```ruby
Rails.application.routes.draw do
  Lesli::Router.mount(self)
end
```

For a manual mount:

```ruby
Rails.application.routes.draw do
  mount LesliMailer::Engine => "/mailer"
end
```

Prepare the database and initialize existing accounts:

```shell
bin/rails lesli:db:prepare
```

## Configure Delivery

Email delivery settings belong to the host Rails application. Configure its environment-specific `action_mailer` delivery method, host, credentials, and Active Job adapter. Do not commit SMTP credentials to LesliMailer.

The base classes are:

```ruby
LesliMailer::ApplicationMailer
LesliMailer::ApplicationJob
```

The current base mailer uses `from@example.com`; applications must replace that placeholder before delivering production email.

## Verify the Installation

```shell
bin/rails routes -g mailer
bin/rails server
```

See [Translations](/engines/mailer/about/translations) and [Database](/engines/mailer/about/database) for the current engine-owned resources.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliMailer/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

