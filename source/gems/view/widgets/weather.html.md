# Weather widget

`LesliView::Widgets::Weather` presents a temperature, location, condition, and Material Symbol icon. It is a display component; fetching weather data remains the application's responsibility.

```erb
<%= render LesliView::Widgets::Weather.new(
    Time.current,
    temperature: 24,
    location: "Guatemala City",
    condition: "Partly cloudy",
    unit: "C",
    icon: "partly_cloudy_day"
) %>
```

`unit:` accepts `C` or `F` case-insensitively and falls back to `C`. A missing temperature renders an em dash. A missing condition uses the translated showers label, and a missing icon falls back to `rainy`. The positional date is retained by the API but is not currently displayed.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/weather.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

