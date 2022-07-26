Macintosh HD/usr/local/etc/nginx

### signals
nginx
nginx -s stop
nginx -s reload

// locations from brew
Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/
Default listen address -> http://localhost:8080
"html" folder is "/usr/local/var/www"

### узнать где файл конфигурации
nginx -t (/usr/local/etc/nginx/nginx.conf)

#### nginx -V 
узнать где лежат файлы
You will see "--prefix=/usr/local/Cellar/nginx/1.12.0_1", this is the folder of nginx files
the "html" folder is "/usr/local/var/www"
