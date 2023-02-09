### TODO
1) payments - сделать бюджет для лили
2) добавить еще  Английские игры
3) сделать статистику графиком
4) Сделать механизм для очистки данных старше 2х месяцев

### Useful links
[firebase](https://console.firebase.google.com/)
[firestore crud](https://cloud.google.com/nodejs/docs/reference/firestore/latest)


### Installation notes
- в телеге пишу botfather затем клик на /newbot и вводим название должна прийти сообщенька и токен

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
ssh root@62.217.181.35
ssh maxim1@maxim1.beget.tech
ssh localhost -p 222
(теперь в докере могу что угодно делать)

### deployment
https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896
https://www.youtube.com/watch?v=oykl1Ih9pMg&t=699s&ab_channel=TraversyMedia
https://beget.com/ru/kb/how-to/vps/vypusk-i-ustanovka-ssl-sertifikatov-ot-lets-encrypt-na-vps?_ga=2.239763715.1405035485.1674833977-170125771.1674302625#nginx

### nginx 
/etc/nginx/sites-available/default
