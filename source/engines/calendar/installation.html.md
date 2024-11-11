# Installation & configuration

```shell
# Add lesli_calendar engine
bundle add lesli_calendar
```

```shell
# Setup database
rake lesli:db:setup
```

```ruby
# Load lesli_calendar
Rails.application.routes.draw do
    mount lesli_calendar::Engine => "/calendar"
end
```
<section class="lesli-documentation-footer">
    <p><a><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/11/11 04:31</p>
</section>
<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->
