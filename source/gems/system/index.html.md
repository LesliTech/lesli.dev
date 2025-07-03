
<div align="center">
    <img width="100" alt="LesliSystem logo" src="/images/gems/system/system-logo.svg" />
    <h3 align="center" class="has-text-centered">Core System Utilities for The Lesli Framework.</h3>
    <p align="center" class="has-text-centered">
        LesliSystem provides shared, reusable system-level components for The Lesli Framework.
        It includes tools for engine metadata, configuration introspection, messaging helpers,
        and any other static or dynamic utilities needed across the Lesli ecosystem.
    </p>
</div>

<br />
<hr/>

<div align="center" class="documentation-statics">
    <a target="blank" href="https://rubygems.org/gems/lesli">
        <img height="22" alt="Gem Version" src="https://badge.fury.io/rb/lesli.svg"/>
    </a>
    <a class="mx-2" href="https://codecov.io/github/LesliTech/Lesli"> 
        <img height="22" src="https://codecov.io/github/LesliTech/Lesli/graph/badge.svg?token=2O12NENK5Y"/> 
    </a>
    <a href="https://codecov.io/github/LesliTech/LesliBabel"> 
        <img height="22" src="https://sonarcloud.io/api/project_badges/measure?project=LesliTech_LesliBabel&metric=sqale_rating"/> 
    </a>
</div>

<hr/>
<br />

### Installation

```shell
bundle add lesli_system
```

### Usage
```ruby

# Get information of all lesli engines installed
LesliSystem.engines()

# Result:
[
    {
        :code=>"lesli", 
        :name=>"Lesli", 
        :path=>"/lesli", 
        :version=>"5.0.13", 
        :description=>"Ruby on Rails SaaS Development Framework.", 
        :build=>"1735524814", 
        :dir=>"/gem/installation/path"
    }
]

# Get information of specific engine
LesliSystem.engine("Lesli")

# Result:
{
    :code=>"lesli", 
    :name=>"Lesli", 
    :path=>"/lesli", 
    :version=>"5.0.13", 
    :description=>"Ruby on Rails SaaS Development Framework.", 
    :build=>"1735524814", 
    :dir=>"/gem/installation/path"
}

# Get specific property of information of specific engine
LesliSystem.engine("Lesli", "path")

# Result:
"/lesli"
```

### Documentation
* [website](https://www.lesli.dev/)
* [database](./docs/database.md)
* [documentation](https://www.lesli.dev/gems/gems/)


### Get in touch with Lesli

* [Email: hello@lesli.tech](hello@lesli.tech)
* [Website: https://www.lesli.tech](https://www.lesli.tech)
* [Twitter: @LesliTech](https://twitter.com/LesliTech)


### License
-------
Copyright (c) 2025, Lesli Technologies, S. A.

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

<hr />
<br />

<p align="center">
    <img width="200" alt="Lesli logo" src="https://cdn.lesli.tech/lesli/brand/app-logo.svg" />
    <h4 align="center">Ruby on Rails SaaS Development Framework.</h4>
</p>


<section class="lesli-markdown-info">
    <p><a target="blank" href="../LesliBuilder/gems/LesliSystem/readme.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2025/06/29</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

