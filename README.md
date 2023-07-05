# joey-ma.github.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can learn more about its pros and cons [here](https://docusaurus.io/docs#features).

### Installation

```bash
$ npm install
```

### Local Development

```bash
$ npm start
```

or 

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
$ USE_SSH=true npm run deploy
```

Not using SSH:

```bash
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
Note: since August 13, 2021, GitHub no longer accept account passwords when authenticating Git operations on GitHub.com. You can use your [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) as your password if you are not using SSH. However, to access GitHub from the command line, consider using GitHub CLI or Git Credential Manager instead of creating a personal access token. For more details, see above link for personal-access-token.
