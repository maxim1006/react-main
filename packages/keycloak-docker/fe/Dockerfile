#Build stage  - разделение на стейджи нужно чтобы промежуточные файлы не попадали в финальный имадж
FROM node:21.2.0 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

# пример на случай если прав не хватает для папки .npm-cache
#RUN mkdir .npm-cache  \
# && npm config se  t cache /.npm-cache --global \
# && npm ci

RUN npm ci;

COPY . .

RUN npm run build

#Run stage только файлы указанные в этой стадии попадут в финальный докер имадж
FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx
COPY ./nginx/confs /etc/nginx/confs

# в /usr/share/nginx/html лежат файлы которые nginx сервит
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
