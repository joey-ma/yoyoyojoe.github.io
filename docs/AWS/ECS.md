# ECS

AWS ECS (Elastic Container Service) is a fully managed container orchestration service offered by Amazon Web Services (AWS). It allows you to run, manage, and scale Docker containers on a cluster of virtual machines, making it easy to deploy and run applications in a highly available and scalable manner. ECS provides features such as load balancing, auto scaling, service discovery, and container health monitoring, and can integrate with other AWS services such as AWS Fargate, AWS CloudFormation, and Amazon Elastic Kubernetes Service (EKS).

## Getting an ECS error

Now that the Docker image is built and uploaded to ECR, ECS will then run the Docker image.
We are now seeing the following error from AWS ECS logs. 

```console
[FATAL tini (6)] exec /usr/src/app/entrypoint.sh failed: Exec format error
```

What does this error mean? 

This error message is indicating that there was a problem executing the file "/usr/src/app/entrypoint.sh". The "exec format error" is specifically referring to a problem with the format or structure of the file, and that it cannot be executed as a result. The "FATAL tini (6)" component of the error message is related to the process manager (tini) that was being used, and that it encountered a fatal error (exit code 6) when trying to execute the script.

What does exit code 6 mean?

Exit code 6 typically means a specific error has occurred, but the meaning of the code can vary depending on the system and context in which it is used. In the context of the AWS ECS logs error message you mentioned, the exact meaning of exit code 6 is not specified. However, it is generally considered a non-zero exit status that indicates some sort of failure or error. In such cases, it is usually best to refer to the documentation or source code of the specific tool or process that generated the exit code in order to determine its exact meaning.

If you go to `ECS > YOUR_CLUSTER > YOUR_SERVICE > Logs`, under the Task column, you can click on the link (e.g. `580cab3d2b284a989c06a57a4fbc55ea`) to see more details. `

Once you're there, below **"Task overview"**, you can see **"Configuration"** has the Fargate details, such as the "Operating system/Architecture", which is why our build ran into an error.

:::note How it might look like
Amazon Elastic Container Service > Clusters > incubator-prod > Tasks > 580cab3d2b284a989c06a57a4fbc55ea > Configuration > Containers > people-depot-backend-dev

**8580cab3d2b284a989c06a57a4fbc55ea**

Task overview

...

Configuration 

...

::: 

Update: for this particular error, we were able to resolve it by passing in the `--platform` flag so that we specify the build to be for `linux/amd64`, which we later confirmed that Fargate uses the Linux/X86_64 OS/Architecture. So for M1 Mac users, the build command would be: 

```console
docker build --platform=linux/amd64 -t people-depot-backend-dev .  instead of docker build -t people-depot-backend-dev .
```

Ref:  
- https://docs.docker.com/build/building/multi-platform/
- https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref.html

## Getting another ECS error

To be fair, this is more of an error that we see when the Docker image is run inside of the AWS Fargate instance. So it's technically not an AWS ECS error.

```
nc: getaddrinfo for host "db" port 5432: Name or service not known
```

More resources:  
- https://aws.amazon.com/blogs/architecture/modernize-your-penetration-testing-architecture-on-aws-fargate/