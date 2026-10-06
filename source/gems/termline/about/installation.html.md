# Installation

Termline provides formatted terminal output for Ruby applications, scripts, Rake tasks, and command-line tools. It has no runtime gem dependencies and does not require Rails.

## Requirements

Termline supports Ruby 2.7.2 or newer.

Add it to the current bundle:

```shell
bundle add termline
```

Require the gem when Bundler does not load it automatically:

```ruby
require "termline"
```

Verify the installation:

```ruby
Termline.success "Termline is ready"
```

The public helpers print directly to standard output. Begin with [Messages](/gems/termline/messages), then use [Lists](/gems/termline/lists), [Tables](/gems/termline/tables), and [Separators and spacing](/gems/termline/separator) as needed.

<section class="lesli-markdown-info">
    <p><a target="blank" href="https://github.com/LesliTech/Termline/tree/master/docs/about/installation.md"><i class="ri-external-link-fill"></i>&nbsp;Edit this page</a><p/>
    <p><b>Last Update: </b>2026/10/06</p>
</section>

<!-- This code was automatically generated -->
<!-- to update this docs please run rake docs:build -->

