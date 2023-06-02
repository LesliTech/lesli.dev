# Development environment


### Editor
We recommend using [Visual Studio Code](https://code.visualstudio.com/). It is a free and open source editor that is available for all platforms. You can add some extensions to it to make it more useful for you.


### Ruby
Lesli uses [Ruby](https://www.ruby-lang.org/) as its primary programming language. The backend is written in Ruby with [Rails](https://rubyonrails.org/) as its framework. **Lesli use the ruby version 3.1.2.** For more information about how to use ruby with the Lesli standars you can go to this [link](https://github.com/leitfaden/cloud_development/tree/master/documentation/rails).


#### Installation
Ruby is available for all platforms. If you need more details for the installation you can following the instructions [here](https://www.ruby-lang.org/en/documentation/quickstart/).  

For install Ruby, you have a couple of options. You can install [Ruby from the official website](https://www.ruby-lang.org/en/). If you choose to install it from there, you will have only one version of ruby and this can be a problem if you want to use multiple versions of ruby in different projects.  


#### Version Managers (recommended)
If you choose to install it with a version manager, you will have multiple versions of ruby and this is a good option if you want to use multiple versions of ruby in different projects.
In the Ruby community, there are two popular managers responsible for installing and maintaining multiple Ruby versions [rvm](https://rvm.io/) (recommended) and [rbenv](https://rbenv.io/).  


__RVM pros over Rbenv:__

* RVM is easier to install than Rbenv.
* RVM has more features than Rbenv.
* RVM includes a built-in Ruby installation mechanism while Rbenv does not.


__Rbenv pros over RVM__:

* Rbenv is lightweight, RVM is heavier.
* Rbenv is more developer-friendly than RVM.
* Rbenv has a dedicated plugin for Ruby installation mechanism, RVM has it built-in.


For more information about this you can go to this [link](https://hixonrails.com/ruby-on-rails-tutorials/ruby-environment-management/).

After you install ruby you need to install rails and bundler. You can use the following commands in your terminal:

Install rails and bundler

```shell
gem install rails bundler
```


### Node.js
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used for running JavaScript in the server side. Lesli uses node for run webpack, vue and other javascript libraries for the frontend. **To work with Lesli you can use the LTS version of Node.**

__Installation:__
Node.js is available for all platforms. If you need more details for the installation of specific version you can following the instructions [here](https://nodejs.org/en/).

__Version Manager (recommended):__
Node Version Manager (nvm) is a tool that allows the user to switch between different versions of Node. js, helping reduce overhead when reproducing production bugs in development environments. [The default installation](https://github.com/nvm-sh/nvm) is only supported on macOS and Linux environments. For windows users, you can follow the instructions [here](https://content.breatheco.de/es/how-to/nvm-install-windows).
For more information about nvm, you can go to this [link](https://github.com/nvm-sh/nvm).

Then you need to install yarn. You can use the following command in your 

terminal:

```shell
npm install -g yarn
```


### Postgresql
Lesli uses [Postgresql](https://www.postgresql.org/) as its database engine. It is a free and open source database that is available for all platforms. You can install postgresql on your computer and then you can use it to create a database for Lesli. The following links provide more information about the installation of postgresql.
    - [Install PostgreSQL on Windows](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/)
    - [Install PostgreSQL on macOS](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/)
    - [Install PostgreSQL on Linux](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-linux/)


__Problems with PostgreSQL locally setup:__
If you have some problems with postgresql locally setup, you can install postgresql on your computer with docker.

First you need to install docker. You can follow the instructions [here](https://www.docker.com/community-edition/) and docker compose with this instructions [here](https://docs.docker.com/compose/install/).

Then you can install postgresql with an image from docker. You can find all the images that you will need in [docker hub](https://hub.docker.com/r/postgres/). And if you need a software to view and manage the database you can use pgadmin4, datagrip or dbaver. 

In this example we will use pgadmin4.
You have to create a docker-compose.yml file on the root of Lesli and add 

the following lines:

```yaml
version: "3.8"
services:
    pgadmin4:
        image: dpage/pgadmin4
        environment:
        - PGADMIN_DEFAULT_EMAIL=root@admin.com
        - PGADMIN_DEFAULT_PASSWORD=root
        ports:
            - "5050:80"
    postgres:
        image: postgres:13
        ports:
            - "5432:5432"
        volumes:
            - ./postgres_data:/var/lib/postgresql/data
        environment:
            POSTGRES_USER: "admin"
            POSTGRES_PASSWORD: "my_password"
            POSTGRES_DB: "lesli_development"
```

You can use the credentials you have created to login to pgadmin4 and database. Then you can manage your containers with the following commands (maybe you need to run this commands with sudo, but it depends on your system):

Start the containers (this start your database)
<strong>sudo docker-compose up -d</strong>

Stop the containers (this stop your database)
<strong>sudo docker-compose down</strong>

If you want to view the logs of the containers
<strong>sudo docker-compose logs postgres</strong>

You can pass the -f flag to follow the logs of the containers
<strong>sudo docker-compose logs -f postgres</strong>

If you want to view the containers that are running
<strong>sudo docker-compose ps</strong>
<br/>

For more information about docker compose file, you can go to this [link](https://docs.docker.com/compose/overview/).

### Credentials for rails
For create credentials for rails you can use the [following instructions](https://github.com/leitfaden/cloud_development/blob/master/documentation/rails/110-credentials.md).

If you create a database with docker-compose you need to set the same credentials in the credentials file for rails.


### Git
Git is a version control system that is used to track changes in files. It is used to manage the codebase of Lesli.

Lesli have some standards to follow when using git. You can find more information about git in [this link](https://github.com/leitfaden/cloud_development/tree/master/documentation/git).


### Github
Github is a web-based Git repository hosting service that is used to store the codebase of Lesli. For download the codebase you need to clone the repository with ssh or with https. If you want to use ssh you need to 
create a ssh keys.

For configure bundle and download the gems from github packages you need to create a personal token with read-only access. You can find more information about it, in this [link](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).

Then you can set the personal token with the next command:

```shell
bundle config https://rubygems.pkg.github.com/YOUR_COMPANY_PROFILE YOUR_TOKEN
```


### Install engines
Install engines you need to clone the repository that you want inside the engines folder. The only engine needed to run Lesli at the first time is LesliCloud.

