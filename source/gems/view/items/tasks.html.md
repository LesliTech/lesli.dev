# Tasks

`LesliView::Items::Tasks` renders a create form and checklist for a taskable resource.

```erb
<%= render LesliView::Items::Tasks.new(@ticket) %>
```

The resource must expose `id`, `tasks`, and a namespaced `Items::Task` model. The component derives the form scope from that model and posts to the polymorphic `items_tasks_path` route with `taskable_type` and `taskable_id`.

Each task must expose `id`, `title`, `done`, and `done?` and must be routable through `polymorphic_path(task)` for the PATCH action. Completed tasks render as disabled and cannot be toggled again through this component.

Use `LesliView::Items::Task.new(task, scope_key)` only when rendering an individual list item; the collection component supplies the required form scope automatically.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/items/tasks.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

