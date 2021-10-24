This is a template repository for a dockerized node/react app.

# Running the app

To run the app, you'll need docker installed.

Via command line, you can simply run `./bin/docker-build-and-run` which is
simply a short-hand script for two commands:

```
docker-compose -f ./docker-compose.dev.yml build
docker-compose -f ./docker-compose.dev.yml up
```

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
