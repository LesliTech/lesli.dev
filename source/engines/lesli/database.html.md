
<p align="center">
    <h1 align="center">Lesli core database.</h1>
</p>

### 00.10. Core
```
00.01. accounts
00.02. roles
00.03. users
00.06. system_controllers
00.07. system_controller_actions

00.10. account_details
00.11. account_settings
00.12. account_activities
00.14. account_logs

00.11. account_locations
00.13. account_files
00.16. account_currencies
00.17. account_exchange_rates
00.18. account_crontabs
00.19. account_crontab_logs
00.20. account_crontab_suscriptions
00.21. account_issues

00.03. user (reference only)
00.30. user_details
00.31. user_settings
00.32. user_sessions
00.33. user_activities
00.34. user_powers
00.35. user_shortcuts
00.36. user_access_codes
00.37. user_auth_provider
00.40. user_logs

00.50. descriptors
00.51. descriptor_privileges
00.52. descriptor_activities

00.02. roles (reference only)
00.55. role_powers
00.56. role_activities
00.57. role_privileges

00.90. issues
```


<fieldset>

```mermaid
erDiagram
    accounts {
        integer status
        string email

        string company_name
        string company_name_legal
        string company_tagline

        int    country
        string address
        string region
        string city
        string postal_code

        string website
        string phone_number_1
        string phone_number_2
        string phone_number_3
        string phone_number_4
        string public_email

        string github
        string twitter
        string youtube
        string linkedin
        string facebook
    }

    roles {
        string name
        string code
        string description
        boolean active
        string path_default
        boolean path_limited
        boolean isolated
        integer object_level_permission
    }

    users {
        boolean   active
        string    email
        string    encrypted_password
        string    alias
        string    salutation
        string    first_name
        string    last_name
        string    reset_password_token
        datetime  reset_password_sent_at
        datetime  password_expiration_at
        datetime  locked_until
        datetime  remember_created_at
        integer   sign_in_count
        datetime  current_sign_in_at
        datetime  last_sign_in_at
        inet      current_sign_in_ip
        inet      last_sign_in_ip
        string    unconfirmed_email
        string    confirmation_token
        datetime  confirmation_sent_at
        datetime  confirmed_at
        string    telephone
        string    telephone_confirmation_token
        datetime  telephone_confirmation_sent_at
        datetime  telephone_confirmed_at
        integer   failed_attempts
        string    unlock_token
        datetime  locked_at
        datetime  deleted_at
    }

    account_logs {

    }

    user_sessions {
        inet   user_remote
        string user_agent
        string session_token
        string session_source
        integer  usage_count
        datetime last_used_at
        datetime expiration_at
    }

    user_requests {

    }

    user_logs {

    }

    user_agents {
        
    }

    accounts ||--|| users : ""
    roles }|--|| accounts : ""
    users }|--|| accounts : ""
    account_logs ||--|| accounts : ""
    user_sessions }|--|| users : ""
    user_requests }|--|| users : ""
    user_logs }|--|| users : ""
    user_agents }|--|| users : ""
    

```
</fieldset>

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Lesli/tree/master/docs/database.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

