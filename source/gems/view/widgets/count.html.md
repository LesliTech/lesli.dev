# Count widget

`LesliView::Widgets::Count` displays one prominent metric with an optional title.

```erb
<%= render LesliView::Widgets::Count.new("Open tickets", 42) %>
```

The first positional argument is the title and the second is the displayed value. A `nil` value renders an em dash instead of an ambiguous zero.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/count.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

