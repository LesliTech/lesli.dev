## Text Components

`Termline::Text` provides lightweight section titles. The public helper writes to the configured output and returns the rendered content; the lower-level builder only returns a string.


## Titles

```ruby
Termline.title "Deployment"
```

Example output in a 40-column terminal:

```text
── Deployment ─────────────────────────
```

The title adapts to the terminal width. Its color, fill character, and width can be changed:

```ruby
Termline.title "Database", color: :green
Termline.title "Summary", character: "=", width: 60
```


## Builder API

For composition without output, use the builder directly:

```ruby
rendered = Termline::Text.title("Deployment", width: 40)
```

Titles remain small formatting helpers and do not introduce a markup parser or component tree.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Termline/tree/master/docs/text.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/19</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

