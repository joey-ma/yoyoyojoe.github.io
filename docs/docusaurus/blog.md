---
sidebar_position: 2
---

# Blog

From time to time, I would like to document my journey. I also enjoy helping others and sharing what's useful.

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2022-12-24-merry-christmas/index.md`
- `2023-01-01-first-blog-post.md`

A blog post folder can be convenient to co-locate blog post images:

Example: [Merry Christmas 2022](http://localhost:3000/blog/merry-christmas-2022)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.

## MDX Blog Post

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::