<div align="center">
    <img width="100" alt="LesliAdmin logo" src="/images/engines/admin/admin-logo.svg" />
    <h3 align="center">Administration area for the Lesli Framework.</h3>
</div>

<br />
<hr/>

<div align="center">
    <a target="_blank" href="https://github.com/LesliTech/LesliAdmin/actions">
        <img alt="Tests passing" src="https://img.shields.io/badge/Tests-passing-green?style=for-the-badge&logo=github">
    </a>
    <a target="_blank" href="https://rubygems.org/gems/lesli_admin">
        <img alt="Gem Version" src="https://img.shields.io/gem/v/lesli_admin?style=for-the-badge&logo=ruby">
    </a>
    <a target="_blank" href="https://codecov.io/github/LesliTech/LesliAdmin">
        <img alt="Codecov" src="https://img.shields.io/codecov/c/github/LesliTech/LesliAdmin?style=for-the-badge&logo=codecov">
    </a>
</div>

<hr/>
<br />

<div align="center">
    <img
        style="width:100%;max-width:800px;border-radius:6px;"
        alt="Lesli screenshot" src="/images/engines/admin/screenshot.png" />
</div>

<br />
<hr/>
<br />

### Installation

**Add LesliAdmin engine gem**
```shell
bundle add lesli_admin
```

**Setup & initialize the database**
```shell
rake lesli:db:setup
```

**Load LesliAdmin engine**
```ruby
Rails.application.routes.draw do
    mount LesliAdmin::Engine => "/admin"
end
```

<br />
<hr/>
<br />

### Development 

```shell
# clone the lesli repo inside your engine folder: RailsApp/engines
git clone https://github.com/LesliTech/LesliAdmin.git

# Load LesliAdmin as a Gem
gem "lesli", path: "engines/LesliAdmin"

# Install the necessary Gems to run LesliAdmin
bundle install

# Setup & initialize the database
rake lesli:db:setup

```

<br />
<hr/>
<br />

### Demo

* [online demo](https://demo.lesli.dev/)
* [docker demo](https://github.com/LesliTech/lesli-docker-demo)


### Documentation
* [website](https://www.lesli.dev/)
* [documentation](https://www.lesli.dev/engines/admin)


### Connect with Lesli

* [X: @LesliTech](https://x.com/LesliTech)
* [Email: hello@lesli.tech](hello@lesli.tech)
* [Website: https://www.lesli.tech](https://www.lesli.tech)


### License
-------
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
along with this program. If not, see http://www.gnu.org/licenses/.

<br />
<hr />
<br />
<br />

<div align="center" class="has-text-centered">
    <img width="200" alt="Lesli logo" src="https://cdn.lesli.tech/lesli/brand/app-logo.svg" />
    <h3 align="center" class="mt-0">
        The Open-Source SaaS Development Framework for Ruby on Rails.
    </h3>
</div>

<br />
<br />

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/LesliAdmin/readme.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/03/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

