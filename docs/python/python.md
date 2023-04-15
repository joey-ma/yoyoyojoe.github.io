---
sidebar_position: 1
---

# Python

## Getting started

To check if Python is installed on your system **and** is accessible in the `PATH` environment variable, run:

```bash
python --version
```

For example: 

```bash
joey@Joeys-MacBook-Pro ~ % python --version
zsh: command not found: python
joey@Joeys-MacBook-Pro ~ % python3.10 --version
Python 3.10.9
```

To only check if Python3.10 is accessible in the `PATH`, run:

```bash
joey@Joeys-MacBook-Pro ~ % which python3.10
/opt/homebrew/bin/python3.10
```

This command will output the path to the python3.10 executable if it is installed and accessible in the PATH environment variable. If the command does not produce any output, it means that python3.10 is not accessible in the PATH.



If Python is installed but not accessible in the `PATH`, you can add its installation directory to the `PATH` environment variable by running the following command:

```bash
export PATH=$PATH:/path/to/python/bin
```