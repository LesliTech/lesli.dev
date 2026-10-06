# Installation

LesliAssets packages the shared stylesheets, JavaScript, fonts, images, icons, and views used by Lesli applications. Consuming applications use the generated files shipped in the gem; they do not need the repository's Node.js build tools.

## Standard Lesli applications

Lesli installs LesliAssets as a dependency. The Rails engine exposes its packaged assets and views automatically, so no additional gem entry is required.

## Other Rails applications

Add the gem to the application:

```shell
bundle add lesli_assets
```

Require its main entry point if the application does not use Bundler auto-require:

```ruby
require "lesli_assets"
```

Verify the installation by rendering a packaged brand image:

```erb
<%= image_tag("lesli_assets/brand/app-logo.svg", alt: "Lesli") %>
```

Assets use the `lesli_assets` logical namespace. Generated icon sprites and email views are available through normal Rails partial and rendering helpers.

## Runtime and build requirements

The current development baseline is Ruby 3.2 or newer and Rails 8.1. Node.js and npm are required only when contributing to LesliAssets or rebuilding generated output. See [Development](/gems/assets/about/development) for that workflow.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAssets/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

