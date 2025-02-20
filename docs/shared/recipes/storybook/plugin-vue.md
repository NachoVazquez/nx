---
title: Set up Storybook for Vue Projects
description: This guide explains how to set up Storybook for Vue projects in your Nx workspace.
---

# Set up Storybook for Vue Projects

This guide will walk you through setting up [Storybook](https://storybook.js.org) for Vue projects in your Nx workspace.

{% callout type="warning" title="Set up Storybook in your workspace" %}
You first need to set up Storybook for your Nx workspace, if you haven't already. You can read the [Storybook plugin overview guide](/nx-api/storybook) to get started.
{% /callout %}

## Generate Storybook Configuration for a Vue project

You can generate Storybook configuration for an individual Vue project by using the [`@nx/vue:storybook-configuration` generator](/nx-api/vue/generators/storybook-configuration), like this:

```shell
nx g @nx/vue:storybook-configuration project-name
```

## Auto-generate Stories

The [`@nx/vue:storybook-configuration` generator](/nx-api/vue/generators/storybook-configuration) has the option to automatically generate `*.stories.ts` files for each component declared in the library. The stories will be generated using [Component Story Format 3 (CSF3)](https://storybook.js.org/blog/storybook-csf3-is-here/).

```text
<some-folder>/
├── MyComponent.vue
└── MyComponent.stories.ts
```

If you add more components to your project, and want to generate stories for all your (new) components at any point, you can use the [`@nx/vue:stories` generator](/nx-api/vue/generators/stories):

```shell
nx g @nx/vue:stories --project=<project-name>
```

{% callout type="note" title="Example" %}
Let's take for a example a library in your workspace, under `libs/feature/ui`, called `feature-ui`. This library contains a component, called `my-button`.

The command to generate stories for that library would be:

```shell
nx g @nx/vue:stories --project=feature-ui
```

and the result would be the following:

```text
<workspace name>/
├── apps/
├── libs/
│   ├── feature/
│   │   ├── ui/
|   |   |   ├── .storybook/
|   |   |   ├── src/
|   |   |   |   ├──lib
|   |   |   |   |   ├──my-button
|   |   |   |   |   |   ├── MyButton.vue
|   |   |   |   |   |   ├── MyButton.stories.ts
|   |   |   |   |   |   └── etc...
|   |   |   |   |   └── etc...
|   |   |   ├── README.md
|   |   |   ├── tsconfig.json
|   |   |   └── etc...
|   |   └── etc...
|   └── etc...
├── nx.json
├── package.json
├── README.md
└── etc...
```

{% /callout %}

## More Documentation

You can find all Storybook-related Nx topics [here](/nx-api#storybook).

For more on using Storybook, see the [official Storybook documentation](https://storybook.js.org/docs/vue/get-started/introduction).
