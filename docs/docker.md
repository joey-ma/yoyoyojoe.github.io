---
sidebar_position: 3
---

# Docker

## CLI Basics

Use `docker start` to start one or more stopped containers. [Docs](https://docs.docker.com/engine/reference/commandline/start/)

For example, starting 2 containers at the same time:

```bash
docker start peopledepot_web_1 peopledepot_db_1 
```

Use `docker stop` to stop one or more stopped containers.

```bash
docker stop peopledepot_web_1 peopledepot_db_1 
```

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

To only deploy your backend server, here is a really good sample project:

https://github.com/GoogleCloudPlatform/serverless-expeditions/tree/main/hosting-a-rest-api-with-a-cloud-firestore-backend

Together with a YouTube walk-through @ [Google Cloud Tech](https://www.youtube.com/watch?v=M53VqNtioxE)

References: 

[How to Deploy your Serverless Full-Stack App with Google Cloud Run and MongoDB Atlas @ YouTube](https://www.youtube.com/watch?v=-UobUxpW6WQ)