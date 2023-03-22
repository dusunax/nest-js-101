FROM node:16-alpine

WORKDIR /app
COPY package.json package.lock.json ./

RUN npm install

EXPOSE 3355

COPY . .
RUN npm run build
CMD npm run start

