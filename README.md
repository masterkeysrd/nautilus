# Nautilus #

## About ##

Is a project to track budges and saving goals in a easy manner making the life better and allowing the users be aware of their expenses.

## Development Setup ##

### Prerequisites

* Install [Docker](https://docs.docker.com/get-docker/)
* Install [Docker Compose](https://docs.docker.com/compose/install/)

### Development Setup

To run all of the components of the project we use docker-compose, with docker compose with need to build each of the images and then run the project.

```shell
docker-compose build
docker-compose up
```

To stop and remove existing docker instances of the project use the following command.

```shell
docker-compose down
```

> TIP: Each time you do a change in the dockerfile or in the build structure of the project you need to run `docker-compose build` to have a docker images with the latests changes.

### Individual Components Deployment
[Nautilus-Api](nautilus-api/README.md)

### Services

The services starts by default in the following addresses:
* Nautilus-API - http://localhost:8080/api