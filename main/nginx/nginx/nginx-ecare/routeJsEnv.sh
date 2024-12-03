#!/bin/sh
echo "generate route.js"

# clear route.js
echo "" > /etc/nginx/html/route.js

echo "window.route = {" >> /etc/nginx/html/route.js
echo "  'PUBLIC_GATEWAY_URL': '${PUBLIC_GATEWAY_URL}'," >> /etc/nginx/html/route.js
echo "  'CP_ECARE_CMS_PROXY_URL': '${CP_ECARE_CMS_PROXY_URL}',"  >> /etc/nginx/html/route.js
echo "  'MZ_PUBLIC_GATEWAY_URL': '${MZ_PUBLIC_GATEWAY_URL}',"  >> /etc/nginx/html/route.js
echo "}" >> /etc/nginx/html/route.js
