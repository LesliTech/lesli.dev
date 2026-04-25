<div class="documentation-header">
    <img alt="LesliBell logo" src="/images/engines/bell/bell-logo.svg" />
    <h1>
        Notifications & Announcements System
    </h1>
</div>

<div class="documentation-statics">
    <a target="blank" href="https://rubygems.org/gems/lesli_bell">
        <img src="https://badge.fury.io/rb/lesli_bell.svg" alt="Gem Version" height="24">
    </a>
</div>


### Quick start

```shell
# Add LesliBell engine
bundle add lesli_bell
```

```shell
# Setup database
rake lesli:db:setup
```

```ruby
# Load LesliBell
Rails.application.routes.draw do
    mount LesliBell::Engine => "/bell"
end
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliBell/tree/master/docs/about/lesli.dev.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/06/02</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

