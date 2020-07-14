# Lawpath Australian Postcode Validation

The application is built for validation the Australian surburb's postcode

This is a full stack project built with:

### Back-end:

- Express
- Node.js

### Front-end:

- ReactJS

### Version management:

- Git

# Install developing environment

If you have already installed all the required tools, you can skips this step.

## 1. GIT

Follow this instruction to [install GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## 2. NodeJS and NPM

Window, follow this instruction to [install NodeJS for Window](https://www.guru99.com/download-install-node-js.html)

Ubuntu, follow this instruction to [install NodeJS for Ubuntu](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

MacOS, follow this instruction to [install NodeJS for MacOS](https://treehouse.github.io/installation-guides/mac/node-mac.html)

## 3. Docker

If you do not want to install NodeJS and NPM, you can install `docker container` to run the project.

Follow this instruction to from the official docker web pages [install docker](https://docs.docker.com/desktop/)

# Clone the repo and Setup on Back-end

## 1.Clone the repo

```
git clone https://github.com/trannhutle/lawpath_postcode_validation
```

There are two application in this application: `api` and `web`.

- `api` contains source code for back-end
- `web` contains source code for front-end

## 2. Setup back-end environment

We need to have the Austrlian Post authentication key to run the send the request to Australian post server.

### 2.1 Go to `/api/` folder which has the relative path is `/packages/api`

### 2.2 Create the `.env` file with the belowed informtion

The `*****` will be replaced by the authentication informtion.

```
AUS_POST_AUTH_KEY=*****
AUS_POST_POST_CODE_API==*****
```

Please contact Australia post to get the authentication information. We could not run this application if we do not have those two value.

- AUS_POST_AUTH_KEY: is an authentication key
- AUS_POST_POST_CODE_API: is a path to call API

## 3.Start application

### 3.1. Start the application by `NodeJS`

Open terminal and go to workspace of this application.

Under the `/packages/` folder, run below command to start both web and api

```
yarn start
```

### 3.2 Start the application by `docker`

Open terminal and go to workspace of this application.

Under the `/packages/` folder

```
docker-compose up --build
```

The web application will be run on host: http://localhost:3001/

## 4 Run the for React Web application

Open terminal and go to workspace of this application.

Under the `/packages/web` folder, run command

```
yarn test
```
