# Email templates

LesliAssets provides responsive transactional email templates written in MJML and compiled to Rails ERB views.

## Templates

| Email | MJML source | Generated Rails view |
| --- | --- | --- |
| Welcome | `source/mails/lesli/welcome.mjml` | `app/views/lesli_assets/emails/lesli/welcome.html.erb` |
| Confirmation | `source/mails/devise/confirmation_instructions.mjml` | `app/views/lesli_assets/emails/devise/confirmation_instructions.html.erb` |
| Password reset | `source/mails/devise/reset_password_instructions.mjml` | `app/views/lesli_assets/emails/devise/reset_password_instructions.html.erb` |

Shared MJML fragments for the head, header, footer, logo, and social content live in `source/mails/xyz`.

## Build workflow

Edit the MJML source and compile readable development output with:

```shell
make build.mails
```

Generate minified production output with:

```shell
make prod.mails
```

The HTML ERB files under `app/views/lesli_assets/emails` are generated artifacts. Make lasting changes in the MJML source or shared includes, then rebuild.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/emails/overview.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

