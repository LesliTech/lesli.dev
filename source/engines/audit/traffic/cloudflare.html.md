# Cloudflare Traffic

Cloudflare Traffic is the reference host integration for LesliAudit's Traffic
report. It is useful when Cloudflare serves a cached public resource without a
request reaching Rails. The host queries aggregate analytics and imports
complete daily snapshots; LesliAudit never installs a tracking beacon or logs
one row per anonymous request.

## Responsibility Boundary

LesliAudit owns the normalized DTO, importer, database tables, retention, and
Traffic report. The host application owns:

- the Cloudflare API client and credentials;
- the zone, hostnames, and account selection;
- mapping public paths to host-owned resources;
- the synchronization job, schedule, retries, and backfill;
- provider success and failure monitoring.

This boundary keeps credentials and host models out of the engine. A host
passes each result through `LesliAudit::CloudflareTrafficSnapshot` and
`LesliAudit::TrafficSnapshotImporter`.

## Exact Metric Contract

The reference integration queries Cloudflare's
`httpRequestsAdaptiveGroups` dataset with `requestSource: "eyeball"`, a UTC
day, a hostname, and `clientRequestPath` groups.

| LesliAudit field | Cloudflare field | Exact meaning in this integration |
| --- | --- | --- |
| `page_views` | `count` | Number of end-user HTTP requests Cloudflare reports for the mapped hostname and path during the UTC day. It is not a browser DOM/page-load event and is not unique. Reloads and repeated requests can increase it. |
| `visits` | `sum.visits` | Number of Cloudflare visits for the mapped hostname and path. Cloudflare defines a visit as a page view reached from a direct link or a referrer whose hostname differs from the requested hostname. One visit can include multiple page views. |

The name `page_views` is LesliAudit's presentation contract for mapped resource
requests; the unmodified source is Cloudflare `count`. Neither field means
unique people, authenticated users, successful business operations, or
billable Cloudflare traffic. Adaptive datasets can be sampled and a repeated
query can produce adjusted totals, which is why recent days are reimported.

See Cloudflare's documentation for
[`httpRequestsAdaptiveGroups`](https://developers.cloudflare.com/analytics/graphql-api/migration-guides/graphql-api-analytics/),
[`requestSource` filtering](https://developers.cloudflare.com/analytics/graphql-api/features/filtering/),
and [adaptive sampling](https://developers.cloudflare.com/analytics/faq/graphql-api-inconsistent-results/).

## Installation Checklist

1. Install LesliAudit and run `bin/rails lesli:db:prepare`.
2. Create a custom Cloudflare token with **Account · Account Analytics · Read**
   and restrict its Zone Resources to the required zone.
3. Store the token in Rails encrypted credentials or the deployment secret
   manager. Never store it in LesliAudit tables or client-side code.
4. Configure the zone ID, allowed hostnames, target Lesli account IDs, and
   query limits in the host application.
5. Implement a callable path resolver that returns `resource_type` and
   `resource_id`, or `nil` for paths that should be ignored.
6. Schedule a host job that queries complete UTC days and imports snapshots.
7. Run an initial backfill, then reimport recent days on every scheduled run.

The LesliBuilder reference host supports an encrypted credential at
`cloudflare.analytics.token` or the `CLOUDFLARE_ANALYTICS_TOKEN` deployment
secret. Its operational variables, tasks, and example resolver are documented
in `docs/integrations/cloudflare-traffic.md` in that host repository.

## Jobs and Backfill

The reference host exposes:

```shell
# Reimport the configured recent period for every configured account.
bin/rails cloudflare_traffic:sync

# Import 30 complete days for Lesli::Account ID 1.
bin/rails "cloudflare_traffic:backfill[1,30]"
```

The default production schedule runs once daily and refreshes the last three
complete UTC days. The initial backfill defaults to 30 days. Provider retention
and query limits depend on the Cloudflare plan, so a longer backfill must be
validated against the dataset settings returned for the zone.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Traffic remains empty | Confirm the integration is enabled, the account ID is configured, the Audit account exists, and the path resolver returns a resource. |
| Authentication or authorization error | Verify the token value, **Account Analytics: Read** permission, and Zone Resources restriction. These errors are intentionally not retried. |
| Dataset disabled or missing fields | Inspect the zone's `httpRequestsAdaptiveGroups` settings. Country, device, or referrer breakdowns are imported only when their fields are available. |
| Results differ between runs | Cloudflare adaptive data may be sampled or adjusted. Query short daily ranges and allow recent-day reimports. |
| Import exceeds its page limit | Raise the configured safety limit only after checking the zone `maxPageSize`, dataset duration, and expected path cardinality. A partial result is never silently stored. |
| Last synchronization is stale | Inspect the host job record, queue worker, schedule, and most recent error. The report warns after 36 hours without a successful synchronization. |
| A path is missing | Confirm the configured hostname and inspect the resolver. Query strings and fragments are removed before resource matching. |

## Evidence and Privacy

Traffic is external, eventually consistent analytics. It can be sampled,
delayed, reclassified, or replaced by a newer provider snapshot. It is **not
audit evidence** and must not be used to prove that a user performed an action
or that a business transaction succeeded. Use `UserLog` or `AccountLog` for
explicit auditable operations.

The integration persists aggregates only. It does not store Cloudflare tokens,
IP addresses, cookies, fingerprints, raw user agents, referrer paths, query
strings, URL fragments, or individual anonymous requests.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAudit/tree/master/docs/traffic/cloudflare.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

