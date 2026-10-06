# Activities

`LesliView::Items::Activities` queries a resource's activity association and renders the result through the shared timeline.

```erb
<%= render LesliView::Items::Activities.new(
    @ticket,
    icons: { create: "add_circle", update: "edit" }
) %>
```

The resource must expose an Active Record `activities` association with `id`, `description`, `activity_code`, and `created_at`. The component selects the description as the timeline operation, maps the activity code to an icon, formats creation time through the framework date helper, orders newest first, and converts the result to hashes.

This component is intended for Lesli records using the standard activity schema. For already prepared hashes, render [Timeline](/gems/view/components/timeline) directly.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/items/activities.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

