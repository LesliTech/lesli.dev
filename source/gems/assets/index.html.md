<div align="center">
    <h1 align="center">
        <img width="100" alt="LesliAssets" src="/images/gems/assets/assets-logo.svg" />
    </h1>
    <h3 align="center">Shared frontend assets and build tools for the Lesli Framework.</h3>
</div>

<br />

<div align="center">
    <a target="_blank" href="https://github.com/LesliTech/LesliAssets/actions/workflows/main.yml">
        <img alt="LesliAssets test status" src="https://img.shields.io/github/actions/workflow/status/LesliTech/LesliAssets/main.yml?branch=main&style=for-the-badge&logo=github&label=tests">
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

---

<br />

## Introduction

LesliAssets is the official frontend asset library for the [Lesli Framework](https://github.com/LesliTech/Lesli).

It centralizes stylesheets, JavaScript modules, images, icons, view partials, and Tailwind build tooling shared by Lesli applications and engines.

<br />

## Features

- Shared stylesheets, JavaScript modules, images, and icons
- Reusable email and view resources
- Tailwind entrypoint discovery across applications, engines, and gems
- Quiet builds with concise success messages and captured compiler errors
- Development watch mode and minified production builds

<br />

## Installation

Add LesliAssets to the application:

```shell
bundle add lesli_assets
```

<br />

## Usage

### Build Tailwind stylesheets

LesliAssets discovers files ending in `.tailwind.css` inside `source/tailwind` directories and writes their compiled output to the corresponding Rails asset directory.

Run the bundled builder from the Rails application root:

```shell
bundle exec ruby "$(bundle show lesli_assets)/bin/build-tailwind" --root .
```

Build minified production assets or start the file watchers:

```shell
bundle exec ruby "$(bundle show lesli_assets)/bin/build-tailwind" --root . --minify
bundle exec ruby "$(bundle show lesli_assets)/bin/build-tailwind" --root . --watch
```

### Tailwind entrypoints

Place Tailwind source files in the application or package source directory:

```text
source/tailwind/application.tailwind.css
```

The builder preserves the relative filename and writes generated CSS under `app/assets/stylesheets`. Engine and gem outputs receive a snake-case namespace to avoid collisions.

<br />

## Development

Clone the repository and install its dependencies:

```shell
git clone https://github.com/LesliTech/LesliAssets.git
cd LesliAssets
bundle install
```

To use local source from a Lesli development workspace, reference it from the host application's `Gemfile`:

```ruby
gem "lesli_assets", path: "gems/LesliAssets"
```

### Tests

Run the default test task from the LesliAssets directory:

```shell
bundle exec rake
```

<br />

## Documentation

- [Lesli website](https://www.lesli.dev/)
- [Documentation](https://www.lesli.dev/gems/assets/)
- [Release notes](https://github.com/LesliTech/LesliAssets/releases)
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
    <p><b>Last Update: </b>2026/07/19</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

