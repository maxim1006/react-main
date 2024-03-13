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

# скопировать файлы из папки локальной в рутовую папку контейнера COPY <src> <dest>
# <src> - путь к файлу или каталогу внутри контекста сборки, который вы хотите скопировать в образ.
#<dest> - путь, куда вы хотите скопировать файлы или каталог внутри образа.
COPY . .

# Используется для выполнения команд во время сборки образа Docker. Команды, указанные после инструкции RUN,
# выполняются во время сборки образа, и результаты этих команд сохраняются в образе.
RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx
COPY ./nginx/confs /etc/nginx/confs

# в /usr/share/nginx/html лежат файлы которые nginx сервит
COPY --from=build /app/dist /usr/share/nginx/html

# CMD используется в Dockerfile для определения команды, которая будет выполняться по умолчанию при запуске контейнера.
# Эта команда будет выполнена в том случае, если не указана альтернативная команда при запуске контейнера через docker run.
CMD ["nginx", "-g", "daemon off;"]
