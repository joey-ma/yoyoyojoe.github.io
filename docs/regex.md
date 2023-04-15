# Regex

To match a string that contains only those characters (or an empty string), try

```
"^[a-zA-Z0-9_]*$"
```

This works for .NET regular expressions, and probably a lot of other languages as well.

Breaking it down:

```
^ : start of string
[ : beginning of character group
a-z : any lowercase letter
A-Z : any uppercase letter
0-9 : any digit
_ : underscore
] : end of character group
* : zero or more of the given characters
$ : end of string
```

If you don't want to allow empty strings, use `+` instead of `*`.