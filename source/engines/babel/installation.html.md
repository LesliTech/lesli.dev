# Installation & configuration

```shell
# Add LesliBabel engine
bundle add lesli_babel
```

```shell
# Setup database
rake lesli:db:setup
```

```ruby
# Load LesliBabel
Rails.application.routes.draw do
    mount LesliBabel::Engine => "/babel"
end
```
<section class="lesli-documentation-footer">
    <p><a><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29 22:50</p>
</section>
<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->
