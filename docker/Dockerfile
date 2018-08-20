FROM node:8.9.4

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY dist/ /usr/app/dist
COPY node_modules/ /usr/app/node_modules

EXPOSE 8888

ENTRYPOINT ["/bin/bash", "-c", "user=$user password=$password host=$host port=$port node /usr/app/dist/server.js"]