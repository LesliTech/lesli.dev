
# Lesli configuration file
Lesli use a file to initialize the basic settings needed to start the app. We can customize this settings using dedicated instance lesli.yml file or dedicated file per server. 

Lesli core includes the base lesli.yml configuration file, every engine must include a lesli.yml file.

**Important:** Only a builder engine can override the configuration.

### Location
```plaintext
    Lesli/
        app
        config
        engines/
            standard_engine
                lesli.yml   -> required
            builder_instance/
                lesli.yml   -> required, can override the base configuration
        lib
        public
        storage
        vendor
        lesli.yml           -> required
        lesli.server.yml    -> optional
```

### Server configuration file
You can include a file at the root of the app path to override the settings, this option is usefull to when we need to change some settings for an instalation or server, for example: if we have a test server we can change the default url for email using this special file. __IMPORTANT__: this file only works at the root of the rails app and is ignored in github, so you have to create the file if you want to use this feature.  

### NOTE: 
The core base settings include all the configurations available, but in the instance or server file you can include only the settings you want to change.

lesli.yml example located at: [https://github.com/LesliTech/Lesli/blob/master/lesli.yml](https://github.com/LesliTech/Lesli/blob/master/lesli.yml)

