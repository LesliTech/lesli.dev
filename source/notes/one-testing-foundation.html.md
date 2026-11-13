---
title: One Testing Foundation for the Entire Lesli Ecosystem
navigation_title: One Testing Foundation
description: How LesliTesting gives Rails applications, engines, and Ruby gems one consistent foundation for tests, coverage, and reporting.
date: 2026-11-11
---

# One Testing Foundation for the Entire Lesli Ecosystem

A modular framework needs more than shared architecture and a consistent interface. Its applications, engines, and gems also need a reliable way to prove that they continue to work together.

That is the role of **LesliTesting**.

LesliTesting is not a new testing framework and it does not replace Minitest. It provides one shared foundation for configuring, running, understanding, and measuring the tests that already belong to each project.

The goal is simple: whether a developer is working on the main Rails application, an isolated engine, or a standalone Ruby gem, the testing experience should feel familiar and produce results that mean the same thing.

## The problem was consistency, not missing tests

Lesli has always had tests.

The difficult part appeared as the ecosystem became more modular. A Rails application boots differently from an engine. An engine needs a dummy application, its own migrations, and fixtures from more than one package. A Ruby gem should remain independent from Rails. Coverage must start before application code is loaded, while reports must be useful both in a terminal and in CI.

Each repository could solve those problems independently. Over time, however, small differences become expensive:

- One suite starts coverage too late and silently misses loaded files.
- Another prints useful local output but does not generate a report CI can consume.
- An engine works locally because migrations were copied manually, then fails when installed from its packaged gem.
- A filtered test command matches nothing but still appears successful.
- Coverage thresholds mean different things in different repositories.

None of those problems comes from Minitest itself. They come from every project having to rediscover the same integration details.

LesliTesting moves those details into one place.

## Three project types, one contract

The public API has three profiles:

```ruby
LesliTesting.app("LesliBuilder")
LesliTesting.engine("LesliShield")
LesliTesting.gem("Termline")
```

These profiles do not pretend that every project has the same runtime.

The application profile integrates with a complete Rails application. The engine profile waits for the dummy application to boot, then connects the engine and shared Lesli resources to that test environment. The gem profile configures Minitest and coverage without loading Rails-only behavior.

What they share is the contract around the test process:

- one Minitest reporting format;
- one way to enable coverage;
- one place to configure the minimum coverage threshold;
- predictable process results for local development and CI;
- documentation that uses the same concepts across every repository.

The profile is selected once, near the beginning of `test/test_helper.rb`. After that, the project continues using the normal Rails or Ruby testing conventions appropriate for its type.

## A thin layer around Minitest

It was important for LesliTesting to remain a small layer around standard tools.

Tests still inherit from the usual Rails and Minitest base classes. Assertions remain Minitest assertions. Rails continues to discover test files and fixtures. Each project owns its test cases, test data, helpers, and decisions about what behavior needs protection.

LesliTesting standardizes the surrounding infrastructure instead of introducing a second testing language.

This distinction matters. Shared tooling should remove repeated configuration, but it should not make the underlying framework difficult to see. A developer who already understands Rails testing should be able to read a Lesli test suite without first learning a proprietary DSL.

The result is less code in each repository and fewer hidden differences between them, while the actual tests remain ordinary Ruby.

## Load order is part of correctness

Coverage is only accurate when measurement begins before the code being measured is loaded.

That sounds obvious, but Rails loads a large amount of code during boot. If SimpleCov is configured after the application, engine, or gem has already been required, those files cannot be recovered retroactively. The final percentage may look precise while describing only part of the process.

LesliTesting makes the initialization order explicit:

1. Require `lesli_testing`.
2. Select the application, engine, or gem profile.
3. Load the Rails environment or the Ruby library under test.
4. Start Minitest.
5. Finalize the report and coverage result when the process exits.

When `COVERAGE=true` is present, native Ruby line coverage begins as soon as LesliTesting is required. The selected profile then attaches the correct SimpleCov configuration before the project runtime is loaded.

This is one of the least visible parts of the gem, but also one of the most important. A shared coverage percentage is useful only when every repository measures it with the same rules.

The complete initialization sequence and process behavior are documented in the [LesliTesting execution guide](/gems/testing/about/execution).

## Engines need a real Rails environment

Rails engines create the most complex testing boundary in the ecosystem.

An engine is modular, but it does not run alone. Controllers, routes, models, authentication, fixtures, and migrations depend on a host Rails application. That is why an engine test suite includes a complete dummy application: it provides the real boot process in which the engine is expected to work.

LesliTesting uses that environment instead of trying to simulate it.

After the dummy application boots, the engine profile registers fixture paths from the current engine and the shared Lesli foundation. It also adds the dummy application, engine, and Lesli migration directories to the test environment. These paths are applied only while running tests and are de-duplicated before Rails uses them.

This lets an engine test its own behavior together with the contracts it receives from Lesli without copying shared migrations or fixtures into every repository.

It also reinforces an important rule: the dummy application is part of the engine's test infrastructure, not disposable scaffolding. Keeping its normal Rails structure makes local execution, eager loading, and CI behave much more like a real installation.

The practical setup is covered in [Testing Rails engines](/gems/testing/testing/engines).

## Coverage as a guardrail

Coverage is useful when it helps reveal unprotected behavior. It is less useful when it becomes a number optimized without context.

For that reason, ordinary LesliTesting runs keep coverage disabled. Developers can run the suite quickly while working, then enable the complete report explicitly:

```shell
COVERAGE=true bin/rails test
```

Each project can configure an appropriate minimum line-coverage threshold. A successful test suite that falls below that threshold receives a distinct process result, so CI can distinguish a coverage regression from a failing assertion.

The threshold is a guardrail, not a substitute for judgment. A high percentage cannot prove that the correct behavior was tested, and a single number cannot describe the quality of every assertion. What it can do is make a sudden loss of exercised code visible and prevent that change from passing unnoticed.

Consistency makes the signal more valuable. When applications, engines, and gems generate coverage under the same lifecycle, their reports are easier to interpret and maintain.

## Output for people and automation

A test runner has two audiences.

Developers need output that makes failures easy to find. CI needs files and exit codes that can be processed without interpreting terminal decoration.

LesliTesting configures both.

Its Minitest reporter shows individual results, execution time, failures, errors, warnings, skips, and a final summary in a consistent format. Large suites can use `QUIET=true` to hide individual successful test lines while keeping the information needed to understand a failure.

When coverage is enabled, the process prints a console summary and writes a Cobertura report to `coverage/coverage.xml`. CI services can publish that file without requiring each repository to invent its own formatter configuration.

Process results are part of the contract as well. Passing suites return success, test failures return failure, and coverage below the configured minimum has its own result. A test filter that matches no tests is treated as a failure instead of allowing an empty run to look green.

These details are small when viewed individually. Together, they make local feedback clearer and automation more trustworthy.

## Shared infrastructure, local responsibility

Centralizing testing infrastructure does not centralize ownership of quality.

LesliTesting can provide profiles, reporters, fixture integration, migration paths, coverage formatters, and shared test base classes. It cannot decide which business rules matter, which boundaries need integration tests, or which regression is most dangerous for a specific engine.

Those decisions remain with each project.

This is the same ownership model Lesli follows elsewhere. LesliAssets owns shared design tokens, while each engine owns its interface. Lesli Core provides common application conventions, while each product owns its workflows and data. LesliTesting owns the common testing mechanics, while every package owns the behavior it promises.

The separation is useful because it lets the common layer improve without making every suite identical. A Rails application can test complete user flows. An engine can focus on its mounted routes and domain behavior. A Ruby gem can remain fast and independent. All three can still report their results through the same foundation.

## Confidence for a modular framework

Modularity creates flexibility, but it also creates more boundaries where assumptions can drift.

A shared testing foundation does not remove those boundaries. It makes them easier to exercise consistently. It gives contributors a familiar starting point, makes failures easier to compare between repositories, and gives CI a stable contract for deciding whether a change is ready.

Most importantly, it keeps Lesli close to the Rails ecosystem. Minitest remains Minitest. Rails engines still boot through Rails. SimpleCov still measures Ruby code. LesliTesting connects those tools and expresses the conventions the framework needs around them.

The result is not more testing machinery.

It is less uncertainty about how the machinery works.

That is what LesliTesting is meant to provide: one dependable foundation for proving that a modular framework, its engines, and its supporting gems continue to work as they evolve together.

## Explore LesliTesting

- [LesliTesting overview](/gems/testing/)
- [Testing Rails applications](/gems/testing/testing/applications)
- [Testing Rails engines](/gems/testing/testing/engines)
- [Testing Ruby gems](/gems/testing/testing/gems)
- [Reporter, coverage, fixtures, and helpers](/gems/testing/about/tools)
