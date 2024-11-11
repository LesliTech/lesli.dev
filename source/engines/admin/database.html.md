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
