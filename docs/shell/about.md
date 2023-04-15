# About

Shell is the outermost layer around the operating system.

In computing, a shell is a computer program that exposes an operating system's services to a human user or other programs. 

In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation

Shell can also be seen as a program that processes commands and returns output because it is like an application running commands. It presents the CLI instead of relying on the GUI with a mouse/keyboard/touchscreen combination.

A command-line interface (CLI) is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer. Command-line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces.

## Terminal

Your terminal (command line interpreter) is literally called **Terminal** if you're on a Mac, or **Command Prompt** aka *Windows Command Processor* aka `cmd` if you're on a Windows. 

[Windows PowerShell][powershell-vs-cmd] is the new Microsoft shell that combines the old CMD functionality with a new scripting/cmdlet instruction set with built-in system administration functionality.

Yet, I don't know why [Windows Terminal][windows-terminal] is not the default terminal app, but yes, it should be.

## Bash

When reading code blocks, you'll see a dollar sign `$` to indicate there the command goes for most `bash` shell environments.

```bash
$ cd change_to_this_directory
```

## zsh

In most cases, `zsh` has replaced `bash` in MacOS. Most commands are the same as `bash` commands.

You can find how how to change to using zsh as default [here](https://support.apple.com/guide/terminal/change-the-default-shell-trml113/mac#:~:text=The%20default%20shell%20is%20zsh,windows%20and%20tabs%20open%20with.&text=In%20the%20Terminal%20app%20on,shell%20you%20want%20to%20use.).

You can run a script file ending in `.sh` by:  

Open the Terminal on your Mac,  
Type sh /path/to/file  
And press enter to run the file.

Resources:
- https://www.thetechfixr.com/how-to-run-bat-file-on-mac/
- [17 Shell Builtin Commands](https://zsh.sourceforge.io/Doc/Release/Shell-Builtin-Commands.html)

# Popular Commands

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jfvg3CS1X3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Less Popular Commands

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

[powershell-vs-cmd]: https://www.varonis.com/blog/powershell-vs-cmd
[windows-terminal]: https://learn.microsoft.com/en-us/windows/terminal/