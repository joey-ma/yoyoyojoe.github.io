---
sidebar_position: 6
---

# Shell

## Terminal

## Bash

When reading code blocks, you'll see a dollar sign `$` to indicate there the command goes for most `bash` shell environments.

```bash
$ cd change_to_this_directory
```

## zsh

In most cases, `zsh` has replaced `bash` in MacOS. Most commands are the same as `bash` commands.

You can find how how to change to using zsh as default here.

Open the Terminal on your MAC
Type sh /path/to/file
And press enter to run the file

Resources:
https://www.thetechfixr.com/how-to-run-bat-file-on-mac/
[17 Shell Builtin Commands](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

# commands

### What does the following shell command mean?
`sed -i 's/\r$//g' /usr/src/app/entrypoint.sh`

The shell command `sed -i 's/\r$//g' /usr/src/app/entrypoint.sh` performs the following actions:

- `sed` is the command-line stream editor for filtering and transforming text.
- `-i` option is to edit the file in place, meaning the changes will be saved back to the original file.
- `'s/\r$//g'` is a sed script that searches for a regular expression pattern `\r$` (carriage return character at the end of the line) and replaces it with an empty string `//` globally `g` for each line in the file.
- `/usr/src/app/entrypoint.sh` is the file being edited.
In summary, this command removes carriage return characters at the end of each line in the `/usr/src/app/entrypoint.sh` file.

### What are carriage return characters

Carriage return characters (often represented as \r) are special control characters used in text files to indicate the end of a line of text and the beginning of a new one. In the early days of computing, typewriters used a carriage return lever to move the paper back to the beginning of the line, and the term "carriage return" was adopted to refer to the corresponding control character.

In modern computing, the end of a line of text is often represented by a combination of two characters, a carriage return (\r) and a line feed (\n) character, collectively known as a "newline". On Windows systems, lines are usually represented by a carriage return followed by a line feed (\r\n). On Unix-based systems, including Linux and macOS, lines are usually represented by just a line feed (\n).

### What does `chmod +x /usr/src/app/entrypoint.sh` mean?

The command `chmod +x /usr/src/app/entrypoint.sh` is used to change the file permissions of the file `/usr/src/app/entrypoint.sh`.

- `chmod` is a Unix command that stands for "change mode", and it's used to change the permissions on files and directories.
- `+x` means "add execute permission". This means that the execute permission bit is set for the file, allowing it to be executed as a program.
- `/usr/src/app/entrypoint.sh` is the file whose permissions are being changed.

In summary, this command sets the execute permission bit on the `/usr/src/app/entrypoint.sh file`, making it executable. This is often used as a preparation step before running a shell script, so that the script can be executed by the operating system as a program.

`file entrypoint.sh`

Check your working directory in your script / Dockerfile!

https://nickjanetakis.com/blog/fixing-exec-format-errors-with-docker-entrypoint-scripts-on-windows

