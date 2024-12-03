FROM nginx:stable-alpine

COPY nginx.conf                        /etc/nginx/nginx.conf
COPY docker                            /opt/scripts/portal-proxy

USER root

RUN chmod -R g=u /etc/passwd /var/cache/ && \
	  chmod -R 777 /etc/nginx/ /var/cache/nginx/ /usr/share/nginx/ /run/ && \
	  chmod -R +x /opt/scripts/portal-proxy/ && \
	  chmod -R 777 /usr/share/nginx/html/

COPY maintenance.html                  /usr/share/nginx/html/maintenance.html

CMD ["/opt/scripts/portal-proxy/docker-entrypoint.sh"]

# Create cache folder for nginx
RUN mkdir -m 777 -p /data/nginx/cache

EXPOSE 8080
USER 10001
