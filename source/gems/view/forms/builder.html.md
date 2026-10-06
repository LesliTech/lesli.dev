# Form builders

`LesliView::Forms::Builder` extends Rails `FormBuilder` with consistent controls, messages, icons, buttons, and fieldsets.

```erb
<%= form_with(model: @ticket, builder: LesliView::Forms::Builder) do |form| %>
    <%= form.field_control_text :subject %>
    <%= form.field_control_email :requester_email %>
    <%= form.field_control_textarea :description %>
    <%= form.field_control_submit "Save ticket" %>
<% end %>
```

Use `LesliView::Forms::BuilderHorizontal` when every supported control should use the horizontal layout:

```erb
<%= form_with(model: @ticket, builder: LesliView::Forms::BuilderHorizontal) do |form| %>
    <%= form.field_control :subject %>
<% end %>
```

Semantic categories become `is-*` CSS classes. `alert` and `error` normalize to `danger`; `notice` normalizes to `info`. Caller CSS classes are merged with the required Lesli classes rather than replacing them.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/forms/builder.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

