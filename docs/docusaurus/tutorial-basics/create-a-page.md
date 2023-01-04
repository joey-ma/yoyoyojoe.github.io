---
sidebar_position: 1
---

# Overview

```
clever-subterfuge
├── blog
│   ├── 2022-12-24-merry-christmas/intro.md
│   ├── 2022-12-31-goodbye-2022.md
│   ├── 2023-01-01-first-blog-post.md
│   └── authors.yml
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── components
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── index.js
│       ├── index.module.css
│       └── markdown-page.js
├── static
│   └── img
├── .gitignore
├── babel.config.js
├── docusaurus.config.js
├── package-lock.json
├── package.json
├── README.md
└── sidebars.js
```

More on structure: https://docusaurus.io/docs/installation

# Create a Page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
