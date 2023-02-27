# ECR

AWS ECR (Elastic Container Registry) is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates seamlessly with other AWS services, such as Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS), and AWS Fargate, to provide a complete solution for building, deploying, and managing containerized applications. With ECR, users can securely store and manage Docker images, control access and permissions, and easily deploy Docker containers to their production environments.

## Pushing a Docker image to ECR.

You can find these instructions by clicking on "View push commands" at the upper right corner in your ECR.

### macOS/Linux

Make sure that you have the latest version of the AWS CLI and Docker installed. For more information, see Getting Started with Amazon ECR.

Use the following steps to authenticate and push an image to your repository. For additional registry authentication methods, including the Amazon ECR credential helper, see Registry Authentication.

1. Retrieve an authentication token and authenticate your Docker client to your registry.  
Use the AWS CLI:

```bash
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-west-2.amazonaws.com
```

Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.

2. Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:

```bash
docker build -t people-depot-backend-dev .
```

3. After the build completes, tag your image so you can push the image to this repository:

```bash
docker tag people-depot-backend-dev:latest 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest
```

4. Run the following command to push this image to your newly created AWS repository:

```bash
docker push 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest
```

### Windows

Make sure that you have the latest version of the AWS Tools for PowerShell and Docker installed. For more information, see Getting Started with Amazon ECR.

Use the following steps to authenticate and push an image to your repository. For additional registry authentication methods, including the Amazon ECR credential helper, see Registry Authentication.

1. Retrieve an authentication token and authenticate your Docker client to your registry.  
Use AWS Tools for PowerShell:

```bash
(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-west-2.amazonaws.com
```

2. Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:

```bash
docker build -t people-depot-backend-dev .
```

3. After the build completes, tag your image so you can push the image to this repository:

```bash
docker tag people-depot-backend-dev:latest 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest
```

4. Run the following command to push this image to your newly created AWS repository:

```bash
docker push 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest
```

*To build a Docker image for multi-platform or to build for a different platform, see [here](http://localhost:3000/docs/Docker/#building-multi-platform-images).*