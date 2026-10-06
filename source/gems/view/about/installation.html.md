# Installation

LesliView packages ViewComponent classes, Rails form builders, layouts, charts, widgets, and domain-oriented views for the Lesli presentation layer.

## Standard Lesli applications

Lesli installs LesliView and LesliAssets automatically. Verify the registered gems from the host application:

```shell
bin/rails lesli:status
```

## Other Rails applications

Add the component and asset gems:

```shell
bundle add lesli_view
bundle add lesli_assets
```

LesliView depends on ViewComponent and Lexxy at runtime. The host application must also load the styles, Material Symbols, JavaScript, and other frontend resources distributed by LesliAssets. A component can render without those resources, but it will not have its intended presentation or interactive behavior.

Verify the installation in an ERB view:

```erb
<%= render LesliView::Elements::Button.new("Continue", url: root_path) %>
```

Use the fully qualified constants shown in these guides. Most components accept a block through ViewComponent, while components with named slots document those slots explicitly.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

