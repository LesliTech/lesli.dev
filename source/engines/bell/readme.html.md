<p align="center">
	<img width="90" alt="LesliBell logo" src="/images/engines/bell/bell-logo.svg" />
    <h3 align="center">Notifications & Announcements System for the Lesli Framework.</h3>
</p>

<hr/>
    <p align="center">
        <a target="blank" href="https://rubygems.org/gems/lesli_bell">
            <img src="https://badge.fury.io/rb/lesli_bell.svg" alt="Gem Version" height="24">
        </a>
    </p>
<hr/>

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
    <p><a target="blank" href="https://github.com/LesliTech/LesliBell/tree/master/docs/readme.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

