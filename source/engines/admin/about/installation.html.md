# Installation & configuration

```shell
# Add LesliAdmin engine gem
bundle add lesli_admin
```

```shell
# Setup & initialize the database
rake lesli:db:setup
```

```ruby
# Load LesliAdmin engine
Rails.application.routes.draw do
    mount LesliAdmin::Engine => "/admin"
end
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

