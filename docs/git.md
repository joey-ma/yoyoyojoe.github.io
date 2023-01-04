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
$ git status # let's check the git status of our files                                                                                                                                                                            
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        docs/git.md

nothing added to commit but untracked files present (use "git add" to track)


$ git add docs/git.md # starts tracking this file, note nothing is returned

$ git status # let's check the git status of our files again                                                                                                                                                               
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   docs/git.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docs/git.md

$ git commit # opens up your default editor and prompts you to enter a message for the commit
```

:::tip

You can choose your default editor, with instructions [here](https://docs.github.com/en/get-started/getting-started-with-git/associating-text-editors-with-git).
:::


```COMMIT_EDITMSG
adding git tricks to docs

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# Changes to be committed:
#	new file:   docs/git.md
#
# Changes not staged for commit:
#	modified:   docs/git.md
#

```

:::note

You have to enter a git commit message. If you do not enter a message, the commit will fail.
```
Aborting commit due to empty commit message.
```
:::

Let's assume the last git commit command did not go through because no message was entered.
We can also use `git commit -m` to commit with a message in terminal.

```bash
$ git commit -m 'adds helpful tricks for git operations'
[main 1877fe4] adds helpful tricks for git operations
 1 file changed, 48 insertions(+)
 create mode 100644 docs/git.md
```

## Git Tricky

Ever wondered how you can enter single quotes or double quotes in your git commit message?

Let's use `git commit -a -m` in this example. The [`-a`](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--a) flag tells git to automatically stage all files that have been modified or deleted, but new files you have not told Git about are not affected. The [`-m`]((https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--mltmsggt)) flag tells git to use the given <msg> as the commit message.

This is helpful to frequently document changes in one command line. Probably best to keep comments short, though.

```bash

git commit -a -m 'adds "git tricky"'

# or 
git commit -a -m 'per deployment warning/recommendation: "'"When deploying to GitHub Pages, it is better to use an explicit '"'trailingSlash'"' site config.
Otherwise, GitHub Pages will add an extra trailing slash to your site urls only on direct-access (not when navigation) with a server redirect.
This behavior can have SEO impacts and create relative link issues."'"'

# or 
git commit -a -m 'include a multi-paragraph commit, quoting "'"Probably best to keep comments short, though. '"'Wink...'"'"'"' -m 'but sometimes you have to'

```

Stack overflow [link](https://stackoverflow.com/a/16033290/16330123)

