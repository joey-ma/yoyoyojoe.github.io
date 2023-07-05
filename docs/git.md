# Git Fabulous

## Git Process

Use `git checkout -b <your_branch>` to update files in the working tree to match the version in the index or the specified tree.

::: notes:
### `git checkout [<branch>]`
To prepare for working on `<branch>`, switch to it by updating the index and the files in the working tree, and by pointing `HEAD` at the branch. Local modifications to the files in the working tree are kept, so that they can be committed to the `<branch>`.

If `<branch>` is not found but there does exist a tracking branch in exactly one remote (call it `<remote>`) with a matching name and --no-guess is not specified, treat as equivalent to

Specifying `-b` causes a new branch to be created as if [`git branch`][1] were called and then checked out.
:::
## Basics

Use `git clone <YOUR_FORKED_REPO_URL>` to clone your forked repo onto your local machine. A nickname `origin` is used by default as your local repo name.

Use `git add` to stage your files.

Use `git commit` to commit your staged files.

Use `git push` to push your committed staged files to the cloud (e.g., GitHub for most).

Use `git remote add <REPOSITORY_NICKNAME> <REMOTE_REPO_URL>` to add your remote repository with your repo name and remote url entered. `git clone` essentially did this [+ `git fetch` and `git pull`](https://git-scm.com/docs/git-clone).

Use `git remote -v` to check your current remote setup.

Use `git status` to check your git status.

## Git setup

Example:
- if you had forked my GitHub repo `press-play`, and you do everything on the `dev` branch and use `main` only for deployment.


```bash
$ git clone https://github.com/<YOUR_GITHUB_USERNAME>/press-play.git # please replace <YOUR_GITHUB_USERNAME>

$ git remote -v
origin  https://github.com/<YOUR_GITHUB_USERNAME>/press-play.git (fetch)
origin  https://github.com/<YOUR_GITHUB_USERNAME>/press-play.git (push)

$ git remote add upstream https://github.com/joey-ma/press-play.git # note the nickname upstream and the web URL being where you forked the repo from

$ git remote -v
origin  https://github.com/<YOUR_GITHUB_USERNAME>/press-play.git (fetch)
origin  https://github.com/<YOUR_GITHUB_USERNAME>/press-play.git (push)
upstream https://github.com/joey-ma/press-play.git
upstream https://github.com/joey-ma/press-play.git

```

## Git started

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

You have to enter a git commit message. If you do not enter a message, the commit will fail, and you will see:
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

Then we can push to our remote repo.

```bash
$ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 353 bytes | 353.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:joey-ma/joey-ma.github.io.git
   1f7307a..b0fcfad  main -> main
```

```bash
$ git push
```

:::note

If you're using `git push` for the first time without using `git clone`; i.e., setting up your git manually using `git remote add <REPOSITORY_NICKNAME> <REMOTE_REPO_URL>`, follow CLI instructions to use `git push --set-upstream <REPOSITORY_NICKNAME> <BRANCH_NAME>` or use the `-u` flag to set the default remote repo & branch you'd like to push type less in the future. For example: 
```bash
$ git push
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

$ git push --set-upstream origin main # does exactly the same thing as next line command
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 353 bytes | 353.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:joey-ma/joey-ma.github.io.git
   1f7307a..b0fcfad  main -> main

$ git push -u origin main # only need to do once though
Everything up-to-date

# now you only need to enter "git push" for all future pushes

```
:::

## Git Tricky

Ever wondered how you can enter single quotes or double quotes in your git commit message?

Let's use `git commit -a -m` in this example. The [`-a`](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--a) flag tells git to automatically stage all files that have been modified or deleted, but new files you have not told Git about are not affected. The [`-m`](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--mltmsggt) flag tells git to use the given `<msg>` as the commit message.

This is helpful to frequently document changes with one-line commands. Probably best to keep comments short, though.

```bash

# example 1
git commit -a -m 'adds "git tricky"'

# example 2
# including single quotes within double quotes within the commit message which is in single quotes 
git commit -a -m 'per deployment warning/recommendation: "'"When deploying to GitHub Pages, it is better to use an explicit '"'trailingSlash'"' site config.
Otherwise, GitHub Pages will add an extra trailing slash to your site urls only on direct-access (not when navigation) with a server redirect.
This behavior can have SEO impacts and create relative link issues."'"'
# outputs:
# per deployment warning/recomm...
# ...endation: "When deploying to GitHub Pages, it is better to use an explicit 'trailingSlash' site config.
# Otherwise, GitHub Pages will add an extra trailing slash to your site urls only on direct-access (not when navigation) with a server redirect.
# This behavior can have SEO impacts and create relative link issues."

# example 3
# multi-paragraph commit message
git commit -a -m 'include a multi-paragraph commit message, quoting "'"Probably best to keep comments short, though. '"'Wink...'"'"'"' -m 'but sometimes you have to'
# outputs:
# include a multi-paragraph commit, quoting "Probably best to keep comm…
# …ents short, though. 'Wink...'"
# but sometimes you have to

# example 4
# multi-paragraph commit message, I think this looks better though
git commit -a -m 'include a multi-paragraph commit message,' -m 'quoting "'"Probably best to keep comments short, though. "'"' -m 'but sometimes you have to! '"'Wink...'"''
# (don't mind the formatting here)
# outputs:
# include a multi-paragraph commit, 
# quoting "Probably best to keep comments short, though. "
# but sometimes you have to! 'Wink...'
```

Ref: Stack overflow [link](https://stackoverflow.com/a/16033290/16330123)

Now go and git started!

## Additional Resources
- [git-scm](https://git-scm.com/docs)  
- [joshnh/Git-Commands](https://github.com/joshnh/Git-Commands)
- [GitHub/Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [joey-ma/git-legendary-chainsaw](https://github.com/joey-ma/git-legendary-chainsaw)
- [Master the Essentials of Git in Under 2 Hours](https://www.donnfelker.com/git/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [freeCodeCamp/Sync Your Fork](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/)

- https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors

[1]:https://git-scm.com/docs/git-branch

