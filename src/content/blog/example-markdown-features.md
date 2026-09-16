---
title: "Example: Markdown feature reference"
titleZh: "示例：Markdown 功能参考"
description: "Example content used to verify the technical blog's Markdown rendering."
descriptionZh: "用于验证技术博客 Markdown 渲染的示例内容。"
date: 2026-09-16
tags: [Example, Markdown, Documentation]
category: Example Content
categoryZh: 示例内容
draft: false
---

> **Example content:** This article exists only to verify the blog layout and Markdown features.

## A small reference

This paragraph includes `inline code`, **bold text**, and a [sample link](https://astro.build/). The code below is a non-production example.

```ts
type LearningNote = {
  topic: string;
  active: boolean;
};

const example: LearningNote = { topic: 'Astro Content Collections', active: true };
console.log(example);
```

### A comparison table

| Format | Useful for | Example use |
| --- | --- | --- |
| Markdown | Fast writing | Technical notes |
| MDX | Interactive writing | Component examples |

#### A short list

- Keep notes concise.
- Link to useful sources.
- Revisit assumptions.

1. Define the question.
2. Test the idea.
3. Record the result.

<img src="/images/example-diagram.svg" alt="Example abstract diagram" width="960" height="480" loading="lazy" />
