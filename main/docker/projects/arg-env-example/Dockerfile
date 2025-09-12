FROM node:20-alpine AS build

# 	--build-arg используется только при сборке образа через docker build.
# docker build --build-arg CUSTOM_ARG="my arg from outside" -t arg-app . // выведется на этапе сборки my arg from outside
# docker build -t arg-app . // выведется на этапе сборки custom arg
ARG CUSTOM_ARG="custom arg"
# ENV используется для задания переменных окружения, которые будут доступны внутри контейнера на этапе его выполнения.
ENV CUSTOM_ENV="custom env"

WORKDIR /app

COPY ./simple-webpack-app/package*.json .

RUN npm ci;

# копирую текущую папку в рут докер образа (первый путь на моем компе, второй в имадже)
COPY ./simple-webpack-app .

RUN npm run build

# выполняется при старте контейнера
#CMD ["node", "index.js"]

# выполняется на этапе сборки образа
RUN echo "Custom ARG: $CUSTOM_ARG"

FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx
COPY ./nginx/confs /etc/nginx/confs

# в /usr/share/nginx/html лежат файлы которые nginx сервит
COPY --from=build /app/dist /usr/share/nginx/html

# CMD используется в Dockerfile для определения команды, которая будет выполняться по умолчанию при запуске контейнера.
# Эта команда будет выполнена в том случае, если не указана альтернативная команда при запуске контейнера через docker run.
CMD ["nginx", "-g", "daemon off;"]
