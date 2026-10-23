<div align="center">
    <h1 align="center">
        <img width="100" alt="LesliDate" src="/images/gems/date/date-logo.svg" />
    </h1>
    <h3 align="center">Consistent date and time formatting for the Lesli Framework.</h3>
</div>

<br />

<div align="center">
    <a target="_blank" href="https://github.com/LesliTech/LesliDate/actions/workflows/lesli-ci-gem.yml">
        <img alt="LesliDate test status" src="https://img.shields.io/github/actions/workflow/status/LesliTech/LesliDate/lesli-ci-gem.yml?branch=main&style=for-the-badge&logo=github&label=tests">
    </a>
    <a target="_blank" href="https://rubygems.org/gems/lesli_date">
        <img alt="Gem Version" src="https://img.shields.io/gem/v/lesli_date?style=for-the-badge&logo=ruby">
    </a>
    <a target="_blank" href="https://codecov.io/github/LesliTech/LesliDate">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/LesliTech/LesliDate?style=for-the-badge&logo=codecov">
    </a>
    <a target="_blank" href="https://sonarcloud.io/project/overview?id=LesliTech_LesliDate">
        <img alt="Sonar Quality Gate" src="https://img.shields.io/sonar/quality_gate/LesliTech_LesliDate?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge&logo=sonarqubecloud&label=Quality">
    </a>
</div>

<br />

---

<br />

## Introduction

LesliDate provides date and time formatting utilities for applications built with the [Lesli Framework](https://github.com/LesliTech/Lesli).

It applies the host application's Lesli date, time-zone, and format configuration while providing compatible SQL expressions for SQLite and PostgreSQL.

<br />

## Features

- Date, time, and date-time formatting
- Human-readable date and time formats
- Time-zone-aware parsing and output
- ISO 8601 and custom input formats
- SQLite- and PostgreSQL-compatible date expressions
- Database-safe current timestamp helpers

<br />

## Installation

Requires Ruby 3.3 or later, ActiveSupport and ActiveRecord 8.0.x or 8.1.x,
and I18n `>= 1.6`, `< 2`. The host application supplies `Lesli.config.datetime`
and its database driver. LesliDate ships no locale data.

Add LesliDate to the application:

```shell
bundle add lesli_date
```

<br />

## Usage

### Format dates and times

Create a formatter from a `Date`, `DateTime`, `Time`, `TimeWithZone`, supported ISO-style string, or explicitly formatted date string:

```ruby
datetime = LesliDate::Formatter.new(Time.current)

datetime.date.to_s
datetime.time.to_s
datetime.date_time.to_s
datetime.date_words.to_s
datetime.date_time_words.to_s
```

Pass the input format when parsing a custom string:

```ruby
LesliDate::Formatter
  .new("2026/07/19 14:30", "%Y/%m/%d %H:%M")
  .date_time
  .to_s
```

Calendar inputs retain their day and return a `Date` from `get`. Instants return
an `ActiveSupport::TimeWithZone`. Time selectors require an instant.

```ruby
LesliDate::Formatter.new("2026-10-22").date.to_s

LesliDate::Formatter.new(
  "2026-10-22 14:30",
  input_zone: "America/Guatemala",
  zone: "UTC"
).date_time.to_s
```

Offset-free date-time strings default to UTC input. Explicit offsets determine
the instant. Parsing delegates to Ruby's `DateTime.parse` and `DateTime.strptime`,
with Rails handling zone conversion. Invalid values or native parsing failures
raise `LesliDate::ParseError`, a subclass of `ArgumentError`.
See [Parsing rules](https://www.lesli.dev/gems/date/api/parsing) for details.

### Formats and language

All selectors use their matching pattern in `Lesli.config.datetime[:formats]`,
with defaults for omitted or `nil` values. Output configuration is checked when
the formatter is constructed.

`to_s` uses the translations already loaded by Rails through `I18n.localize`.
It follows the current `I18n.locale`, or an explicit locale for one formatter:

```ruby
LesliDate::Formatter.new(value, locale: :es).date_words.to_s
```

LesliDate ships no translations. Add overrides in Lesli only when customization
is desired. See [Configuration](https://www.lesli.dev/gems/date/about/configuration)
for the initializer settings, defaults and native Rails localization.

### Database compatibility

Generate adapter-compatible SQL for timestamp columns:

```ruby
formatter = LesliDate::Formatter.new.date_time

formatter.db_timestamps
formatter.db_column("published_at", "articles")
LesliDate::Compatibility.db_now
```

Both adapters expose `created_at_string` and `updated_at_string`. Use
`db_column(:created_at, as: false)` when grouping by an expression. Native SQL
formats and zone support differ between adapters; see
[Database expressions](https://www.lesli.dev/gems/date/api/database) for the
supported patterns, SQLite fixed-offset limits, and PostgreSQL zone conversion.

See [application examples](docs/api/examples.md) for form fields, API timestamps,
CSV imports and SQL selections, and [migration notes](docs/about/migration.md)
for changes to `.get`, zones, exceptions and aliases. Selectors still mutate
the same formatter and return `self`; input values and configuration are not
modified.

<br />

## Development

Clone the repository and install its dependencies:

```shell
git clone https://github.com/LesliTech/LesliDate.git
cd LesliDate
bundle install
```

To use local source from a Lesli development workspace, reference it from the host application's `Gemfile`:

```ruby
gem "lesli_date", path: "gems/LesliDate"
```

### Tests

Run the default test task from the LesliDate directory:

```shell
bundle exec rake
```

The suite uses LesliTesting's standalone gem profile, Minitest, controlled Lesli
configuration, a fixed clock, and real SQL queries. SQLite runs in memory by
default. To execute the same suite on PostgreSQL, provide a test database URL:

```shell
COVERAGE=true bundle exec rake test
LESLI_DATE_DATABASE_URL=postgresql://localhost/lesli_date_test bundle exec rake test
```

PostgreSQL tests create and clean up an isolated schema. All regressions execute
as ordinary tests, including each adapter's native formatting behavior.

CI uses the LesliActions gem workflow for SQLite coverage and packaging, plus
Rails 8.0/8.1 jobs that execute queries in SQLite and PostgreSQL 17.
See [Development and tests](https://www.lesli.dev/gems/date/about/development)
for setup and reproducible ordering.

<br />

## Documentation

- [Lesli website](https://www.lesli.dev/)
- [Documentation](https://www.lesli.dev/gems/date/)
- [Installation](https://www.lesli.dev/gems/date/about/installation)
- [Configuration](https://www.lesli.dev/gems/date/about/configuration)
- [Formatter API](https://www.lesli.dev/gems/date/api/formatter)
- [Parsing rules](https://www.lesli.dev/gems/date/api/parsing)
- [Database expressions](https://www.lesli.dev/gems/date/api/database)
- [Application examples](docs/api/examples.md)
- [Migration notes](docs/about/migration.md)
- [Changelog](CHANGELOG.md)
- [Release notes](https://github.com/LesliTech/LesliDate/releases)
- [Issue tracker](https://github.com/LesliTech/LesliDate/issues)
- [Source code](https://github.com/LesliTech/LesliDate)

<br />

## Community

- [X: @LesliTech](https://x.com/LesliTech)
- [hello@lesli.tech](mailto:hello@lesli.tech)
- [https://www.lesli.tech](https://www.lesli.tech)

<br />

## License

Copyright (c) 2026, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

The complete license text is available in the [license file](./license).

---

<br />
<br />

<div align="center">
    <img width="80" alt="Lesli icon" src="https://cdn.lesli.tech/lesli/brand/app-icon.svg" />
    <h3 align="center">The Open-Source SaaS Development Framework for Ruby on Rails.</h3>
</div>

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/readme.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

