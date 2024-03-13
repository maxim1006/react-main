FROM nginx:stable-alpine

COPY nginx/nginx.conf               /etc/nginx/nginx.conf
COPY nginx/start.sh                 /opt/scripts/start.sh
COPY nginx/routeJsEnv.sh            /opt/scripts/routeJsEnv.sh
COPY nginx/custom_404.html          /etc/nginx/html/custom_404.html
COPY ./fe/dist                      /etc/nginx/html
#COPY typedoc                        /etc/nginx/html/docs

USER root

RUN chmod -R 777 /var/log/nginx /var/cache/nginx/ /var/run/ /usr/share/nginx/html/ /etc/nginx \
    && mkdir -p /var/log/nginx /var/www/data /var/www/cache /var/run /var/www/tmp \
    && chmod -R 777 /var/log/nginx /var/www/data /var/www/cache /var/run /var/www/tmp \
#    всем папкам внутри /etc/nginx раздаю права 777
    && find /etc/nginx -type d -exec chmod 777 {} \; \
#    всем файлам внутри /etc/nginx раздаю права 666
    && find /etc/nginx -type f -exec chmod 666 {} \; \
    && chmod a+x -R /opt/scripts

EXPOSE 8080
USER 10001

CMD ["/opt/scripts/start.sh"]
