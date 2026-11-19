# Count widget

`LesliView::Widgets::Count` displays one prominent metric with an optional title.

```erb
<%= render LesliView::Widgets::Count.new("Open tickets", 42) %>
```

The first positional argument is the title and the second is the displayed value. A `nil` value renders an em dash instead of an ambiguous zero.

## Component files

```text
lib/lesli_view/widgets/
    count.rb
    count/
        count.html.erb
        count.css
```

The Ruby API is unchanged. The sidecar stylesheet is imported by
`source/tailwind/view.css` and compiled into the existing LesliView stylesheet.
It uses semantic classes and unprefixed `@apply`, with global theme variables
provided by LesliAssets.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/count.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

