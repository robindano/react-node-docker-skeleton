FROM node:14.18.1 AS builder

# set up environment variables
ARG APP_HOST_URL
ARG APP_BACKEND_PORT
ENV REACT_APP_BACKEND_URL "${APP_HOST_URL}:${APP_BACKEND_PORT}"
ENV REACT_APP_REACT_URL $REACT_APP_REACT_URL

# copy sources files and build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

# copy build files to nginx container
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

# copy nginx config to container
COPY ./default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]