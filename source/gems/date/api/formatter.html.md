# Formatter

`LesliDate::Formatter` parses a date-time value, converts it to the time zone in `Lesli.config.datetime[:time_zone]`, and exposes a set of display formats.

## Create a formatter

```ruby
formatter = LesliDate::Formatter.new(Time.current)
```

The constructor accepts a value and an optional input format:

```ruby
LesliDate::Formatter.new("2026/10/05 14:30", "%Y/%m/%d %H:%M")
```

When omitted, the value defaults to `Time.current` and the parser format defaults to `%Y-%m-%d %H:%M:%S`. ISO 8601 strings such as `2026-10-05T14:30:00+00:00` are detected automatically.

## Select an output format

| Method | Default or configured output |
| --- | --- |
| `date` | `Lesli.config.datetime[:formats][:date]`, falling back to `%d.%m.%Y` |
| `time` | `%H:%M` |
| `date_time` | Configured date-time format, falling back to `%d.%m.%Y %H:%M` |
| `date_words` | `%B %d, %Y` |
| `date_words_day` | `%A, %B %d, %Y` |
| `date_time_words` | `%B %d, %Y, %H:%M` |
| `date_time_words_pm` | `%B %d, %Y, %I:%M %p` |
| `date_time_words_day` | `%A, %B %d, %Y, %H:%M` |

Each selector returns the formatter:

```ruby
formatter.date_time_words.to_s
```

`to_s` returns the formatted string. `get` returns the underlying `ActiveSupport::TimeWithZone` value.

Invalid strings raise the parsing error produced by `DateTime.strptime` or `DateTime.iso8601`; validate user input before passing it to the formatter.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/formatter.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

