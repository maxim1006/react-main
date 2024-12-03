#!/bin/sh

echo "proxy_cache_valid 200 302 ${CONTENT_PROXY_CACHE_INACTIVE};expires ${CONTENT_PROXY_CACHE_INACTIVE};" >> /etc/nginx/proxy-content-cache-valid.conf
