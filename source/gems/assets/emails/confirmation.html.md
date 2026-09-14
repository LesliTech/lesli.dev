# Confirmation email

The confirmation email asks a new user to verify their email address.

Source: `source/mails/devise/confirmation_instructions.mjml`

Generated view: `app/views/lesli_assets/emails/devise/confirmation_instructions.html.erb`

## Required data

| Value | Purpose |
| --- | --- |
| `@params[:url]` | Confirmation URL used by the primary action |

The current message tells the user that the link remains valid for three hours. Keep that copy synchronized with the actual confirmation-token lifetime configured by the application.

After editing the MJML source or a shared email fragment, run `make build.mails` and verify the generated result with a Rails mailer preview.

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/tree/master/docs/emails/confirmation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

