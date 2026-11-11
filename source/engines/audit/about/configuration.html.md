# Configuration

LesliAudit reads its settings from `Lesli.config.audit`. Override only the
values that differ from the defaults and merge them with the existing hash so
future engine defaults are preserved:

```ruby
# config/initializers/lesli.rb
Lesli.configure do |config|
  config.audit = config.audit.merge(
    enable_logs: true,
    enable_journals: true,
    enable_analytics: true,
    analytics_retention_days: 400,
    traffic_retention_days: 400,
    audit_retention_days: nil
  )
end
```

## Settings

| Setting | Type | Default | Behavior |
| --- | --- | --- | --- |
| `enable_logs` | Boolean | `true` | Enables explicit account and user activity events |
| `enable_journals` | Boolean | `true` | Records individual requests as user journal history while analytics is enabled |
| `enable_analytics` | Boolean | `true` | Master switch for request counters, journals, and successful-login device aggregates |
| `analytics_retention_days` | Positive integer or `nil` | `400` | Retention period for authenticated request counters, journals, and successful-login device aggregates |
| `traffic_retention_days` | Positive integer or `nil` | `400` | Retention period for provider-imported traffic rollups and their breakdowns |
| `audit_retention_days` | Positive integer or `nil` | `nil` | Retention period for append-only activity events |

A host integration may additionally set `traffic_sync_resolver` to a callable
that receives the core account and returns `source` and `last_synced_at`. The
Traffic report uses it to show the provider's latest successful job without
depending on a host-specific synchronization model. When it is absent,
LesliAudit uses the newest imported `snapshot_at`, which is appropriate for the
standalone demo.

`nil` disables automatic cleanup for that data class. Invalid retention values
raise `ArgumentError` when cleanup runs. Keep `audit_retention_days` unset until
the host application has defined its legal-hold, export, and deletion policy.

## Analytics and Journal Modes

`enable_analytics` is the master switch. `enable_journals` controls whether
individual request details are retained while analytics is enabled:

| Analytics | Journals | Result |
| --- | --- | --- |
| Enabled | Enabled | Update request aggregates and record the individual request journal |
| Enabled | Disabled | Update request aggregates without creating a journal |
| Disabled | Enabled | Do not capture request analytics or journals |
| Disabled | Disabled | Do not capture a request event |

Explicit activity events are controlled only by `enable_logs`; the analytics
switches do not affect them. Traffic has no capture switch because providers
write through an explicit importer rather than an automatic request callback.

## Retention Domains

The three retention settings follow the report concepts directly:

- `analytics_retention_days` applies to Analytics and Requests data, including
  both retained and transient journals;
- `traffic_retention_days` applies only to Traffic provider snapshots;
- `audit_retention_days` applies only to the append-only events shown in Logs.

## Retention Cleanup Job

Schedule `LesliAudit::RetentionCleanupJob` once per day after choosing retention
periods. LesliAudit intentionally does not select a scheduler or queue because
those are host-application concerns. See [Tasks](/engines/audit/about/tasks) for
the equivalent manual cleanup command.

## Optional Engines

LesliShield is optional. When installed, its session identifier is recorded as
opaque metadata; LesliAudit does not create a foreign key to Shield tables.

LesliDashboard is also optional. Its installation does not change audit capture
or retention. See [Dashboards](/engines/audit/about/dashboards) when enabling
the Audit dashboard component.


<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAudit/tree/master/docs/about/configuration.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

