# Nautilus-API #

## About

This is the API for Nautilus Project.

## Development Setup ##

### Prerequisites

* Install [Docker](https://docs.docker.com/get-docker/)
* Install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

### Project setup (local)

To install and use the specified node and npm versions you need to run the `install` and `use` command in nvm. Run the following command to do it.

```shell
nvm install v14.17.4
nvm use
```
We use [dotenv](https://github.com/motdotla/dotenv) to map a `.env` file to environment variable in the project. To setup the project config please rename the [sample.env](sample.env) file to `.env` and set the proper configurations.

To run the project locally you need to install the dependencies and start the project. 
```shell
npm i
npm start # to start the app in normal mode
# or
npm run start:dev # to start the app in development mode (with hot reload)
```

### Project setup (docker)

To run the docker image we need to first build the image and then run the image.

```shell
docker build -t nautilus-api .
docker run -p 8080:8080 nautilus-api
```

### Running Project

By default the project will be running on .

|Service |URL  |
--- | --- |
|api|http://localhost:8080/api|
|swagger/open-api|http://localhost:8080/api-docs|

### Testing (local)

To run the testings on the project we use [Mocha](https://mochajs.org/) as Test Framework and [Chai](https://www.chaijs.com/) as Assertion Framework with the Expect style and [nyc/istanbul](https://istanbul.js.org/) for code coverage. The commands we have configure are the following:

```shell
# run all of the tests
npm test
# run tests with code  coverage
npm run test:cov
```

### API Documentation

To document the API we use [Open API Specification (OAS)](https://swagger.io/specification/#oas-document) and the swagger page is served in http://localhost:8080/api-docs.