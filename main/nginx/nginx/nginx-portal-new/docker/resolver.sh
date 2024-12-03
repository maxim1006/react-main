#!/bin/sh
echo resolver `grep nameserver /etc/resolv.conf | head -n1 | awk '{print $2}'` ";" >> /etc/nginx/resolvers.conf
