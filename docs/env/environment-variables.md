# Environment Variables

## Background

All applications are typically required to deploy in a development environment before being deployed in the production environment, and it is crucial to be certain that each environment has been set up right. If our production application is using our development credentials, it will be disastrous. 

Environment variables allow us to supervise the configuration of our applications separately from our base code. Separate configurations promote the implementation of our application in different environments (development, test, production), allowing our app to behave differently based on the environment they are running in.  

Benefits: 
- Security: API keys/other secret keys should not be put in plain text in the code to be directly visible. 
- Flexibility: you can introduce conditional statements based on environments like “If production server then do X else if test server then do Y…”. 
- Adoption: Popular services like Azure or Heroku support the usage of environment variables. 

## .env



## Overview: 
- Backend
  - [Express](#express)
  - [dotenv](#dotenv)
- Frontend
  - [CRA](#create-react-app)
  - [Next.js](#nextjs)
  - [Vite](#vite)
  - [Svelte](#vite)

## Backend: 

### Express

There are tools such as `Upstart` to help set your environment variables.  
A super simple one, and a favorite of many, is to use `dotenv`.

References: 
- Learn more here: [Upstart Intro, Cookbook and Best Practices](https://upstart.ubuntu.com/cookbook/#environment-variables).
- [Things to do in your environment / setup @ Express.js](https://expressjs.com/en/advanced/best-practice-performance.html#in-environment)

### dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

It is super easy to use, and it just works. Learn more here: [dotenv @ npmjs](https://www.npmjs.com/package/dotenv)

:::warning
Installing `dotenv` for your frontend application would not be a viable solution as your react app is running in the browser and the browser doesn't support `fs`. And as the dotenv package references `fs` you can't use it for client side code. In fact, you cannot use any modules that references the `fs` module since, again, there is no `fs` module in the browser.

References:
- [`Module not found: Error: Can't resolve 'fs' in dotenv/lib` @ StackOverflow](https://stackoverflow.com/questions/70855580/module-not-found-error-cant-resolve-fs-in-dotenv-lib)
- [`fs` @ Node.js](https://nodejs.org/api/fs.html#file-system)

:::

## Frontend: 

Based on observations (accurate as of 2023/01/25), we can note the following:

### Create React App

In your react app created by using CRA (`create-react-app`), 
- you will have access to (existing) properties such as `process.env.NODE_ENV` as well as the object `process.env` itself;
- you will not get an error when you log `process.env`;
- you will get undefined if you simply tried to access variables stored in your `.env` file;
- you can access to your custom env variables by prepending `REACT_APP_` to your var, e.g., (in your `.env` file) `REACT_APP_PORT=5555`

Reference @ [create-react-app.dev](https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used)

### Next.js

:::danger
to be worked on
:::

For example, Next.js has built-in support for loading environment variables from `.env.local` into `process.env`.

[Next.js #environment-variables](https://nextjs.org/docs/basic-features/environment-variables)
[`next.config.js`](https://nextjs.org/docs/api-reference/next.config.js/environment-variables)


:::important

.env.*.local files are local-only and can contain sensitive variables. You should add *.local to your .gitignore to avoid them being checked into git.

:::

:::tip

### Vite

Vite uses dotenv to load additional environment variables from the following files in your environment directory:

[Vite.js #env-files](https://vitejs.dev/guide/env-and-mode.html#env-files)
Since any variables exposed to your Vite source code will end up in your client bundle, VITE_* variables should not contain any sensitive information.

Loaded env variables are also exposed to your client source code via import.meta.env as strings.

To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:

```env
VITE_SOME_KEY=123
DB_PASSWORD=foobar
```
Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.

:::

### cross-env

https://www.npmjs.com/package/cross-env

"scripts": {
    "start": "cross-env NODE_ENV=production nodemon server/server.js",
    "build": "cross-env NODE_ENV=production webpack",
    "dev": "concurrently \"cross-env NODE_ENV=development webpack serve\" \"cross-env NODE_ENV=development node server/server.js\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },



```json
"scripts": {
  "start": "node src/index.js",
  "start-watch": "SET NODE_ENV=development && nodemon -r dotenv/config src/index.js dotenv_config_path=.dev.env",
  "start-watch-prod": "SET NODE_ENV=development && nodemon -r dotenv/config src/index.js dotenv_config_path=.prod.env"
}
```

However, you might run into:
```
sh: SET: command not found
```

[Environment Variable in ZSH](https://linuxhint.com/set-environment-variable-zsh/)


## More examples: 

The seconds and third I preload dotenv and change the path to load different files.

:::note
  Most frameworks supports access to environment variables right out of the box.
  
  However, I am compelled to write this note because I was not satisfied with the top results returned from my google search. So, hope this helps you and here is more power to you!
:::

More references:  
https://dev.to/stripe/5-reasons-why-your-env-environment-variables-dont-work-1hc0