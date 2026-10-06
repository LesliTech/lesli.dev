# Form inputs

LesliView overrides common Rails builder methods to add the classes required by the shared form styles:

```erb
<%= form.label :name %>
<%= form.text_field :name %>
<%= form.email_field :email %>
<%= form.password_field :password %>
<%= form.check_box :active %>
<%= form.select :status, statuses %>
<%= form.submit "Save" %>
```

Existing `class:` values are merged with the Lesli class. The password helper retains the bound object's current value unless the caller explicitly supplies `value:`; consider the security implications before using it for credential forms.

`text_editor(method)` renders a hidden input with a Trix toolbar and editor. New forms should normally use `field_control_textarea`, which integrates the Lexxy rich-text helper used by the current component stack.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliView/tree/master/docs/forms/inputs.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

