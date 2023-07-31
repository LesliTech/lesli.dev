# Rails credentials
Lesli uses rails credentials to manage sensitive application credentials securely. It allows developers to store and access sensitive information, such as API keys, database passwords, and other secrets, in an encrypted format.


##### Manage credentials

```shell
# Ubuntu:
EDITOR="code --wait" rails credentials:edit --environment development
EDITOR="code --wait" rails credentials:edit --environment production
EDITOR="code --wait" rails credentials:edit --environment test
EDITOR="code --wait" rails credentials:edit

# MacOS/Ubuntu server:
EDITOR="nano" rails credentials:edit --environment development
EDITOR="nano" rails credentials:edit --environment production
EDITOR="nano" rails credentials:edit --environment test
EDITOR="nano" rails credentials:edit
```


##### Standard credentials structure for Lesli

```yaml
implementation: "lesli-localhost"
db:
    database: ""
    username: ""
    password: ""
    host: "" # optional
    port: "" # optional
services:
    jwt:
        secret: "your-secret-json-web-token-key"
providers:
    aws:
        region: eu-central-1
        access_key_id: ""
        secret_access_key: ""
        s3: 
            region: eu-central-1
            bucket: ""
            access_key_id: ""
            secret_access_key: ""
        ses: 
            access_key_id: ""
            secret_access_key: ""
        sns: 
            region: eu-central-1
            access_key_id: ""
            secret_access_key: ""
    google:
        maps_sdk_token: ""
        analytics: track_id
        client_id: ""
        client_secret: ""
    facebook:
        client_id: ""
        client_secret: ""
    apple:
        mapkit_token: ""
        client_id: ""
        team_id: ""
        key_id: ""
        key: ""
        validity_period: 10
    firebase:
        api_key: ""
        admin_sdk_private_key:
            type: ""
            project_id: ""
            private_key_id: ""
            private_key: ""
            client_email: ""
            client_id: ""
            auth_uri: ""
            token_uri: ""
            auth_provider_x509_cert_url: ""
            client_x509_cert_url: ""
        web:
            apiKey: ""
            authDomain: ""
            projectId: ""
            storageBucket: ""
            messagingSenderId: ""
            appId: ""
    honey_badger:
        api_key: ""
        personal_token: ""
    motomo: site_id
secret_key_base: "your-secret-key-base"
```

TODO: Add explanation for every entry in the credentials file
