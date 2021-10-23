FROM node:14.18.1 AS builder
# set up environment variables
ARG REACT_APP_NODE_URL
ARG REACT_APP_REACT_URL
ENV REACT_APP_NODE_URL $REACT_APP_NODE_URL
ENV REACT_APP_REACT_URL $REACT_APP_REACT_URL
RUN echo $APP_NODE_URL
# copy sources files and build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .

COPY ./default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]