# Password reset email

The password reset email identifies the recipient and links to the password recovery flow.

Source: `source/mails/devise/reset_password_instructions.mjml`

Generated view: `app/views/lesli_assets/emails/devise/reset_password_instructions.html.erb`

## Required data

| Value | Purpose |
| --- | --- |
| `@params[:full_name]` | Recipient name used in the greeting |
| `@params[:url]` | Password-reset URL used by the primary action |

The current message tells the user that the link remains valid for three hours. Keep that copy synchronized with the actual reset-token lifetime configured by the application.

After editing the MJML source or a shared email fragment, run `make build.mails` and verify the generated result with a Rails mailer preview.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/emails/reset-password.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/14</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

