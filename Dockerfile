FROM node:16

# Create app directory
WORKDIR /usr/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]