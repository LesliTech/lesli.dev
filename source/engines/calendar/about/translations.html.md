# Translations

LesliCalendar reserves the `lesli_calendar` namespace. Locale files are available for English, Spanish, French, Italian, and Portuguese.

Group labels by calendar feature:

```yaml
en:
  lesli_calendar:
    calendars:
      title: "Calendar"
      today: "Today"
    events:
      new: "New event"
      empty: "No events scheduled"
```

Use complete keys in views and services:

```erb
<%= I18n.t("lesli_calendar.events.new") %>
```

English and Spanish contain the implemented UI messages. French, Italian and Portuguese files are placeholders, not complete translations. Configure Rails fallbacks or supply translations before exposing those locales. Date and time formatting should use Rails locale formats rather than translated string fragments.

When LesliBabel is installed:

```shell
bin/rails lesli_babel:scan
bin/rails lesli_babel:import
```

Review generated changes and keep the engine locale files as the version-controlled source shipped with the gem.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliCalendar/tree/master/docs/about/translations.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/11/16</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

