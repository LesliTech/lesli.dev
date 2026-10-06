# Avatar

`LesliView::Elements::Avatar` renders an image or initials derived from a name.

```erb
<%= render LesliView::Elements::Avatar.new(name: "Ada Lovelace", size: "small") %>
<%= render LesliView::Elements::Avatar.new(image: user.avatar_url, name: user.name) %>
```

`size:` accepts `small`, `medium`, or `large` and defaults to `medium`. Any other size raises `ArgumentError`. Without an image, the first letters of the first two words are displayed. The current image alternative text is generic, so nearby content should identify the represented person when that context matters.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/elements/avatar.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

