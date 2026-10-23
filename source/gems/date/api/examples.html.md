# Application examples

These examples assume a Lesli application with this presentation configuration:

```ruby
config.datetime = {
  time_zone: "America/Guatemala",
  formats: { date: "%d/%m/%Y", date_time: "%d/%m/%Y %H:%M" }
}
```

`Date2` can replace `LesliDate::Formatter` in applications that provide the usual
`class Date2 < LesliDate::Formatter` subclass.

## Date fields in forms

An HTML date field submits `YYYY-MM-DD`. Keep the resulting calendar date when
assigning a Rails `date` attribute:

```ruby
# params[:birthday] == "2026-10-22"
person.birthday = LesliDate::Formatter.new(params[:birthday], "%Y-%m-%d").get
# => Date.new(2026, 10, 22)
```

Use ISO output for the HTML field and the configured format for display:

```ruby
LesliDate::Formatter.new(person.birthday).get.iso8601 # => "2026-10-22"
LesliDate::Formatter.new(person.birthday).date.to_s   # => "22/10/2026"
```

A `datetime-local` field has no offset. Specify its input zone when it represents
local time, then persist the instant in UTC:

```ruby
# params[:starts_at] == "2026-10-22T08:30"
event.starts_at = LesliDate::Formatter.new(
  params[:starts_at], "%Y-%m-%dT%H:%M", input_zone: "America/Guatemala"
).get.utc
# => 2026-10-22 14:30:00 UTC
```

Handle `LesliDate::ParseError` in the application's validation flow. Native Ruby
parsing determines accepted input; an explicit format does not add strict
whole-string validation. See [Parsing rules](/gems/date/api/parsing).

## API timestamps

For an API timestamp with an explicit offset, retain the instant. Use ISO 8601
for the machine value and the configured presentation format for display:

```ruby
formatter = LesliDate::Formatter.new("2026-10-22T14:30:45.123Z")

render json: {
  started_at: formatter.get.utc.iso8601(3),
  started_at_display: formatter.date_time.to_s
}
# { "started_at": "2026-10-22T14:30:45.123Z",
#   "started_at_display": "22/10/2026 08:30" }
```

For a calendar-date API field, use `.get.iso8601` to emit `YYYY-MM-DD`.
`locale:` controls display words only; it does not change input parsing or ISO
serialization. Missing or invalid inputs raise `ParseError`; the API controller
chooses the response status and error representation.

## Importing local timestamps

For a CSV that supplies local Guatemala times in `DD/MM/YYYY HH:MM`, declare
both the input pattern and its zone:

```ruby
require "csv"

CSV.foreach("events.csv", headers: true) do |row|
  timestamp = LesliDate::Formatter.new(
    row.fetch("occurred_at"), "%d/%m/%Y %H:%M", input_zone: "America/Guatemala"
  ).get

  Event.create!(occurred_at: timestamp.utc)
end
```

If the source already supplies UTC times, omit `input_zone:`. Explicit offsets
in the data take precedence over that option. Rescue `ParseError` per row if the
import should collect failures and continue; no fallback pattern is tried.

## Database presentation

Select display strings alongside the original UTC timestamps:

```ruby
formatter = LesliDate::Formatter.new.date_time
events = Event.select("events.*", formatter.db_timestamps("events"))

events.first.created_at_string # => "22/10/2026 08:30", for 14:30 UTC
events.first.updated_at_string
```

Select one column with an explicit alias:

```ruby
Event.select(:id, formatter.db_column(:occurred_at, "events", as: "occurred_at_display"))
```

The helpers generate SQL without executing a query or modifying their arguments.
Both adapters use `*_string` aliases. SQL output does not use Rails translations;
use `.to_s` for localized words. SQLite supports fixed offsets and its native
`strftime` directives; unsupported directives return `NULL`. PostgreSQL handles
IANA zones per row. See [Database expressions](/gems/date/api/database) for the
supported column types, directives and zone limits.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/examples.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

