# Date widget

`LesliView::Widgets::Date` displays a date as a prominent day number with localized weekday, month, and year.

```erb
<%= render LesliView::Widgets::Date.new(Date.new(2026, 10, 5)) %>
```

The argument defaults to `Time.current`. Values responding to `to_date` and parseable strings are accepted; invalid values fall back to the current date. Weekday, month, and accessible labels use the active I18n locale.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/widgets/date.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

