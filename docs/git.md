---
sidebar_position: 1
---

# Git Fabulous

## Basics

Use `git status` to check your git status.

Use `git add` to stage your files.

Use `git commit` to commit your staged files.

Use `git push` to push your committed staged files to the cloud (e.g., GitHub for most).

Example:
- your `git.md` file is in your `docs` directory

```bash
$ git status                                                                                                                                                                                          
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/git.md

nothing added to commit but untracked files present (use "git add" to track)


$ git add docs/git.md # starts tracking this file

git commit -m 'hello world' # -m 
```




## Git Tricky

Ever wondered how you can enter single quotes or double quotes in your git commit message?

```

git commit -a -m 'adds explicit trailingSlash site config per deployment warning/recommendation: "'"When deploying to GitHub Pages, it is better to use an explicit '"'trailingSlash'"' site config.
Otherwise, GitHub Pages will add an extra trailing slash to your site urls only on direct-access (not when navigation) with a server redirect.
This behavior can have SEO impacts and create relative link issues."'"'