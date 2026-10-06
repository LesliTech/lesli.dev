# Database expressions

LesliDate can generate SQL fragments that format stored UTC timestamps in the time zone configured by Lesli.

## One column

```ruby
date_sql = LesliDate::Formatter
  .new
  .date_time
  .db_column("published_at", "articles", as: "published_at_display")

Article.select("articles.*", date_sql)
```

`db_column(column, table = "", as: nil)` qualifies the column when a table is supplied. The default alias is `<column>_string`.

## Timestamp columns

```ruby
timestamp_sql = LesliDate::Formatter.new.date_time.db_timestamps("articles")
Article.select("articles.*", timestamp_sql)
```

`db_timestamps(table = "")` generates expressions for the standard `created_at` and `updated_at` columns. SQLite currently returns only a `created_at_string` expression; PostgreSQL returns both timestamps as `created_at_date` and `updated_at_date`.

## Current database time

```ruby
LesliDate::Compatibility.db_now
```

This returns `CURRENT_TIMESTAMP` for SQLite and `NOW()` for other adapters. The formatting helpers explicitly support SQLite and PostgreSQL; verify generated SQL before using another database adapter.

Column and table names are interpolated into the SQL fragment. Pass trusted schema identifiers, never raw user input.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/api/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

