# Package.json

Find your project's descriptive and functional metadata here.

:::tip

Running a && b starts b after a finished successfully. a & b starts a, moves it to the background and starts b right away.

:::

Running commands

## Basic

Here is a traditional way of launching both frontend and backend applications.

In your terminal open up this root directory `todo-scratch`

### Traditional (Using 2 terminals)

---

#### 1. Start back-end server & connect to database

In terminal # 1, at project root directory, run the following commands one at a time, in order:

```bash
cd server # change directory to server
npm i # install dependencies
npm start # start server
```

#### 2. Start front-end todo application

In terminal # 2, at project root directory, run the following commands one at a time, in order:

```bash
cd client # change directory to client
npm i # install dependencies
npm start
```

#### Consolidated commands

So, the same operations above can be somewhat simplified as 2 commands, 1 in each terminal. 2 Terminals are still needed.

```bash
cd server && npm i && npm start
```

```bash
cd client && npm i && npm start
```

#### After dependencies have been installed

To make it convenient to launch apps in the future, an extra script is included. 
Now, you can run both of the following commands in `client` directory for future launches. 2 Terminals are still needed.

```bash
npm run start-server # we want the backend to be up first, so run this first in terminal # 1
npm start # we can start the app second, and a new browser window/tab should open and load http://localhost:3000/ 
```

## Using npm package `concurrently`

In your terminal open up this root directory `todo-scratch`.

With [`concurrently`](https://www.npmjs.com/package/concurrently) installed as a dependency (`npm i concurrently`), you can set up some scripts at the project root directory, so that you just need 1 command to set up both frontend and backend apps, and 1 command to start both frontend and backend apps in 1 terminal.

Add the following scripts:
```json
  "scripts": {
    "start": "concurrently 'npm run server' 'npm run client'",
    "setup": "npm install && concurrently 'npm run install-server' 'npm run install-client'",
    "install-client": "npm install --prefix client",
    "install-server": "npm install --prefix server",
    "client": "npm start --prefix client",
    "server": "npm start --prefix server"
  },
```

### Hack

---

In your terminal at root directory, you only need to use 1 terminal and 2 commands.

### 1. Get set up 

Installing all dependencies for root, client, and server directories:

```bash
npm run setup
```

### 2. Start app

After dependencies have been installed, run following command to start the app!

```bash
npm start
```

Which way do you like more?




