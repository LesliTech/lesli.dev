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

Load the shared stylesheet before the component stylesheet in the layout's `<head>`:

```erb
<%= stylesheet_link_tag "lesli_assets/application", "data-turbo-track": "reload" %>
<%= stylesheet_link_tag "lesli_view/view", "data-turbo-track": "reload" %>
```

LesliAssets defines the global Lesli palette and the complete Tailwind theme,
including spacing, typography, radii, and animations. LesliView uses `@reference`
to compile utilities without emitting those variables again. The standard Lesli
layout already loads these stylesheets in this order. Public layouts can load
`lesli_assets/public` instead of `lesli_assets/application`; both provide the
complete theme. A custom host must update LesliAssets alongside LesliView when
adopting this centralized theme.

Verify the installation in an ERB view:

```erb
<%= render LesliView::Elements::Button.new("Continue", url: root_path) %>
```

Use the fully qualified constants shown in these guides. Most components accept a block through ViewComponent, while components with named slots document those slots explicitly.

## Prefixed utilities

LesliView uses the `lesliview:` Tailwind prefix. The prefix comes before every variant:

```erb
<div class="lesliview:flex lesliview:flex-col lesliview:gap-3 lesliview:sm:flex-row lesliview:sm:gap-4">
    <%= content %>
</div>
```

The same convention applies to utilities in Ruby helpers, Alpine class bindings,
transition attributes, and `@apply`. Group markers use `lesliview:group` together with
variants such as `lesliview:group-hover:text-sky-700`. Component classes such as
`lesli-button`, modifiers such as `is-primary`, and icon classes keep their names.

The inline aliases in LesliAssets' `source/tailwind/settings/shared-theme.css`
connect these utilities to the global theme. They do not define a second palette
or duplicate runtime values. Both packages continue to compile independently.

### Upgrading

Upgrade and publish templates and compiled CSS together. Code selecting a
LesliView utility class must use the prefixed name; prefer stable component
classes or data attributes for JavaScript selectors. CSS class names containing
colons need escaping when used in a CSS selector.

Engines may keep passing their own classes through `css_class:`, `class_name:`,
or form options. Those classes remain unchanged and must be compiled by the
calling engine. Likewise, content supplied in component blocks belongs to the
caller. Adding `lesliview:` to a caller's class does not make LesliView scan that engine.

Load `lesli_view/view` in public authentication layouts as well. Engines must not
recompile LesliView's component CSS inside their unprefixed Tailwind entrypoints;
load the published component stylesheet instead. The standard Lesli Devise
layout follows this arrangement.

The documentation website continues to use Bulma for its own previews and layout.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

