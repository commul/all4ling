FROM node:16

WORKDIR /src
# Speed-up next build
COPY package.json .
COPY package-lock.json .
RUN npm install
# hacky: invalidates almost all cached content
COPY . .
# ...just in case something changed in the package*.json files
RUN npm install
RUN ./page_replication.sh

EXPOSE 8081
