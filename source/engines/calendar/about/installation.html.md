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

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliCalendar/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

