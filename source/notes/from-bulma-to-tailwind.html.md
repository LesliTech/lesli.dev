---
title: From Bulma to Tailwind — Rebuilding Lesli's Frontend Foundation
navigation_title: Bulma to Tailwind
description: Why Lesli moved from Bulma to Tailwind CSS—and how the migration created clearer ownership, stronger design tokens, and a frontend that fits Rails better.
date: 2026-10-05
---

# From Bulma to Tailwind

For a long time, Bulma was an important part of Lesli.

It gave the framework a practical set of components, a readable Sass foundation, and enough structure to build complete business interfaces without designing every element from zero. Headers, forms, notifications, cards, and layouts all benefited from it.

Bulma was not a bad choice, and this migration is not a story about replacing a broken tool with a fashionable one.

It is a story about a framework changing—and eventually needing a frontend foundation that reflects what it has become.

## The problem was not the CSS

As Lesli grew from one application into a framework with engines, gems, shared views, and account-level customization, frontend ownership became harder to understand.

A class could come from Bulma, a Bulma extension, LesliAssets, an engine stylesheet, or an override written years earlier. Changing a global rule might improve one screen and quietly affect another engine. Small visual adjustments often required understanding several layers before knowing where the final style came from.

The problem was no longer whether Bulma could render the interface. It could.

The problem was deciding who owned that interface.

Lesli needed clearer answers to a few questions:

- Which styles belong to the framework?
- Which styles belong to a reusable component?
- Which styles should remain inside an engine?
- Which values are part of the design system?
- Which values can change for each application or account?

Those are architecture questions more than styling questions.

## Why Tailwind fits Lesli now

Tailwind makes presentation explicit where the markup is written. In a server-rendered Rails application, that is valuable.

Most of Lesli's interface is built with ERB, Rails helpers, and reusable view components. Turbo handles navigation and updates, while Alpine.js is used for small pieces of client-side behavior. Tailwind fits this approach because a developer can open a template and understand most of its layout, spacing, responsive behavior, and state styling without tracing a chain of global selectors.

This does make templates more verbose. That tradeoff is real.

But in Lesli, explicit markup is often easier to maintain than an elegant class name whose behavior depends on a distant Sass file and several overrides. The goal is not to eliminate CSS knowledge. It is to keep a visual decision close to the feature that needs it.

Tailwind also gives the framework a useful boundary: local utilities for local presentation, named component styles for patterns that are genuinely reused, and shared tokens for decisions that must remain consistent across the ecosystem.

## More than replacing class names

The migration could not be a mechanical conversion from Bulma classes to Tailwind utilities.

Doing that would preserve the old architecture with different syntax.

Instead, the work started with the application shell: the header, engine selector, navigation, main layout, and application launcher. Shared widgets and engine screens followed. Each migration was an opportunity to remove obsolete wrappers, simplify markup, and decide whether a style belonged to LesliAssets, a reusable view component, or the engine itself.

This incremental approach was slower than rewriting every screen at once, but it kept the framework usable throughout the transition. It also exposed assumptions that a complete rewrite might have hidden until much later.

Some legacy Sass and Bulma-era structures still exist while the remaining screens are reviewed. That is intentional. A migration is safer when old code is removed because its replacement is understood, not simply because a deadline says it should disappear.

## A stylesheet for every responsibility

The new structure separates shared design decisions from package-specific presentation.

The authenticated application loads three layers:

1. **LesliAssets** provides the base theme, design tokens, fonts, icons, and application-shell utilities.
2. **LesliView** provides the styles required by reusable view components.
3. **The current engine** provides the utilities and component rules used by its own features.

That order is simple, but it establishes an important rule: an engine can style its own interface without becoming the place where global framework behavior is defined.

Every package keeps editable Tailwind entrypoints under `source/tailwind`. Generated stylesheets are written to the package's namespaced Rails asset directory, where they can be shipped with the gem and loaded through the normal asset pipeline.

This keeps build tooling out of consuming applications. Developers using Lesli receive compiled assets; developers contributing to Lesli can rebuild the ecosystem from its sources.

## Building across a modular workspace

A framework made of many packages needs more than a single CSS command.

LesliAssets now includes a builder that discovers every `*.tailwind.css` entrypoint across the workspace. It calculates the correct namespaced destination for each application, engine, or gem, then compiles them independently. Development, production, and watch modes all use the same discovery rules.

This matters because engines remain autonomous. LesliAdmin, LesliShield, LesliDashboard, and the other packages can own their source files and generated assets without copying one enormous stylesheet into every module.

The builder is deliberately small and testable. Compiler execution and reporting are isolated, failed builds return a useful status, and watch mode starts one process per entrypoint so the complete workspace can evolve together.

Build tooling is not the most visible part of a design migration, but it is what turns a visual direction into a repeatable development workflow.

## Tokens before arbitrary values

Moving to Tailwind also forced Lesli to clarify its color system.

Utilities make it very easy to choose a color quickly. Without rules, that convenience can produce a different kind of inconsistency: dozens of almost-correct blues, status colors used as decoration, and arbitrary values that cannot be changed coherently later.

For that reason, Lesli's Tailwind theme is built on explicit tokens.

Numbered `primary` values represent the stable Lesli Blue palette. Unnumbered runtime tokens such as `primary`, `background`, `header`, and `foreground` can follow the active application's customization. Semantic palettes communicate success, information, warning, and danger, while categorical palettes distinguish groups without implying status.

The utility class is local, but the value behind it belongs to the shared system.

This relationship between utilities and tokens is one of the most important outcomes of the migration. Tailwind gives developers speed without requiring the visual identity to become accidental.

## What became easier—and what requires discipline

The new foundation has made several things clearer:

- A template reveals its responsive and visual behavior directly.
- Engines can ship focused stylesheets instead of depending on global overrides.
- Shared components have an explicit home.
- Brand, semantic, categorical, and runtime colors use the same token system.
- Generated assets can be built consistently across the workspace.

Tailwind does not solve every frontend problem automatically.

Complete utility names must be visible to the compiler, so dynamically constructing fragments such as `bg-#{color}-500` is unreliable. State-to-style mappings need complete class strings. Source paths must be declared carefully. Repeated visual patterns still need judgment: some should remain local utilities, while others deserve a reusable component.

The migration replaced one set of conventions with another. The improvement comes from making those conventions explicit and giving them clear ownership.

## A frontend that feels more like Rails

The larger direction is a Rails-first frontend.

Lesli already moved away from a Vue single-page application toward server-rendered views, Hotwire, and small, focused interactions. Tailwind completes another part of that transition. It lets the interface stay close to Rails templates while LesliAssets and LesliView provide the shared foundation needed by a framework.

The result is not less design. It is design expressed through clearer boundaries.

Bulma helped Lesli reach this point, and its influence remains in many of the interface patterns that survived the migration. Tailwind is now helping those patterns become easier to see, own, customize, and evolve across the complete ecosystem.

There is still migration work ahead, but the direction is settled: shared tokens, package-owned styles, server-rendered interfaces, and as little hidden behavior as possible.

The next note will move from how Lesli looks to how Lesli proves that it works: the role of **LesliTesting** in creating one consistent testing foundation for the framework, engines, and gems.
