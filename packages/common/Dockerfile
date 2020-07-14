FROM node:12.18.2-alpine as builder

WORKDIR /var/app/common/

COPY package.json ./

RUN npm install -g .

COPY . .