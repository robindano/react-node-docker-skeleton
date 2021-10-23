This is a dockerized, todo list app made with React and Node.js

The point of this project was to learn docker, docker-compose, and mess around
with node.js and React some more.

# Running the app

To run the app, you'll need docker installed.

Via command line, you can simply run `./bin/docker-build-and-run` which is
simply a short-hand script for two commands:

```
docker-compose -f ./docker-compose.dev.yml build
docker-compose -f ./docker-compose.dev.yml up
```

Now if you visit `http://localhost` you should see the app.

# Container Structure

This project has two sub-projects, the node backend, and the react frontend,
each with a corresponding `Dockerfile`.

When building the images, each project will be based on the nginx image. So
we'll ultimately end up with two nginx containers handling HTTP requests. One
serving as an API to the other (which will serve the React part).