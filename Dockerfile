FROM node:13.13.0

WORKDIR /usr/src/frontend
COPY package.json .
COPY dev.env .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
ENV PATH ./node_modules/.bin:$PATH
