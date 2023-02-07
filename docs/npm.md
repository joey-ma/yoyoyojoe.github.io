# npm

If you have a folder with subfolders, and you want to access each subfolder at the project root directory, you can use the built-in `--prefix`.

For example:

```json
"scripts": {
  "client": "npm start --prefix client",
  "server": "npm start --prefix server",
}
```

You'll need different terminals to keep the apps running though: `npm run client` in one terminal and `npm run server` in another terminal.

You can also use [`concurrently`](https://www.npmjs.com/package/concurrently).

```json
"scripts": {
  "client": "cd client && npm start",
  "server": "cd server && npm start",
  "assets": "cd assets && ionic serve",
  "start": "concurrently \"npm run client\" \"npm run server\" \"npm run assets\" ",
},
...
"devDependencies": {
  "concurrently": "^1.0.0"
}
```

[Question @ Stack Overflow](https://stackoverflow.com/questions/32783885/is-it-possible-to-use-npm-to-run-scripts-in-multiple-subfolders)

