
<p align="center">
    <img width="70" alt="Lesli logo" src="/images/engines/audit/audit-logo.svg" />
</p>

<h3 align="center">Lesli Audit database</h3>

### 08.03. Audit
```plaintext
00.01. audit/account

05.01. audit/dashboards 
05.02. audit/dasboard/components 

10.00. audit/account_requests
11.00. audit/user_requests
```


<fieldset>

```mermaid
erDiagram
    audit_accounts {
        bigint   id
        integer  status
        datetime deleted_at
        datetime timestamps 
    }

    audit_account_requests {
        string    request_controller
        string    request_action
        string    request_method
        integer   request_count
        date      created_at
    }

    audit_user_requests {
        integer   request_count
        date      created_at
        datetime  updated_at
    }

    audit_accounts ||--|| lesli_accounts : ""
    audit_account_requests }|--|| audit_accounts : ""
    audit_user_requests }|--|| audit_accounts : ""
    audit_user_requests ||--|| lesli_users : ""

```
</fieldset>

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAudit/tree/master/docs/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

