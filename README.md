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

There are two repositories in this application: `api` and `web`.

- `api` contains source code for back-end
- `web` contains source code for front-end

## 2. Setup back-end environment

We need to have the Austrlian Post authentication key to run the send the request to Australian post server.

If you have not installed the `yarn` package, see the instruction here [yarn package installation](https://yarnpkg.com/lang/en/docs/install/) to install `yarn` package

```
yarn seed
```

To clean the data of all table, use the follow command on the `api` folder

```
yarn seed
```

## 7. Start back-end server

Start the server

```
npm start
```

By default, the back-end server run on port :3000

# Setup on front-end

Navigate to `web` folder

## 1. Install all the required libraries for the front-end.

```
npm install
```

## 2. Change back-end host

If you deploy a back-end on the other server, go to folder `web/src/enviroments` and edit file `environment.ts`.

Change `backEndHost` to the host that you deploy back-end server. By default the back-end host is: `localhost:3000`

## 3. Deploy and start the front-end

```
ng serve
```

By default, the front-end will run on port `:4200`, you could change to other port by:`

```
ng serve --port <YOUR PORT> (4201)
```

# The document about the APIs published from the back-end

After the back-end is deployed successfully, the document about the APIs is also viewed by this url: `yourbackendhost:PORT/api-docs/`, for example `http://localhost:3000/api-docs/`
![alt API Document](https://raw.githubusercontent.com/anltnmse60906/ADA-Restaurant-Booking-System/master/api/public/images/Screen%20Shot%202018-10-19%20at%202.51.03%20am.png)
