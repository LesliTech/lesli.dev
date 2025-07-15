### Database 

Open the database configuration file

```
LesliApp/config/database.yml
```

Add PostgreSQL as the main database (Currently Lesli is compatible only with PostgreSQL and SQLite)

```yml
default: &default
  adapter: postgresql
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  database: "db_dev"
  username: "db_user"
  password: "db_pass"

test:
  <<: *default
  database: "lesli-test"
  username: "db_user"
  password: "db_pass"
```

My recommendation is to use Rails Credentials or AWS Secret Manager

```yml
development:
  <<: *default
  database: <%= Rails.application.credentials.dig(:db, :database) %>
  username: <%= Rails.application.credentials.dig(:db, :username) %>
  password: <%= Rails.application.credentials.dig(:db, :password) %>

test:
  <<: *default
  database: <%= Rails.application.credentials.dig(:db, :database) %>
  username: <%= Rails.application.credentials.dig(:db, :username) %>
  password: <%= Rails.application.credentials.dig(:db, :password) %>

production:
  <<: *default
  port: <%= Rails.application.credentials.dig(:db, :port) %>
  host: <%= Rails.application.credentials.dig(:db, :host) %>
  database: <%= Rails.application.credentials.dig(:db, :database) %>
  username: <%= Rails.application.credentials.dig(:db, :username) %>
  password: <%= Rails.application.credentials.dig(:db, :password) %>
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Lesli/tree/master/docs/getting-started/credentials.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/07/12</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

