# Formatter

`LesliDate::Formatter` interprets calendar dates and instants and exposes a set of display formats. Calendar dates retain their day; instants are converted to the presentation time zone.

## Create a formatter

```ruby
formatter = LesliDate::Formatter.new(Time.current)
```

The constructor accepts a value, an optional positional input format, zone options, and an optional output locale:

```ruby
LesliDate::Formatter.new("2026/10/05 14:30", "%Y/%m/%d %H:%M")
```

| Argument | Default | Purpose |
| --- | --- | --- |
| `datetime` | `Time.current` | Date or instant to interpret; explicit `nil` is invalid |
| `format` | `nil` | Native Ruby `strptime` pattern; otherwise use `DateTime.parse` |
| `input_zone:` | `"UTC"` | Interpret date-time strings that have no offset |
| `zone:` | `nil` | Presentation zone; `nil` reads `Lesli.config.datetime[:time_zone]` |
| `locale:` | `nil` | Output language; `nil` uses `I18n.locale` when rendering |

Lesli's database timestamps are UTC. The configured zone controls output;
normal Lesli calls need no zone keywords. `input_zone:` is available for
external sources that provide local times instead of UTC.

Accepted objects are `Date`, `DateTime`, `Time`, and `ActiveSupport::TimeWithZone`.
Strings are interpreted with Ruby's `DateTime.parse` or, when a pattern is
provided, `DateTime.strptime`. Accepted syntax and directives follow Ruby rather
than a separate LesliDate format language. See [Parsing rules](/gems/date/api/parsing)
for timezone behavior and errors.

```ruby
LesliDate::Formatter.new(
  "2026-10-22 14:30",
  input_zone: "America/Guatemala",
  zone: "UTC"
).date_time.to_s
# => "22.10.2026 20:30", with output format %d.%m.%Y %H:%M

LesliDate::Formatter.new("2026-10-22").get
# => Date.new(2026, 10, 22)
```

## Select an output format

Every selector uses its matching key in `Lesli.config.datetime[:formats]`.
Missing or `nil` values use these fallback patterns:

| Method | Fallback pattern |
| --- | --- |
| `date` | `%d.%m.%Y` |
| `time` | `%H:%M` |
| `date_time` | `%d.%m.%Y %H:%M` |
| `date_words` | `%B %d, %Y` |
| `date_words_day` | `%A, %B %d, %Y` |
| `date_time_words` | `%B %d, %Y, %H:%M` |
| `date_time_words_pm` | `%B %d, %Y, %I:%M %p` |
| `date_time_words_day` | `%A, %B %d, %Y, %H:%M` |

Each selector returns the formatter:

```ruby
formatter.date_time_words.to_s
```

Selectors change the output format of the same instance. They do not parse the
input again or replace `.get`. Input strings, temporal values and the host's
configuration are not modified. Patterns are copied at construction, so later
configuration edits do not change an existing formatter. `.get` exposes the
underlying parsed value without cloning it. Use a separate formatter for
independent selector state.

`to_s` uses `I18n.localize` with the selected pattern. Days, months and AM/PM use
the translations already loaded by Rails. LesliDate does not install or replace
translation data. The initializer determines the pattern and the current Rails
locale determines its translated words:

```ruby
I18n.with_locale(:es) do
  LesliDate::Formatter.new("2026-10-22").date_words.to_s
end

LesliDate::Formatter.new("2026-10-22", locale: :es).date_words.to_s
```

`get` returns a `Date` for calendar inputs
and an `ActiveSupport::TimeWithZone` for instants. Selecting `.date` on an instant
does not discard its underlying time or fractional seconds.

Calendar dates support `date`, `date_words`, and `date_words_day`. Selecting
`time` or any `date_time*` format raises `LesliDate::InvalidFormat` without
changing the previous output format.

Invalid values and native parsing failures raise `LesliDate::ParseError`;
invalid zone options raise `LesliDate::InvalidTimeZone`. `InvalidFormat` is used
for invalid output configuration and time selectors applied to calendar dates. All inherit from
`LesliDate::Error < ArgumentError`.

See [Configuration](/gems/date/about/configuration) for defaults, validation,
locales and optional translation overrides in Lesli.
See [Application examples](/gems/date/api/examples) for forms, APIs and imports.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/formatter.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

