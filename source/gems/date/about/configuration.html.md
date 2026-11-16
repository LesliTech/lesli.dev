# Configuration and presentation

LesliDate reads `Lesli.config.datetime` from the Lesli initializer. Database
timestamps are interpreted as UTC; the active Rails timezone controls presentation. The fluent
API stays the same:

```ruby
LesliDate::Formatter.new(value).date.to_s
LesliDate::Formatter.new(value).time.to_s
LesliDate::Formatter.new(value).date_time.to_s
LesliDate::Formatter.new(value).date_words.to_s
```

## Initializer formats

Each selector reads the same-named symbol key from `datetime[:formats]`. These
are the patterns supplied by the Lesli initializer:

```ruby
config.datetime = {
  time_zone: "America/Guatemala",
  start_week_on: "monday",
  formats: {
    date: "%d/%m/%Y",
    time: "%H:%M",
    date_time: "%d/%m/%Y %H:%M",
    date_words: "%A, %B %d, %Y",
    date_time_words: "%A, %B %d, %Y, %H:%M",
    date_time_words_pm: "%A, %B %d, %Y, %I:%M %p",
    date_time_words_day: "%A, %B %d, %Y, %H:%M"
  }
}
```

`date_words_day` is also configurable. When omitted, it uses its fallback.
`start_week_on` remains part of Lesli's configuration and does not change how
this formatter parses or presents a value.

## Missing settings and validation

The entire `formats` hash is optional: absent, `nil`, or empty hashes use the
fallback patterns listed in the [Formatter API](/gems/date/api/formatter).
Partial hashes override only the supplied keys, and individual `nil` values
also use the fallback. Defaults are merged without modifying the initializer.
Existing formatters retain their patterns if configuration changes later.

Output patterns must be nonempty strings. Empty or whitespace-only strings,
invalid text encoding, and other value types raise `LesliDate::InvalidFormat`
when constructing the formatter. A non-hash `formats` value also raises this
error. Every configured pattern is checked, even if its selector is not used.

Syntax checks delegate to Ruby's `strftime`; there is no directive allowlist or
custom pattern compiler. Directives that Ruby preserves as literal text retain
that behavior. Native formatting exceptions are exposed as `InvalidFormat`.

## Profile timezone

Output zone precedence is:

1. An explicit `zone:` argument.
2. The active Rails `Time.zone`.
3. `Lesli.config.datetime[:time_zone]` when no Rails zone is active.

Core's `ApplicationLesliController` applies the authenticated user's profile zone
with `Time.use_zone` for each request, including services and views. If the profile
has no zone, Core uses the Lesli initializer, then the Rails application timezone.
Login and browser detection do not set the timezone. LesliDate reads the active
Rails zone without accessing the user or HTTP session directly.

```ruby
Time.use_zone("Europe/Berlin") do
    LesliDate::Formatter.new("2027-01-15 15:00:00").date_time.to_s
    # => "15/01/2027 16:00", with the initializer above
end
```

`Date2` inherits the same behavior. Existing formatter instances retain the zone
selected at construction. Outside requests, jobs and console calls use their
active `Time.zone`; pass `zone:` when a specific output zone is required.
This changes the previous behavior where the global Lesli setting took precedence
over the active Rails zone.

`input_zone:` still defaults to UTC for strings without an offset. Zone names
are validated during construction; unknown zones or no available output zone
raise `LesliDate::InvalidTimeZone`. Database storage remains UTC.

## Jobs and emails

Jobs and mailers do not run inside Core's HTTP controller callback. Always apply
the recipient's `effective_time_zone` where dates are formatted. Active Job may
carry the enqueueing context's timezone, but that can belong to a different user.
Do not rely on it for recipient-specific output.

```ruby
class ExportJob < ApplicationJob
    def perform(user_id)
        user = Lesli::User.find(user_id)

        Time.use_zone(user.effective_time_zone) do
            # Build the export here so services and Date2 use the recipient's zone.
            ExportService.new(user).create
        end
    end
end
```

For emails, wrap the mailer action so template rendering uses the recipient's
zone, including when delivery is queued:

```ruby
class ReminderMailer < ApplicationMailer
    around_action :use_recipient_timezone

    def reminder
        @event = params[:event]
        mail(to: params[:recipient].email, subject: "Event reminder")
    end

    private

    def use_recipient_timezone(&action)
        Time.use_zone(params[:recipient].effective_time_zone, &action)
    end
end

ReminderMailer.with(recipient: user, event: event).reminder.deliver_later
```

These are application examples, not additional framework classes. For multiple
recipients, format each recipient's content in their own zone. `Time.use_zone`
restores the previous zone even if the operation raises an exception. It does
not alter stored timestamps. Construct formatters inside the block; an existing
formatter retains the zone it was created with.

## Native Rails translations

`to_s` calls `I18n.localize` with the configured pattern. It uses the backend,
locale data, fallbacks and customizations already configured by the Rails
application. LesliDate does not register locales, ship translations, change the
backend or alter `I18n.locale`.

By default, each call to `to_s` uses the current `I18n.locale`. Set `locale:` to
choose a language for one formatter:

```ruby
I18n.with_locale(:es) do
  LesliDate::Formatter.new("2026-10-22").date_words.to_s
  # => "jueves, octubre 22, 2026", with the initializer above
end

LesliDate::Formatter.new("2026-10-22", locale: :en).date_words.to_s
# => "Thursday, October 22, 2026"
```

The pattern controls order and punctuation; I18n supplies words for directives
such as `%A`, `%a`, `%B`, `%b`, `%p` and `%P`. Ruby/Rails also determine casing,
so `%p` uses uppercase AM/PM text. The input parser is unchanged and does not
use this output locale to interpret strings.

Use the translations Rails already loads, including the application's existing
Rails locale-data dependencies. Only add keys in Lesli or the host application's
locale files when customization is desired. For example, an optional override
file can contain just:

```yaml
es:
  time:
    am: "a. m."
    pm: "p. m."
```

All other translations remain with the existing I18n backend. Missing locales
or translations follow Rails/I18n's configured behavior; LesliDate does not add
a separate fallback language or translation-loading mechanism.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/about/configuration.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/16</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

