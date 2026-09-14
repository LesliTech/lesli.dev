# View partials

LesliAssets provides generated ERB partials containing the SVG symbol sprites used by the framework.

| Partial | Symbols provided |
| --- | --- |
| `lesli_assets/partials/application-lesli-icons-engines` | Engine icons |
| `lesli_assets/partials/application-lesli-icons-gems` | Gem and tool icons |
| `lesli_assets/partials/application-lesli-icons-flags` | Locale flags |
| `lesli_assets/partials/application-lesli-icons-social` | Social icons |

Render each required sprite once in a shared layout:

```erb
<div class="hidden" aria-hidden="true">
    <%= render("lesli_assets/partials/application-lesli-icons-gems") %>
</div>
```

The Lesli application layout already includes the engines sprite. A consuming application only needs to render the other groups it uses.

These files are generated from the SVG sources under `app/assets/icons/lesli_assets`. Add or modify icons at the source, then run `make build.icons`; do not hand-edit the generated partials.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/views/partials.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

