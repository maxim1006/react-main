#!/bin/sh

#Proxy cache settings

echo "proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=resources_cache:10m max_size=${PROXY_CACHE_MAX_SIZE} inactive=${PROXY_CACHE_INACTIVE} use_temp_path=off;" >> /etc/nginx/cachesettings.conf