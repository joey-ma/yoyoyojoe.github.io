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

Use `docker container ls` lists all the currently running docker containers.

```bash
peopledepot % docker container ls
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS          PORTS                    NAMES
0a2a1a617c0c   peopledepot-web        "/usr/src/app/entryp…"   37 minutes ago   Up 37 minutes   0.0.0.0:8000->8000/tcp   peopledepot-web-1
4a1f98f98a54   postgres:13.0-alpine   "docker-entrypoint.s…"   37 minutes ago   Up 37 minutes   5432/tcp                 peopledepot-db-1
```

If there are no containers running, this also can tell us if Docker is running in the background. 

```bash
% docker container ls
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

# no container is running, but Docker the application is running. 

% docker container ls
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

# it will explicitly remind us that docker daemon may not be running.
```

## Building multi-platform images

When you invoke a build, you can set the `--platform` flag to specify the target platform for the build output, (for example, `linux/amd64`, `linux/arm64`, or `darwin/amd64`). See [Building multi-platform images](https://docs.docker.com/build/building/multi-platform/#build-multi-arch-images-with-buildx).

Run the `docker buildx ls` command to list the existing builders:

```bash
% docker buildx ls 
NAME/NODE       DRIVER/ENDPOINT STATUS  BUILDKIT PLATFORMS
default *       docker                           
  default       default         running 20.10.22 linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
desktop-linux   docker                           
  desktop-linux desktop-linux   running 20.10.22 linux/arm64, linux/amd64, linux/riscv64, linux/ppc64le, linux/s390x, linux/386, linux/arm/v7, linux/arm/v6
```

This displays the default builtin driver, that uses the BuildKit server components built directly into the docker engine, also known as the `docker` driver.
While you can create a new builder to access more complex features like multi-platform builds (see [Multi-Platform/Getting Started](https://docs.docker.com/build/building/multi-platform/#getting-started) for more details), you could also just pass the `--platform` flag into your build command. 

Here is an build command without the `--platform` flag. The `-t` flag adds a name and optionally a tag in the `name:tag` format:

```bash
docker build -t people-depot-backend-dev .
```

And we can pass in the `--platform` flag like so to build a Docker image setting the --platform to be `linux/amd64`://  m.

```bash
docker build --platform=linux/amd64 -t people-depot-backend-dev .
```

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

To only deploy your backend server, here is a really good sample project:

https://github.com/GoogleCloudPlatform/serverless-expeditions/tree/main/hosting-a-rest-api-with-a-cloud-firestore-backend

Together with a YouTube walk-through @ [Google Cloud Tech](https://www.youtube.com/watch?v=M53VqNtioxE)

### References:  
- [How to Deploy your Serverless Full-Stack App with Google Cloud Run and MongoDB Atlas @ YouTube](https://www.youtube.com/watch?v=-UobUxpW6WQ)

The command `docker run -entrypoint="/bin/bash" -i test` runs a Docker container using the specified options.

- `docker run` is the command to run a new Docker container.
- `-entrypoint="/bin/bash"` sets the default command that will be executed when the container starts. In this case, the default command is /bin/bash, which will run the Bash shell inside the container.
- `-i` specifies that the container should run in interactive mode, allowing input from the keyboard and output to the terminal.
- `test` is the name or ID of the Docker image to use for the container.

In summary, this command runs a Docker container using the test image and starts the Bash shell in interactive mode. The user can then interact with the shell and perform commands inside the container.