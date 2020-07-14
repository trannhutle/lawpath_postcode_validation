FROM node:12.18.2-alpine

RUN npm install -g nodemon

WORKDIR /var/app/api/

# Intall dependencies
COPY ./package.json /var/app/api/
RUN npm install


COPY . /var/app/api/

EXPOSE 3131
CMD ["npm", "run", "start"]