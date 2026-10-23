# Configuration and presentation

LesliDate reads `Lesli.config.datetime` from the Lesli initializer. Database
timestamps are interpreted as UTC; `time_zone` controls presentation. The fluent
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

A valid output zone is required in the initializer unless supplied through
`zone:`. `input_zone:` defaults to UTC and can be used for external local-time
sources. Both zone names are validated during construction. Missing or unknown
zones raise `LesliDate::InvalidTimeZone` rather than using the process timezone.

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
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

