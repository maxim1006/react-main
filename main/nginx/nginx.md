### signals
запустить
nginx
остановить
nginx -s stop
перезагрузить
sudo service nginx restart

### nginx -t
узнать где файл конфигурации / состояние nginx (правильно ли заполнил файл)
nginx -t (/usr/local/etc/nginx/nginx.conf или /opt/homebrew/etc/nginx/nginx.conf)

// locations from brew
Add configs in -> /usr/local/etc/nginx/servers/
Default config -> /usr/local/etc/nginx/nginx.conf (/opt/homebrew/etc/nginx/nginx.conf)
Logs will be in -> /usr/local/var/log/nginx/
Default webroot is -> /usr/local/var/www/ (или /opt/homebrew/var/www)
Default listen address -> http://localhost:8080
"html" folder is "/usr/local/var/www"

#### nginx -V 
узнать где лежат файлы
You will see "--prefix=/usr/local/Cellar/nginx/1.12.0_1", this is the folder of nginx files
the "html" folder is "/usr/local/var/www"
