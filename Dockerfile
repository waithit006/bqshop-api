# FROM gcr.io/google_appengine/nodejs
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install && npm run build

EXPOSE 8010

CMD ["npm", "run", "start"]