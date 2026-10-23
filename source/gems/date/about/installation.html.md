# Installation

LesliDate provides time-zone-aware display formatting and database date expressions for Lesli Rails applications.

Add the gem to the application:

```shell
bundle add lesli_date
```

## Requirements

| Requirement | Supported versions / setup |
| --- | --- |
| Ruby | 3.3 or later |
| ActiveSupport and ActiveRecord | 8.0.x or 8.1.x; Rails keeps their versions aligned |
| I18n | `>= 1.6`, `< 2`; use the locale data already loaded by Rails |
| Host configuration | `Lesli.config.datetime`, including a valid output `time_zone` |
| SQL helpers | An established ActiveRecord connection; SQLite or PostgreSQL |

The gem declares ActiveSupport, ActiveRecord and I18n as runtime dependencies.
The application supplies its database driver (`sqlite3` or `pg`). LesliTesting,
Rake and test database drivers are development dependencies, not requirements
installed by this gem. CI tests Ruby 3.3.5, both supported Rails lines,
SQLite, and PostgreSQL 17. See [Development](/gems/date/about/development).

## Configuration

LesliDate reads `Lesli.config.datetime`, so load and configure Lesli before constructing a formatter. A standard Lesli application already provides this configuration.

All display formats come from `datetime[:formats]`, with defaults for missing
values. Presentation uses the translations already loaded by Rails/I18n; no
LesliDate locale files are required. See [Configuration](/gems/date/about/configuration)
for output patterns and optional customization in Lesli.

Verify the installation in a Rails console:

```ruby
LesliDate::Formatter.new(Time.current).date_time.to_s
```

The formatter accepts `Date`, `DateTime`, `Time`, `TimeWithZone`, supported
ISO-style strings, and strings accompanied by an explicit input format. It
returns itself from its format selectors. `get` returns a `Date` for calendar
inputs and a `TimeWithZone` for instants. See [Parsing rules](/gems/date/api/parsing)
for input and presentation zones, supported syntax, and validation errors.

LesliDate currently generates adapter-specific database expressions for SQLite and PostgreSQL. See [Database expressions](/gems/date/api/database) before using those helpers with another adapter.

For behavior changes, see [Migration notes](/gems/date/about/migration).

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

