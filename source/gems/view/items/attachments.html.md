# Attachments

`LesliView::Items::Attachments` renders a multipart upload form and the files attached to a resource that includes `Lesli::Items::Attachments`.

```erb
<%= render LesliView::Items::Attachments.new(@ticket) %>
```

The component derives its attachment class, form scope, and item routes from the resource. The default form posts `file` and an optional `label` to the engine's `items_attachments_path`. Downloads and removals use the polymorphic attachment path.

`path_to_create:` and `path_to_update:` remain available when an engine needs custom routes. `path_to_update:` accepts a callable that receives each attachment.

Files are uploaded through the Rails application in this first implementation. Storage is delegated to Active Storage and therefore follows the service selected by the host application.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/items/attachments.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/21</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

