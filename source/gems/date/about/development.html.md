# Development and tests

Run commands from the LesliDate gem directory. The suite uses LesliTesting 1.4.2,
Minitest 6, ActiveRecord/ActiveSupport 8.0.x or 8.1.x, SQLite and PostgreSQL.
It runs without a Rails or Lesli application. Ruby 3.3 or later is required;
CI uses 3.3.5. The lockfile includes macOS Intel and Linux x86_64.

```shell
bundle install
bundle exec rake
COVERAGE=true bundle exec rake test
```

## LesliTesting integration

`test/test_helper.rb` requires LesliTesting and configures
`LesliTesting.gem("LesliDate", coverage_min_coverage: 90)` before loading the gem.
This activates the shared Minitest reporter and, when `COVERAGE=true`, SimpleCov
with console and Cobertura output at `coverage/coverage.xml`.

`Rakefile` exposes the standard Minitest `test` task as its default. The GitHub
Actions workflow delegates to
`LesliTech/LesliActions/.github/workflows/lesli-ci-gem.yaml@master`, which runs
coverage tests, verifies the XML report, builds the gem, and uploads artifacts.
Providing `CODECOV_TOKEN` also enables its optional Codecov upload. The reusable
LesliActions gem job remains the SQLite coverage and packaging job. An adapter
matrix starts PostgreSQL 17 and runs the same LesliTesting suite in SQLite and
PostgreSQL for each supported Rails line:

| CI lane | Ruby | Rails components | Database |
| --- | --- | --- | --- |
| LesliActions gem workflow | 3.3.5 | Locked 8.0.x baseline | SQLite |
| Adapter matrix | 3.3.5 | 8.0.x / 8.1.x | SQLite and PostgreSQL 17 |

`RAILS_VERSION` selects matching ActiveRecord and ActiveSupport requirements in
the development Gemfile. The checked-in lockfile keeps the baseline; the matrix
allows Bundler to resolve the selected line and uses separate caches. To test a
different line locally, update the development bundle explicitly:

```shell
RAILS_VERSION='~> 8.1.0' bundle install
RAILS_VERSION='~> 8.1.0' bundle exec rake test
```

This changes the local lockfile. Run `bundle install` without `RAILS_VERSION`
to return to the default 8.0.x development requirement before committing.

## Controlled test environment

Each test receives a fresh `Lesli.config.datetime` with the
`America/Guatemala` display zone, a Monday week start, `%d.%m.%Y` date format,
and `%d.%m.%Y %H:%M` date-time format. The helper supplies only the minimal
Lesli configuration interface; it does not load the framework.

The Ruby clock is fixed at `2026-10-22 14:30:45 UTC`, `Time.zone` is UTC, and
the locale is English. Configuration, clock, zone, and locale are restored after
each test. Spanish translation fixtures support localization tests without
booting a Rails application. These fixtures are test data only; LesliDate
registers no translations at runtime.

SQLite uses a dedicated `:memory:` database. The `events` table is reset before
every test with these UTC timestamps:

| Column | Value |
| --- | --- |
| `occurred_at` | `2026-10-22 14:30:45` |
| `created_at` | `2026-10-22 14:30:45` |
| `updated_at` | `2026-10-23 15:40:50` |

The database's own clock is independent of Ruby's frozen clock. The `db_now` test
checks the expression and result shape without asserting a wall-clock value.

## Test groups

| File | Coverage |
| --- | --- |
| `test/lesli_date_test.rb` | Version and build metadata |
| `test/formatter_test.rb` | Constructor calls, supported inputs, explicit output, chaining, `.get`, configuration, and the Date2 subclass pattern |
| `test/parser_test.rb` | Calendar dates, native Ruby formats and exceptions, fractions, offsets, zone conversion, and standalone loading |
| `test/presentation_test.rb` | All initializer formats, defaults, construction-time validation, Rails locales and host translation overrides |
| `test/database_test.rb` | Real SQL execution, aliases, NULL values, ActiveRecord selects and grouped counts on either adapter |
| `test/database_regression_test.rb` | Quoting, immutable arguments, fractional offsets, native format limitations and PostgreSQL daylight saving/session independence |

## Running PostgreSQL tests

SQLite is the default and requires no server. To run the same suite against
PostgreSQL, supply a test database URL:

```shell
LESLI_DATE_DATABASE_URL=postgresql://localhost/lesli_date_test bundle exec rake test
```

The helper creates an isolated `lesli_date_test_<pid>` schema, sets the
connection's search path to it, and drops that schema after the run. The test
user needs permission to create schemas. Each test resets the same controlled
fixture data as SQLite. A failed connection fails the suite; PostgreSQL tests
are never replaced with SQL-generation stubs or silently skipped.

Date2 remains a minimal subclass defined in the test file, independent of the
application's source tree. The SQL regressions are ordinary passing tests;
there is no pending-defect wrapper. Tests cover each adapter's formatting
behavior, including SQLite's native `NULL` for unsupported directives.
See [Database expressions](../api/database.md) for each
adapter's formats, zone limitations, and the shared `*_string` aliases.

## Reproduce ordering

Minitest randomizes test order and prints the seed. Reuse it with the standard
Minitest task's `A` argument:

```shell
bundle exec rake test A="--seed 1729"
```

## Preparing a release

1. Choose the release version in `lib/lesli_date/version.rb`, move the
   `Unreleased` changelog entries to that version, and refresh `Gemfile.lock`.
2. Run the CI matrix and review the [migration notes](/gems/date/about/migration).
3. Build and inspect the package, which includes the public documentation,
   migration notes, changelog, runtime source and license:

```shell
COVERAGE=true bundle exec rake test
bundle exec rake build
```

The artifact is `pkg/lesli_date-<version>.gem`. Verify its specification with
`gem specification pkg/lesli_date-<version>.gem` and publish the selected package
with `gem push pkg/lesli_date-<version>.gem` after the release version and notes
are finalized. Building the package does not publish it or create a Git tag.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/about/development.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/22</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

