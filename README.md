This is a template repository for a dockerized node/react app.

# Running the app

To run the app, you'll need docker installed.

Via command line, you can simply run `./bin/docker-build-and-run` which is
simply a short-hand script for two commands:

```
docker-compose -f ./docker-compose.dev.yml build
docker-compose -f ./docker-compose.dev.yml up
```

In the root directory you should see a file `.env`, which will have a variable `APP_HOST_URL`. 
This should be the URL of the machine running the app. So, if you're running it on your local machine, you can just specify localhost.

Now if you visit `http://localhost` you should see the app.

# Docker Setup

This project has two sub-projects, the node backend, and the react frontend,
each with a corresponding `Dockerfile`.
 
The `app_node` directory contains the node.js portion of the app, and the
`app_react` portion, when dockerized, will be based on the nginx docker image.
When building the `app_react` docker image, the Dockerfile will `COPY` over the
built React app, as well as an nginx configuration which will set up a `server
{}` configuration block for port 8080.

Requests sent to 8080 will be received by nginx, and then proxied to the node
backend.

# Database Structure / Initialization Scripts

Database structure is defined by `sql/structure.sql`, and seed data by
`sql/data.sql`. These two files will be copied over to the postgres container
such that they are read by the database server in a special order as defined by
`docker-compose.dev.yml`
