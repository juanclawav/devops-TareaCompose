FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 5000

CMD ["sh", "-c", "npm start & node index.js"]