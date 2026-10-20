# Email templates

LesliAssets provides responsive transactional email templates written in MJML and compiled to Rails ERB views.

## Templates

| Email | MJML source | Generated Rails view |
| --- | --- | --- |
| Welcome | `source/mails/lesli/welcome.mjml` | `app/views/lesli_assets/emails/lesli/welcome.html.erb` |
| Confirmation | `source/mails/devise/confirmation_instructions.mjml` | `app/views/lesli_assets/emails/devise/confirmation_instructions.html.erb` |
| Password reset | `source/mails/devise/reset_password_instructions.mjml` | `app/views/lesli_assets/emails/devise/reset_password_instructions.html.erb` |

Shared MJML fragments for the head, header, footer, logo, and social content live in `source/mails/partials`.

## Shared design

All transactional emails use the same small design system defined in `source/mails/partials/head.mjml`:

| Element | Shared treatment |
| --- | --- |
| Canvas | Neutral 50 background (`#F8FAFC`) and a 600px maximum width |
| Card | White surface, Neutral 200 border, 16px radius, and responsive padding |
| Brand | Lesli wordmark and canonical Lesli Blue (`#276AD6`) |
| Type | System font stack with shared title, greeting, body, note, and footer styles |
| Action | One primary button style with a high-contrast white label |
| Footer | App Store and Google Play badges, social profiles, and compact copyright information |

`header.mjml`, `logo.mjml`, and `footer.mjml` provide the shared frame. The footer composes `appstore.mjml`, `social.mjml`, and `copy.mjml`, so updates to those fragments reach every transactional email. Each template supplies only its preheader, title, message, primary action, and any message-specific artwork or note.

Email styling intentionally uses explicit color values instead of application CSS variables. Most email clients isolate or rewrite styles and cannot resolve the Rails application's runtime theme. Keep the values synchronized with the stable tokens documented in the [Lesli brand palette](/gems/assets/theme/brand).

## Build workflow

Install the locked Node dependencies, then edit the MJML source and compile readable development output with:

```shell
make build.mails
```

Generate minified production output with:

```shell
make prod.mails
```

The HTML ERB files under `app/views/lesli_assets/emails` are generated artifacts. Make lasting changes in the MJML source or shared includes, then rebuild.

The compiler expects the source and destination folders tracked by the repository to exist. Add any new template folder before adding its path to `MJML_FILES`.

## Validation

Run the complete email build validation with:

```shell
make test.mails
```

This command compiles every template in development and production modes. The production build runs last, leaving the committed Rails views in their release format.

The Ruby test suite handles template syntax and renders each generated view with representative user and URL data:

```shell
bundle exec rake test
```

Before a release, also preview the emails at desktop and mobile widths and send them to Gmail, Apple Mail, and Outlook test inboxes. These clients use different rendering engines, so this final compatibility check cannot be replaced by HTML compilation alone.

## Rails integration

Lesli loads these views through the LesliAssets Rails engine and uses `lesli_assets/emails` as the default Action Mailer template path. The host application remains responsible for its sender and public URL:

```ruby
# config/environments/production.rb
config.action_mailer.default_options = {
    from: ENV.fetch("LESLI_MAILER_FROM", "no-reply@lesli.dev")
}

config.action_mailer.default_url_options = {
    host: ENV.fetch("LESLI_HOST"),
    protocol: "https"
}
```

LesliShield uses these settings for confirmation, password-reset, and welcome emails. `LESLI_MAILER_FROM` can override the sender directly. Custom headers supplied by Devise, such as `from`, `reply_to`, `subject`, and `to`, are preserved.

When LesliMailer is installed, Rails exposes deterministic previews that do not require database records:

```text
/rails/mailers/lesli_mailer/devise_mailer/welcome
/rails/mailers/lesli_mailer/devise_mailer/confirmation_instructions
/rails/mailers/lesli_mailer/devise_mailer/reset_password_instructions
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/emails/overview.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/19</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

