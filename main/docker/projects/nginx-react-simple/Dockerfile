FROM node:12.18.2 as build

ARG REACT_APP_SERVICES_HOST=custom-var

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY . .

RUN npm run build


FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html
