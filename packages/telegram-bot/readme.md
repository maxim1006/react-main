### TODO
1) payments - сделать бюджет для лили
2) добавить еще  Английские игры
3) сделать статистику графиком
4) Сделать механизм для очистки данных старше 2х месяцев
5) Сделать приложение apple/google

### Start
- npm run start
- запустить vite telegram-bot/src/web/client-vite/package.json
- запустить ngrock (не забыть в .env добавить новую ссылку от него чтобы открывался в тг, порт ngrock соответствует дев серверу vite)

### Useful links
[ngrok](https://ngrok.com/docs/getting-started)
[netlify](https://app.netlify.com/)
[telegram webapps](https://core.telegram.org/bots/webapps#implementing-web-apps)
[firebase](https://console.firebase.google.com/)
[firestore crud](https://cloud.google.com/nodejs/docs/reference/firestore/latest)


### Installation notes
- в телеге пишу botfather затем клик на /newbot и вводим название должна прийти сообщенька и токен
- для webapps пришлось установить типы из нпм пакета telegram-webapps-types а также прописать "typeRoots": ["./node_modules/@types", "./node_modules/telegram-webapps-types"]

### pm2 для бг нод процессов
[pm2](https://www.npmjs.com/package/pm2)
https://pm2.keymetrics.io/docs/usage/application-declaration/#log-files
тут описана команда  pm2 init simple которая создаст файл с настройками pm2 ecosystem.config.js
https://pm2.keymetrics.io/docs/usage/startup/
для того чтобы при рестарте сервера снова запускался pm2 нужно вызывать команду 
pm2 startup (отключить pm2 unstartup)
найти процессы
ps -ef | grep "pm2: $NAME"

2 startup ubuntu -u maxim1 --hp /home/m/maxim1

### установка firebase
1) npm i firebase-tools -D
2) node_modules/.bin/firebase login // вот так прикольно чтобы в глобальные пакеты не лезть а только локально
если нужно (node_modules/.bin/firebase login:add __account-email__, node_modules/.bin/firebase login:use  __account-email__)
3) node_modules/.bin/firebase init functions

### beget
ssh root@62.217.181.35 (чаще всего подключение по ssh будет root + @ + ip)
(теперь в докере могу что угодно делать в nginx)
/root/apps/telegram-bot - тут приложение

sudo apt update - обновление индексы пакетов через apt
sudo apt upgrade - обновленяет пакеты

### deployment
https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896
https://www.youtube.com/watch?v=oykl1Ih9pMg&t=699s&ab_channel=TraversyMedia
https://beget.com/ru/kb/how-to/vps/vypusk-i-ustanovka-ssl-sertifikatov-ot-lets-encrypt-na-vps?_ga=2.239763715.1405035485.1674833977-170125771.1674302625#nginx
https://www.youtube.com/watch?v=8OHe6chCWTE&t=11s&ab_channel=UlbiTV

npm run build => deploy to beget
далее через терминал (или бегет терминал и запускаю pm2)
npm run prod:start
а nginx проксирует на этот server.ts 

80 порт - http трафик
22 порт - для ssh
443 порт - https

(чтобы их подключить)
sudo ufw enable
sudo ufw status
sudo ufw allow ssh (Port 22)
sudo ufw allow http (Port 80)
sudo ufw allow https (Port 443)

### https
https://letsencrypt.org/getting-started/
https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal

### prod start
npm run build
npm run prod:start
nginx

# Check NGINX config
sudo nginx -t

# Restart NGINX
sudo service nginx restart

### node
https://www.youtube.com/watch?v=8OHe6chCWTE&t=11s&ab_channel=UlbiTV

на ubuntu устанавливаю через [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

### nginx 
/etc/nginx/sites-available/default

### vite
// client
npm create vite@latest . -- --template react-ts
npm add -D sass @vitejs/plugin-basic-ssl vite-plugin-svgr     

### ngrock
Тула для тунеллирования портов на внешнюю ссылку (нужно зарегаться а дальше по getting-started)
https://ngrok.com/docs/getting-started
https://dashboard.ngrok.com/get-started/setup
для запуска
ngrok http 5173

получаю ссылку, например https://235a-91-231-66-120.eu.ngrok.io

### netlify
элементарно деплоить сайт с гитхаба (https://app.netlify.com/teams/maxim1006/overview)

// конфиг для history5 например
netlify.toml

