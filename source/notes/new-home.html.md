---
title: A New Home for Lesli
navigation_title: New Home
description: The journey behind the new lesli.dev—and how simplicity, symmetry, and a clearer color system gave the framework a more coherent identity.
date: 2026-09-28
---

# A New Home for Lesli

Today I am releasing a new version of [lesli.dev](/).

The previous website was not bad. In fact, I still liked it.

That made this redesign more difficult than starting from an empty page. The goal was not to replace something broken. The goal was to understand what was already working, remove what was no longer necessary, and give Lesli a clearer way to present itself.

The result is a quieter website: more focused, more consistent, and more closely connected to the framework itself.

## Simplicity as a direction

Lesli is a large project. It includes a framework, engines, gems, shared assets, documentation, development tools, and many features that have accumulated over years of work.

It is tempting to show all of that immediately.

But a website does not become clearer simply by displaying more information. The first screen only needs to answer a few questions:

- What is Lesli?
- Who is it for?
- What can I do next?

That led to a centered hero with one message, a short explanation, and two actions: start building or explore the demo. There is no decorative product window competing with the text and no long list of claims before the visitor understands the foundation.

The symmetry is intentional. It gives the message room to breathe and makes the page feel calm, without making it empty.

## The website and the framework

The original welcome page included with the framework was a simplified copy of the old website header. During this redesign, that relationship started moving in both directions.

The new framework welcome page helped define the tone of the new website: direct language, centered content, generous space, and very few distractions. The website then expanded that idea into a complete journey through the SaaS foundation, core features, engines, demo, and development experience.

They are not exact copies of each other, and they should not be. One introduces an installed application; the other introduces the entire project. But they now feel like parts of the same system.

That consistency matters. A developer should not feel that the website, the documentation, and the framework were designed by three unrelated projects.

## Keeping the color

Minimalism can become monotonous very quickly.

An early direction made the page cleaner, but also pushed too much of it toward white surfaces and blue accents. The old core-features section had something worth preserving: it communicated the range of the framework quickly, and its use of color gave the page energy.

Instead of removing that character, I decided to give it more structure.

This became part of a larger effort to clarify how color works across Lesli.

### Finding Lesli Blue

Lesli Blue is now the explicit brand color, with `primary-500` (`#276AD6`) as its canonical token. It identifies Lesli itself and supports primary actions, links, focus states, and selected navigation.

But a brand color cannot be responsible for every meaning in an application.

The color system now separates four different jobs:

- **Brand colors** identify Lesli.
- **Semantic colors** communicate states such as success, warning, information, and danger.
- **Categorical colors** distinguish reusable groups without implying status.
- **Collection colors** support business grouping and product-specific organization.

This separation seems small when viewed as a palette, but it solves an important design problem. A blue interface element can now mean “this is Lesli” without also being forced to mean “this is information.” A product category can have a recognizable color without borrowing the language of warnings or success states.

The complete palette and usage guidance now live together in the [Lesli brand documentation](/gems/assets/theme/brand).

## A landing page with a clearer rhythm

The new landing page follows a deliberate sequence.

First, it explains the framework. Then it shows the foundation beneath a SaaS product. After that, it presents the capabilities already available, the engines that extend the platform, a real demo, and finally the development experience.

Each section has a different responsibility:

- The **SaaS foundation** explains the database, backend, and frontend layers.
- **Core features** show what developers receive before writing product-specific code.
- **Engines** demonstrate that Lesli is modular rather than monolithic.
- The **demo** turns abstract capabilities into something visitors can explore.
- The **developer section** brings the message back to Rails conventions, shared tooling, and testing.

The page still contains a lot of information, but it no longer tries to say everything at the same volume.

## One system, different contexts

The redesign also exposed an important distinction between marketing pages and documentation.

The centered navigation works well on the landing page and the catalog pages, where the goal is exploration. Documentation has a different job. It needs persistent local navigation, readable content, and a global header that does not compete with the material.

The new navigation adapts to those contexts instead of forcing one layout everywhere. The same is true for the footer: the landing page keeps the complete site footer, while documentation uses a quieter version that closes the page without overwhelming the final section.

Framework, engine, and gem pages now share reusable catalog components as well. Their content is different, but their structure and interaction patterns are consistent.

This is the kind of reuse I want throughout Lesli—not identical pages, but common foundations that leave room for the right content.

## More than a visual update

Although the most visible changes are on the surface, this work is connected to a broader effort to simplify the frontend foundations of Lesli.

The project is moving away from older Bulma-era assumptions and toward a clearer combination of shared Lesli assets, explicit design tokens, and Tailwind-based application styling. At the same time, LesliTesting is growing into a more consistent foundation for testing the framework, engines, and gems.

Those changes deserve their own notes. They involve different decisions, tradeoffs, and lessons than a website redesign can explain properly.

## A better starting point

The new website is not meant to be a finished statement.

It is a better starting point.

Lesli now has a clearer visual identity, a more intentional color system, reusable structures for its product pages, and documentation that feels connected to the rest of the project without losing its focus.

Most importantly, the website feels more like Lesli: practical, structured, open, and designed to grow.

There is still a lot to build, but now there is a clearer place from which to continue.
