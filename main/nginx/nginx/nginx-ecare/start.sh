#!/bin/sh

echo "Fix IP in resolvers.conf"

IP=$(grep nameserver /etc/resolv.conf | head -n1 | awk '{print $2}')
if expr "$IP" : '[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*\.[0-9][0-9]*$' >/dev/null; then
  echo resolver "$IP" ";" > /etc/nginx/resolvers.conf
else
  echo resolver ["$IP"] ";" > /etc/nginx/resolvers.conf
fi

echo "Modify log level in nginx.conf"

LOG_LEVEL="${LOG_LEVEL:-INFO}"
LOG_LEVEL=$(echo "$LOG_LEVEL" | tr '[:upper:]' '[:lower:]')
sed -i "s/\$LOG_LEVEL/$LOG_LEVEL/" etc/nginx/nginx.conf

echo "Generate envvar.conf"

echo set \$content_security_policy "\"${GLOBAL_POLICY}\";" >> /etc/nginx/envvars.conf
echo set \$generate_doc_enable "\"${GENERATE_DOC_ENABLE}\";" >> /etc/nginx/envvars.conf
echo set \$namespace "\"${NAMESPACE}\";" >> /etc/nginx/envvars.conf
echo set \$csp_global_policy "\"${GLOBAL_POLICY}\";" >> /etc/nginx/envvars.conf

echo "Generate route.js"
/opt/scripts/routeJsEnv.sh

echo "Start nginx"

nginx -g "daemon off;"
