# Chart widget

`LesliView::Widgets::Chart` wraps a small bar or line chart in the standard dashboard-card presentation.

```erb
<%= render LesliView::Widgets::Chart.new(
    "Tickets",
    { "Open" => 12, "Pending" => 7, "Closed" => 19 },
    type: :bar
) %>
```

The data object must respond to `to_a` and produce label/value pairs. `type:` accepts `:bar` or `:line`; unsupported values fall back to `:bar`. `nil` or empty data renders the translated `No chart data` state.

The host application must load the Lesli chart JavaScript. Use the lower-level [chart components](/gems/view/charts/general) when you need several datasets, custom height, or database conversion.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/chart.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

