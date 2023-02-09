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

The command `docker run -entrypoint="/bin/bash" -i test` runs a Docker container using the specified options.

- `docker run` is the command to run a new Docker container.
- `-entrypoint="/bin/bash"` sets the default command that will be executed when the container starts. In this case, the default command is /bin/bash, which will run the Bash shell inside the container.
- `-i` specifies that the container should run in interactive mode, allowing input from the keyboard and output to the terminal.
- `test` is the name or ID of the Docker image to use for the container.

In summary, this command runs a Docker container using the test image and starts the Bash shell in interactive mode. The user can then interact with the shell and perform commands inside the container.