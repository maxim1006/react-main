#Build stage  - разделение на стейджи нужно чтобы промежуточные файлы не попадали в финальный имадж
FROM node:21.2.0 as build

ARG REACT_APP_SERVICES_HOST=/services/m

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run build

#Run stage только файлы указанные в этой стадии попадут в финальный докер имадж
FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
