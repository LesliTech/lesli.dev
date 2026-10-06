# Installation

LesliDate provides time-zone-aware display formatting and database date expressions for Lesli Rails applications.

Add the gem to the application:

```shell
bundle add lesli_date
```

LesliDate reads `Lesli.config.datetime`, so load and configure Lesli before constructing a formatter. A standard Lesli application already provides this configuration.

Verify the installation in a Rails console:

```ruby
LesliDate::Formatter.new(Time.current).date_time.to_s
```

The formatter accepts `Time` objects, ISO 8601 strings, or strings accompanied by their input format. It returns itself from its format selectors, so selectors can be chained with `to_s`, `get`, or a database helper.

LesliDate currently generates adapter-specific database expressions for SQLite and PostgreSQL. See [Database expressions](/gems/date/api/database) before using those helpers with another adapter.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliDate/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

