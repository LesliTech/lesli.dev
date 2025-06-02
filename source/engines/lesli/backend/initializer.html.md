
# Initializer
Lesli use a .rb file to initialize the basic settings needed to start the app. We can customize this settings adding or generating a initializer for our gem.

```shell
# Generate Lesli initializer
rails g lesli:install
```

Lesli includes the base lesli configuration, so you can only edit the parts required for your specific needs.

```ruby
Lesli.configure do |config|

    # Installation identifier
    config.instance = "Lesli"


    # Information about the main account in the platform
    config.company = {
        name: "Lesli",
        email: "hello@lesli.tech",
        tagline: "Ruby on Rails SaaS Development Platform."
    }


    # Available languages globally (Requires LesliBabel)
    config.locales = {
        :en => "English",       # English
        # :de => "Deutsch",     # Deutsch/German
        # :pl => "Polski",      # Polski/Polish/Poland
        # :nl => "Dutch",       # Dutch/Nederlands/Netherlands
        :es => "Español",       # Español/Spanish
        # :uk => "украї́нська",  # украї́нська/Ukrainian
        # :sr => "Српски",      # Српски/Srpski/Serbian
        # :it => "Italiano",    # Italiano/Italian
        # :hr => "Hrvatski",    # Hrvatski/Croatian
        # :fr => "Français",    # French
        # :pt => "Português",   # Portuguese
        # :tr => "Türkçe",      # Turkish
        # :ro => "Română",      # Romanian
        # :bg => "български"    # Bulgarian
    }


    # Time localization
    config.datetime = {
        time_zone: "America/Guatemala",
        start_week_on: "monday",
        formats: {
            date: "%d/%m/%Y",
            time: "%H:%M",
            date_time: "%d/%m/%Y %H:%M",
            date_words: "%A, %B %d, %Y",
            date_time_words: "%A, %B %d, %Y, %H:%M"
        }
    }


    # Instance security settings
    config.security = {
        password: "tardis",
        enable_debug: false,
        enable_becoming: false,
        enable_analytics: true,
        enable_login_otp: true,
        enable_login_link: true,
        allow_multiaccount: true,
        allow_registration: true
    }


    # Main color palette for Lesli
    config.theme = {
        color_primary: "#193d8d",
        color_sidebar: "#ffffff",
        color_header: "transparent",
        color_footer: "transparent",
        color_background: "#eef2f6",
        color_sidebar_hover: "#dee7ec"
    }
end
```

> You can edit this at runtime, the initializer file is needed only to setup Lesli for the very first time.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Lesli/tree/master/docs/backend/initializer.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2024/09/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

