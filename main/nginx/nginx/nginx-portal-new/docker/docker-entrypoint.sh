#!/bin/sh
if ! whoami &> /dev/null; then
  if [ -w /etc/passwd ]; then
    echo "default:x:$(id -u):0:default user:${HOME}:/sbin/nologin" >> /etc/passwd
  fi
fi

sh /opt/scripts/portal-proxy/resolver.sh && sh /opt/scripts/portal-proxy/envvar.sh && sh /opt/scripts/portal-proxy/cachesettings.sh && sh /opt/scripts/portal-proxy/add-header.sh && sh /opt/scripts/portal-proxy/proxy-content-cache-valid.sh && nginx -g "daemon off;"
