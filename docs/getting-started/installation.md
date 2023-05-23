# Install Lesli



### Clone the repo
Clone the repo from Github (available really soon):

```shell
git clone git@github.com:LesliTech/Lesli.git project_name 
```

Change `project_name` with the name of your project.



### Ruby on Rails
Lesli is a standard Ruby on Rails application, to install and run Lesli first we have to install gems, configure a database connection, create, migrate and seed the database and finally run the Rails Server.



#### Bundle 
To install the necessary Gems to run Lesli:

```shell
bundle install
```



#### Database
Edit the standard RoR credentials to add information about the database:

```shell
EDITOR="nano" rails credentials:edit --environment development
```

This is an example of what the credentials should look like:

```yaml
db:
    database: "database-name"
    username: "database-username"
    password: "database-password"
```

Lesli include a Rake task to start our database:

```shell
rake dev:db:reset
```

This task is going to: create, migrate, seed and initialize our database.



#### Run Lesli
We can finally run our awesome application :) 

```shell
rails server
```


### Logging into your new Lesli application
The seeders comes with default users with different roles and privileges, to see Lesli in action use the owner user:

* - username: hello@lesli.tech
* - password: tardis2023$

> It is possible to add development users, roles, privileges and more; we will explore this options later in the documentation.
