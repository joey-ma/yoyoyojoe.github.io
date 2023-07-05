# Google Chrome DevTools

Google Chrome DevTools is super useful and helpful, but from time to time, we like to clean up our tool box.

Why am I getting this error message? 

```console
[warning] DevTools failed to load source map: Could not load content for file:///Users/joey-ma/Documents/file_path/examine_the_page/bootstrap.bundle.min.js.map: System error: net::ERR_FILE_NOT_FOUND
[warning] DevTools failed to load source map: Could not load content for file:///Users/joey-ma/Documents/file_path/examine_the_page/bootstrap.min.css.map: System error: net::ERR_FILE_NOT_FOUND
```

A search on Stack Overflow leads to various clues, but I only have a simple `index.html` referencing `bootstrap.min.css` (and `bootstrap.bundle.min.js`).

It turns out, that in this `bootstrap.min.css`, it probably has a line like below as the last line:

```css
/*# sourceMappingURL=bootstrap.min.css.map */
```

or 

```js
//# sourceMappingURL=include.prepload.js.map
```

## A Source Map Issue

This `# sourceMappingURL=abc` is a special comment that can be added to the end of a JavaScript (or CSS) file to tell the browser where to find the source map file for that script. 

Source maps are used by developers to map the minified or transpiled code to the original source code, so that they can more easily debug and troubleshoot their code. They provide a way to see the original code in the browser's developer tools, even if the code has been minified or transpiled for performance or security reasons.

This warning message means that Google Chrome was not able to find the source map file `bootstrap.min.css.map` at the specified file path.

**Delete it and the error will go away.**

When the browser sees a # sourceMappingURL comment at the end of a JavaScript file, it will try to fetch the corresponding source map file and use it to map the minified or transpiled code to the original source code. If the source map file cannot be found or is invalid, the browser may show a warning or error message in the console.

While it can be a useful tool when developing, it could also cause unnecessary error/warning messages.

It's worth noting that not all JavaScript files include a source map directive, and not all browsers support source maps. However, if you're developing JavaScript code and using tools like minifiers, bundlers, or transpilers, adding a source map directive can be very helpful for debugging and troubleshooting your code.

## Using Webpack

If you are using webpack, to turn on source map, add this to your `webpack.config.js`:

```js
module.exports = {
    devtool: "source-map",
}
```

Reference:  
- [Error message "DevTools failed to load SourceMap: Could not load content](https://stackoverflow.com/a/67559032/16330123)
- [How can I use JavaScript source maps?](https://stackoverflow.com/questions/21719562/how-can-i-use-javascript-source-maps-map-files)
- [Webpack Config Basics - 8. Source-maps](https://www.youtube.com/watch?v=fGed9phNkto)

