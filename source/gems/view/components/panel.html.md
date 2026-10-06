# Panel

`LesliView::Components::Panel` renders an Alpine-powered slide-out panel with optional background overlay.

```erb
<%= render LesliView::Components::Panel.new("Filters", "ticket-filters") do %>
    <%= render "filters" %>
<% end %>

<button x-data @click="$dispatch('ticket-filters')">Open filters</button>
```

The first argument is the title. The second is the Alpine window-event name and defaults to `panel`. Set `overlay: false` to omit the dismissible page overlay. The host application must load Alpine.js and the Lesli panel styles.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/components/panel.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

