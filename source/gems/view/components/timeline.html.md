# Timeline

`LesliView::Components::Timeline` renders already-presented activity hashes. Prefer `LesliView::Items::Activities` when starting from Active Record activity records.

```erb
<%= render LesliView::Components::Timeline.new(
    activities: [
        {
            "actor" => "Ada Lovelace",
            "date" => "2026-10-05 · 14:30",
            "description" => "Ticket Cannot sign in was created.",
            "icon" => "ticket_created",
            "operation" => "Ticket created"
        }
    ],
    icons: { ticket_created: "add_circle" },
    empty_text: "No ticket activity has been recorded yet."
) %>
```

Each activity should provide string keys for `date`, `operation`, `actor`, and optional `description` and `icon`. The value of `icon` is an event code; `icons:` maps that code to a Material Symbol dynamically. Unmapped events use `radio_button_checked`. When the collection is empty, the component renders the shared empty-state element with `empty_text`.

The actor is displayed as secondary metadata below the date so the event and description remain the visual focus.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/components/timeline.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/21</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

