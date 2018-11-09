FROM node:8.9.4

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY dist/ /usr/app/dist
COPY node_modules/ /usr/app/node_modules

EXPOSE <%PORT_API%>

ENTRYPOINT ["/bin/bash", "-c", "node /usr/app/dist/server.js"]