FROM node:21.2.0

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

COPY . .

RUN npm run build

CMD ["node", "./public/server.js"]
