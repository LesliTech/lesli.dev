# Database expressions

LesliDate generates SQL for UTC timestamps stored by Rails: ISO date-time text
in SQLite and `timestamp without time zone` columns in PostgreSQL. These helpers
format instants, not calendar-only `date` columns or PostgreSQL `timestamptz`.
Use `.to_s` for calendar dates and localized presentation.

## One column

```ruby
formatter = LesliDate::Formatter.new.date_time
sql = formatter.db_column("published_at", "articles", as: "published_at_display")
Article.select("articles.*", sql)
```

`db_column(column, table = "", as: nil)` keeps the positional column and table
arguments. Strings and symbols are accepted. The default alias is
`<column>_string`; `as:` customizes it. Arguments are never modified, including
frozen strings. ActiveRecord quotes identifiers and SQL literals. Column and
alias arguments are identifiers, not expressions; table names follow the
adapter's native naming conventions, including PostgreSQL `schema.table`.
Generating these SQL fragments does not execute database queries.

For grouping, omit the alias explicitly instead of editing the SQL string:

```ruby
group = LesliDate::Formatter.new.date.db_column(:created_at, as: false)
Article.group(Arel.sql(group)).order(Arel.sql("MIN(created_at) ASC")).count
```

`as: false` is the only additional option. Existing calls keep their aliases.

## Timestamp columns and aliases

```ruby
sql = LesliDate::Formatter.new.date_time.db_timestamps("articles")
Article.select("articles.*", sql)
```

Both adapters return `created_at_string` and `updated_at_string`, matching the
aliases used by Lesli consumers. SQLite now includes `updated_at` as well.
The previous PostgreSQL aliases `created_at_date` and `updated_at_date` are
replaced directly; no legacy mode is retained. Consumers needing another name
can use `db_column(:created_at, as: "created_at_date")` explicitly. SQL `NULL`
values remain `nil`.

## Supported formats

The selected pattern comes from `Lesli.config.datetime[:formats]`, just as it
does for `.to_s`, but SQL uses each database's formatting capabilities:

| Adapter | Supported patterns |
| --- | --- |
| SQLite | Native `strftime` patterns supported by the connected SQLite version. Unsupported directives return SQL `NULL` (`nil`) when the query executes, following SQLite's native behavior. `%Y`, `%m`, `%d`, `%H`, `%M`, `%S`, and `%%` cover the common numeric formats. Month/day names such as `%B` and `%A` are unavailable. |
| PostgreSQL | `%Y`, `%y`, `%m`, `%d`, `%B`, `%b`, `%A`, `%a`, `%j`, `%F`, `%H`, `%I`, `%p`, `%P`, `%M`, `%S`, `%R`, `%T`, and `%%`. Other directives, flags, and widths raise `InvalidFormat`. Literal text is preserved. |

PostgreSQL names and AM/PM indicators use native English formatting, without
padding month/day names. SQL does not use Rails translations or `locale:`.
For translated words, format the value in Ruby with `.to_s`, which continues to
use the host's existing I18n translations. SQLite-specific directives can differ
from Ruby; use the common numeric directives when matching Ruby output matters.

See the native [SQLite strftime documentation](https://www.sqlite.org/lang_datefunc.html)
and [PostgreSQL formatting documentation](https://www.postgresql.org/docs/current/functions-formatting.html).

## Supported output zones

| Adapter | Zone behavior |
| --- | --- |
| PostgreSQL | Converts each stored UTC timestamp with the configured IANA zone, including historical offsets and daylight saving. Rails names such as `Eastern Time (US & Canada)` are converted to their IANA identifiers. The session time zone does not change the result. |
| SQLite | Uses the configured zone's current permanent offset, including fractional hours, as a fixed offset for every row. UTC, present-day Guatemala, Kolkata and Kathmandu are examples. A zone whose current TZInfo period has an upcoming transition raises `InvalidTimeZone`; New York is an example. |

SQLite cannot apply historical IANA rules. Its fixed-offset mode is intended for
records within the zone's current permanent-offset period. Earlier records,
such as Guatemala during its former daylight-saving years, require Ruby
presentation or PostgreSQL. A named zone accepted today could be rejected after
a tzdata update introduces a future transition. Prefer UTC for unrestricted
historical SQLite data. The formatter's input value does not select an offset
for individual database rows.

## Current database time

```ruby
LesliDate::Compatibility.db_now
```

Returns `CURRENT_TIMESTAMP` for SQLite and `NOW()` otherwise, preserving the
original two-line helper. Both are executed by the database and do not depend
on Ruby's clock. Column formatting supports only SQLite and PostgreSQL.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

