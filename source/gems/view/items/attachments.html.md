# Attachments

`LesliView::Items::Attachments` is currently a presentation prototype, not a complete upload component. It renders a file input and example Word, spreadsheet, and PDF entries, but it does not submit the selected file or read attachments from the supplied resource.

```erb
<%= render LesliView::Items::Attachments.new(@ticket) %>
```

The initializer retains `path_to_create:` and `path_to_update:` compatibility arguments, but the current template does not use them. Do not rely on this component for production uploads until it is connected to a form, persisted attachments, validation, and accessible file status. Use the host application's Active Storage flow in the meantime.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/items/attachments.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

