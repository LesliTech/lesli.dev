# Avatar

`LesliView::Elements::Avatar` renders an image or initials derived from a name.

```erb
<%= render LesliView::Elements::Avatar.new(name: "Ada Lovelace", size: "small") %>
<%= render LesliView::Elements::Avatar.new(image: user.avatar_url, name: user.name) %>
```

`size:` accepts `small`, `medium`, or `large` and defaults to `medium`. Any other size raises `ArgumentError`. Without an image, the first letters of the first two words are displayed. The current image alternative text is generic, so nearby content should identify the represented person when that context matters.

## Component files

```text
lib/lesli_view/elements/
    avatar.rb
    avatar/
        avatar.html.erb
        avatar.css
```

The Ruby API is unchanged. The sidecar stylesheet uses semantic classes and
unprefixed `@apply`, and is imported by `source/tailwind/view.css` into the
existing LesliView stylesheet. Global theme variables remain in LesliAssets.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/elements/avatar.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/18</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

