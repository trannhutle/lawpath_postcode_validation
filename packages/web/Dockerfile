FROM node:12.18.2-alpine

# RUN npm  -g react-scripts
WORKDIR /var/app/web/

COPY ./package.json /var/app/web/

# Intall dependencies
RUN npm install

COPY . /var/app/web/

# Expor port and start application
EXPOSE 3000
CMD ["npm", "run", "start-docker"]