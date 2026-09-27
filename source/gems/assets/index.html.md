<div align="center">
    <h1 align="center">
        <img width="100" alt="LesliAssets" src="/images/gems/assets/assets-logo.svg" />
    </h1>
    <h3 align="center">Shared frontend assets for the Lesli Framework.</h3>
</div>

<br />

<div align="center">
    <a target="_blank" href="https://github.com/LesliTech/LesliAssets/actions/workflows/lesli-ci-tests.yaml">
        <img
            alt="LesliAssets test status"
            src="https://img.shields.io/github/actions/workflow/status/LesliTech/LesliAssets/lesli-ci-tests.yaml?branch=master&style=for-the-badge&logo=github&label=tests">
    </a>
    <a target="_blank" href="https://rubygems.org/gems/lesli_assets">
        <img alt="Gem Version" src="https://img.shields.io/gem/v/lesli_assets?style=for-the-badge&logo=ruby">
    </a>
    <a target="_blank" href="https://codecov.io/github/LesliTech/LesliAssets">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/LesliTech/LesliAssets?style=for-the-badge&logo=codecov">
    </a>
    <a target="_blank" href="https://sonarcloud.io/project/overview?id=LesliTech_LesliAssets">
        <img alt="Sonar Quality Gate" src="https://img.shields.io/sonar/quality_gate/LesliTech_LesliAssets?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge&logo=sonarqubecloud&label=Quality">
    </a>
</div>

<br />

## Introduction

LesliAssets is the official frontend asset library for the [Lesli Framework](https://github.com/LesliTech/Lesli). It packages the shared visual resources used by Lesli applications and engines, including stylesheets, JavaScript, fonts, icons, brand images, and transactional email templates.

The gem distributes generated assets that are ready for Rails applications to consume. Its source compilers and build commands are development tools for this repository and the Lesli workspace; they are not currently intended to build assets from a host application.

<br />

## Why LesliAssets?

LesliAssets provides:

- A consistent visual foundation across Lesli applications and engines
- Shared Tailwind CSS themes, design tokens, typography, and semantic colors
- Packaged fonts, logos, locale flags, social icons, and engine artwork
- JavaScript bundles for common framework behavior and calendar integration
- Reusable transactional email templates compiled from MJML
- SVG sprite partials that keep frequently used icons lightweight

<br />

## Quick Start

### Requirements

The current Lesli development baseline is:

- Ruby 3.2 or newer
- Rails 8.1

The released gem contains precompiled assets, so Node.js is not required to use it in a Rails application. Node.js 20.x and npm are required only when developing or rebuilding this repository.

### Install with Lesli

LesliAssets is installed automatically with the main `lesli` gem. Its Rails engine makes the packaged assets and views available to a standard Lesli application without additional gem configuration.

### Install in another Rails application

Add the gem to the application:

```shell
bundle add lesli_assets
```

Then use Rails asset and rendering helpers to include the resources required by the application.

> [!NOTE]
> LesliAssets currently ships prebuilt output for consuming applications. Do not run its internal asset builders from the host application.

<br />

## Usage

### Use a packaged image

Assets are exposed under the `lesli_assets` logical namespace:

```erb
<%= image_tag("lesli_assets/brand/app-logo.svg", alt: "Lesli") %>
```

### Use an icon sprite

Render a sprite once in the shared application layout:

```erb
<div class="hidden" aria-hidden="true">
    <%= render("lesli_assets/partials/application-lesli-icons-social") %>
</div>
```

Then reference one of its symbols:

```html
<svg class="size-6" role="img" aria-label="GitHub">
    <use href="#github-original"></use>
</svg>
```

Available sprite groups include engines, gems, locale flags, and social platforms.

<br />

## Library

LesliAssets organizes its resources into focused groups:

| Group | Included resources |
| --- | --- |
| Styles | Tailwind themes, design tokens, compiled application styles, and PDF/public styles |
| JavaScript | Shared application behavior and calendar integration |
| Fonts | Domine, Open Sans, Roboto, Material Symbols, and Remix Icon assets |
| Images | Framework logos, favicons, authentication artwork, and brand images |
| Icons | Engine, gem, locale, and social SVG collections |
| Views | Generated SVG sprite partials and transactional email templates |
| Build tools | Repository-only Tailwind, JavaScript, stylesheet, icon, and MJML workflows |

See the [LesliAssets documentation](https://www.lesli.dev/gems/assets/) for the design system, asset catalog, and detailed usage guidance.

<br />

## Development

Clone the repository and install its Ruby and JavaScript dependencies:

```shell
git clone https://github.com/LesliTech/LesliAssets.git
cd LesliAssets
bundle install
npm ci
```

To develop LesliAssets inside a local Lesli workspace, reference the repository from the host application's `Gemfile`:

```ruby
gem "lesli_assets", path: "gems/LesliAssets"
```

From the standard Lesli workspace, rebuild the gem's generated development assets:

```shell
make build
```

Individual build targets are also available:

```shell
make build.js
make build.css
make build.icons
make build.mails
make build.tailwind
```

### Tests

Run the default test task from the LesliAssets directory:

```shell
bundle exec rake
```

### Code quality

Lint the Ruby sources with:

```shell
bin/rubocop
```

Generated JavaScript, CSS, SVG sprite partials, and email views should be rebuilt from their files under `source`; avoid editing generated output directly.

These build commands are maintainership tools for LesliAssets and assume the standard Lesli workspace layout. They are not part of the host-application installation workflow.

<br />

## Documentation

- [Lesli website](https://www.lesli.dev/)
- [LesliAssets documentation](https://www.lesli.dev/gems/assets/)
- [Releases and changelog](https://github.com/LesliTech/LesliAssets/releases)
- [Issue tracker](https://github.com/LesliTech/LesliAssets/issues)
- [Source code](https://github.com/LesliTech/LesliAssets)

<br />

## Community

- [X: @LesliTech](https://x.com/LesliTech)
- [hello@lesli.tech](mailto:hello@lesli.tech)
- [https://www.lesli.tech](https://www.lesli.tech)

<br />

## License

Copyright (c) 2026, Lesli Technologies, S. A.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

The complete license text is available in the [license file](./license).

---

<br />
<br />

<div align="center">
    <img width="80" alt="Lesli icon" src="https://cdn.lesli.tech/lesli/brand/app-icon.svg" />
    <h3 align="center">The Open-Source SaaS Development Framework for Ruby on Rails.</h3>
</div>

<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliAssets/readme.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/09/26</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

