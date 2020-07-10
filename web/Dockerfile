FROM node:12.18.2-alpine

WORKDIR /var/app/web/

COPY package.json ./

# Intall dependencies
RUN npm install --silent

COPY . .

# Expor port and start application
EXPOSE 3000
CMD ["npm", "run", "start"]