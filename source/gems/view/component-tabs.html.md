# Tabs

```erb
<%= render LesliView::Elements::Tabs.new do |tabs| %>
    <% tabs.with_tab(tab_id: "tab1", title: "Tab 1") %>
    <% tabs.with_tab(tab_id: "tab2", title: "Tab 2") %>
    <% tabs.with_tab(tab_id: "tab3", title: "Tab 3") %>
    <% tabs.with_tab(tab_id: "tab4", title: "Tab 4", icon: "save") %>
    <% tabs.with_tab(tab_id: "tab5", title: "Tab 5", icon: "edit") %>
    <% tabs.with_tab(tab_id: "tab6", title: "Tab 6", icon: "delete") %>
<% end %>
```


```erb
<%= render LesliView::Elements::Tabs.new(active_tab: "tab1") do |tabs| %>
    <% tabs.with_tab(tab_id: "tab1", title: "Tab 1") %>
    <% tabs.with_tab(tab_id: "tab2", title: "Tab 2") %>
    <% tabs.with_tab(tab_id: "tab3", title: "Tab 3") %>
    <% tabs.with_tab(tab_id: "tab4", title: "Tab 4", icon: "save") %>
    <% tabs.with_tab(tab_id: "tab5", title: "Tab 5", icon: "edit") %>
    <% tabs.with_tab(tab_id: "tab6", title: "Tab 6", icon: "delete") %>
<% end %>
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliView/tree/master/docs/component-tabs.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/01/27</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

