# Engine specification

`LesliView::Partials::EngineSpec` renders compact metadata for an installed Lesli engine.

```erb
<%= render LesliView::Partials::EngineSpec.new(
    name: "LesliSupport",
    summary: "Customer support workflows",
    version: "1.4.0",
    build: "1791168000",
    metadata: {
        "documentation_uri" => "https://www.lesli.dev/engines/support/"
    }
) %>
```

The engine value must support symbol access for `name`, `summary`, `version`, `build`, and `metadata`, plus `dig` for the documentation URL. `build` is interpreted as a Unix timestamp and formatted with LesliDate. The documentation entry becomes an external link when `metadata["documentation_uri"]` is present.

This partial uses the legacy engine-status presentation and assumes LesliDate and the shared icon styles are loaded.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/partials/engine_spec.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

