FROM node:13.13.0

COPY package.json .
COPY dev.env .
RUN npm install
RUN npm run build
ENV PATH ./node_modules/.bin:$PATH
