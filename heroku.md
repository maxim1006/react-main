### deploy heroku
npm i -g heroku
heroku login
// создаю проект с билд настройкками реакт апп
heroku create main-react --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master

// тут приложение
https://main-react.herokuapp.com/



#### heroku 
// просто создать проект 
heroku create (затем git remote -v чтобы посмотреть что хероку и гит сконнектились)

// посмотреть все свои apps 
heroku apps

// присоединить свое приложение к хероку, те прилинковываю обычный проект с гит к аккаунту в хероку в конкретное приложение
heroku git:remote -a <PASTE_YOUR_APP_NAME_HERE>

// проверить удаленные ветки
git remote (получу heroku и origin)

// запушить в хероку
git push heroku master

// добавить серкретный ключ
heroku config:set STRIPE_SECRET_KEY=<YOUR_STRIPE_SECRET_KEY>

// открыть плиложение на хероку
heroku open



#### heroku builds
когда деплою в хероку должен подставить в homepage в package.json "./", чтобы получить нормальные пути

// посмотреть все buildpacks
heroku buildpacks

// удалить buildpack (на примере CRA)
heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git

// инсталлю плагины для хероку билдов
heroku plugins:install heroku-builds

// посмотреть все текущие билды в приложении
heroku builds -a main-react

// запустить билд
git push heroku master

// завершить билды
heroku builds:cancel -a main-react

// добавить .env в хероку
heroku config:set STRIPE_SECRET_KEY=



### logs
heroku logs --tail
