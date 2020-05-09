FROM node:13.13.0

COPY package.json .
COPY package-lock.json .
RUN npm install
ENV PATH ./node_modules/.bin:$PATH
