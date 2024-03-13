FROM node:20.11.1-alpine3.18
ARG NODE_EXTRA_CA_CERTS
WORKDIR /app

COPY . .
# на каждую команду RUN создается копия предыдущего слоя образа
# те первый ран докер сделает копию npm ci и ее типо будет сохранять и брать из кеша
# а остальные будет проверять на изменение кода и новые делать
# https://bobbyhadz.com/blog/npm-change-cache-location
RUN mkdir .npm-cache  \
 && chown -R 10001:10001 .npm-cache \
 && npm config set cache /app/.npm-cache --global \
 && npm ci --loglevel warn                              \
 && npm cache clean --force

#COPY . .
RUN chmod a+x ./start.sh            \
 && chown 10001:10001 ./start.sh    \
 && chmod 777 ./                    \
 && chmod 777 ./public              \
 && chmod 777 ./docs                \
 && chown 10001:10001 ./

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
# to avoid "unable to verify the first certificate" on any https request from next
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

EXPOSE 3000
USER 10001:10001
CMD ["/bin/sh", "./start.sh"]
