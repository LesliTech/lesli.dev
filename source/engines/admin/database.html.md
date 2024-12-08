# 01.01 CloudBabel Database

```plaintext
    00.01. accounts
    05.01. dashboards
    05.02. dashboard/components
```


```mermaid
erDiagram
    lesli_admin_accounts ||--o{ lesli_admin_dashboards : has
    lesli_admin_dashboards ||--o{ lesli_admin_dashboard_components : has
```

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/tree/master/docs/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29 23:21</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

