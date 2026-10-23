# Parsing rules

LesliDate uses Ruby's date parsers and Rails timezone conversion. It does not
compile input patterns or maintain its own validation rules for every field.

```ruby
LesliDate::Formatter.new(value, format = nil, input_zone: "UTC", zone: nil, locale: nil)
```

## Input values

| Input | Behavior | `.get` result |
| --- | --- | --- |
| No argument | Current instant | `ActiveSupport::TimeWithZone` |
| `Time`, `TimeWithZone`, `DateTime` | Preserve the instant and apply the presentation zone | `ActiveSupport::TimeWithZone` |
| `Date` | Preserve the calendar date | `Date` |
| String without a pattern | Use `DateTime.parse` | `Date` or `ActiveSupport::TimeWithZone` |
| String with a pattern | Use `DateTime.strptime` | `Date` or `ActiveSupport::TimeWithZone` |
| Other types, including explicit `nil` | Reject with `LesliDate::ParseError` | No value |

The native parser's metadata distinguishes a calendar date from an instant.
Calendar dates support `.date`, `.date_words`, and `.date_words_day`. Time
selectors on dates raise `LesliDate::InvalidFormat` instead of inventing an hour.
Selecting `.date` on an instant preserves its full underlying value in `.get`.

## Native input patterns

The second positional argument is a Ruby `strptime` pattern. It supports native
directives, including compound directives, month names, offsets and fractions:

```ruby
LesliDate::Formatter.new("22/10/2026", "%d/%m/%Y").get
# => Date.new(2026, 10, 22)

LesliDate::Formatter.new("22 October 2026", "%d %B %Y").date.to_s
LesliDate::Formatter.new("2026-10-22 14:30:45", "%F %T").date_time.to_s
LesliDate::Formatter.new("2026-10-22T14:30:45.123Z").date_time.to_s
```

When a pattern is supplied, LesliDate calls `strptime` directly and does not
retry with `parse`. An unparseable value or a mismatch raises `ParseError` with
the native exception as its cause.

Accepted syntax, missing-component defaults, precision, calendar conventions,
and tolerance follow Ruby. For example, native parsing may accept partial dates
or a valid prefix with trailing text. LesliDate does not add complete-input
validation, a directive allowlist, year bounds, encoding conversion, or manual
range checks. Patterns apply to string inputs; temporal objects are used directly.

## UTC input and configured output

Lesli stores database timestamps in UTC. The initializer's
`Lesli.config.datetime[:time_zone]` controls presentation. Normal Lesli calls
need no zone options:

```ruby
# With America/Guatemala and output format %d/%m/%Y %H:%M:
LesliDate::Formatter.new("2026-10-22 14:30:00").date_time.to_s
# => "22/10/2026 08:30"
```

For strings containing a time but no offset, `input_zone` defaults to UTC.
Strings with an explicit offset already determine an instant. `zone` overrides
the configured presentation zone for one formatter. Dates do not undergo zone
conversion.

```ruby
# An external source supplies local Guatemala time rather than UTC.
LesliDate::Formatter.new(
  "22/10/2026 14:30",
  "%d/%m/%Y %H:%M",
  input_zone: "America/Guatemala",
  zone: "UTC"
).date_time.to_s
# => "22.10.2026 20:30", with output format %d.%m.%Y %H:%M
```

Zone names use `ActiveSupport::TimeZone`. Local times, including clock-change
gaps and overlaps, follow Rails' native `TimeZone#local` behavior. LesliDate does
not implement a separate daylight-saving validation policy.

## Exceptions

| Error | Meaning |
| --- | --- |
| `LesliDate::ParseError` | Unsupported input type or an exception from native parsing |
| `LesliDate::InvalidTimeZone` | Missing or unknown zone name; an unsupported SQLite output zone when generating SQL |
| `LesliDate::InvalidFormat` | Invalid output configuration, a time selector applied to a calendar date, or an unsupported PostgreSQL SQL-format directive |

All inherit from `LesliDate::Error < ArgumentError`.
I18n locale/translation failures keep their native exception behavior. SQL
execution errors come from ActiveRecord; unsupported SQLite format directives
return native SQL `NULL` rather than a LesliDate exception.

```ruby
begin
  value = LesliDate::Formatter.new(params[:date], "%d/%m/%Y").get
rescue LesliDate::ParseError
  # Present the application's validation message.
end
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/parsing.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

