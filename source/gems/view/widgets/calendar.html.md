# Calendar widget

`LesliView::Widgets::Calendar` renders one compact month without navigation controls.

```erb
<%= render LesliView::Widgets::Calendar.new(
    "October schedule",
    date: Date.new(2026, 10, 1),
    selected_date: Date.new(2026, 10, 5),
    events: [Date.new(2026, 10, 5), Date.new(2026, 10, 12)],
    week_starts_on: :monday
) %>
```

`date:` selects the displayed month, `events:` adds markers, and `selected_date:` highlights one day. Values responding to `to_date` and parseable strings are accepted. `week_starts_on:` supports `:sunday` and `:monday`; invalid values fall back to Sunday. The optional second positional `number` remains accepted for compatibility but does not affect the rendered calendar.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/calendar.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

