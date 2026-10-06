# Timeline

`LesliView::Components::Timeline` renders activity hashes in chronological presentation.

```erb
<%= render LesliView::Components::Timeline.new(
    activities: [
        { "date" => "Oct 5, 2026", "operation" => "Ticket created", "icon" => "create" }
    ],
    icons: { create: "add_circle" }
) %>
```

Each activity should provide string keys for `date`, `operation`, optional `description`, and optional `icon`. The `icons:` hash maps activity codes to Material Symbol names; unknown codes use `radio_button_checked`. Pass an array, not `nil`, when rendering the component directly.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/components/timeline.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

