---
title: Info Frontmatter Config
icon: config
category:
  - Config
tag:
  - Frontmatter
  - Info
---

You can set infomation for page with the following frontmatter options.

## title

- Type: `string | boolean`
- Required: No

Current page’s title. Markdown’s first h1 by default.

## description

- Type: `string | boolean`
- Required: No

Current page’s description.

## icon

- Type: `string`
- Required: No

FontClass of the current page icon (recommended).

## author

- Type: `Author | boolean`
- Required: No

```ts
type AuthorInfo = { name: string; url?: string };

type Author = string | string[] | AuthorInfo | AuthorInfo[];
```

Show the author of the current page. If you don’t fill it, you will fall back to the default author.

::: tip

When setting default author in themeConfig, you can set `false` to prevent showing the default author.

:::

## isOriginal

- Type: `boolean`
- Default: `false`

Whether the current article is original.

## date

- Type: `DateString`
- Required: No
- Format: `YYYY-MM-DD` or `YYYY/MM/DD hh:mm:ss`

Set the writing time of the current page.

## category

- Type: `string | string[]`
- Required: No

Set the category of the current page.

## tags

- Type: `string | string []`
- Required: No

Set the label of the current page.

## sticky

- Type: `boolean | number`
- Default: `false`

Sets whether the current article is pinned in the list. When fill in with number, greater ones come before smaller ones.

## star

- Type: `boolean | number`
- Default: `false`

Sets whether the current article is pinned in the article list in blog theme. When fill in with number, greater ones come before smaller ones.

## article

- Type: `boolean`
- Default: `true`

Whether to add the article to the article list.

## timeline

- Type: `boolean`
- Default: `true`

Whether to add the article to the timeline list.

## image

- Type: `string`
- Required: No

Current page’s image，needs an absolute path.