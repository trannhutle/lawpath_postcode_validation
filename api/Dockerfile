FROM node:12.18.2-alpine as builder

RUN npm install -g nodemon

# Intall dependencies
COPY package*.json ./
RUN npm install --silent

FROM node:12.18.2-alpine

WORKDIR /var/app/api/
COPY --from=builder node_modules node_modules

COPY . .

# Expor port and start application
EXPOSE 8080
CMD ["npm", "run", "start"]