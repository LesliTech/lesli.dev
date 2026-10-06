# Toolbar

`LesliView::Components::Toolbar` provides a GET search form with optional filter and action slots.

```erb
<%= render LesliView::Components::Toolbar.new(
    "Search tickets...",
    url: tickets_path,
    search_name: :query
) do |toolbar| %>
    <% toolbar.with_filters do %>
        <%= select_tag :status, options_for_select(statuses, params[:status]) %>
    <% end %>
    <% toolbar.with_actions do %>
        <%= render LesliView::Elements::Button.new("New", url: new_ticket_path) %>
    <% end %>
<% end %>
```

The positional argument sets the placeholder. `initial_value:` overrides the current query value, `url:` defaults to the request path, and `search_name:` defaults to `:search`. Clearing a search preserves the other query parameters.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/components/toolbar.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

