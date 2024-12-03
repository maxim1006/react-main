#!/bin/sh

echo "set \$backend ${CLOUD_PORTAL_BFF_URL};" >> /etc/nginx/envvars.conf
