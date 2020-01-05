### старт проекта
npx create-react-app my-app 

**State** - is js object that contains data relevant to a singular component

### docs
https://reactjs.org/
https://react-redux.js.org/
https://reacttraining.com/react-router
https://create-react-app.dev/

### esm
// npm i esm, чтобы express заработал в es6 для запуска nodemon -r esm ./server/server.js

### Router
react-router - main
- dom
- native
- redux



### deploy github pages
NPM выполнит любую команду сперва с pre и только потом саму команду (пример, если сделать npm run deploy, то сперва выполнится predeploy)! Круто!

1) npm i gh-pages --SD
2) in `package.json` "homepage": "https://maxim1006.github.io/react-main",
3) in `package.json` 
```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
```
4) npm run deploy

когда деплою в гитхаб pages должен подставить в homepage в package.json, чтобы получить нормальные пути
https://maxim1006.github.io/react-main



### deploy heroku
npm i -g heroku
heroku login
// создаю проект с билд настройкками реакт апп
heroku create main-react --buildpack https://github.com/mars/create-react-app-buildpack.git
git push heroku master

#### heroku builds
когда деплою в хероку должен подставить в homepage в package.json "./", чтобы получить нормальные пути

heroku plugins:install heroku-builds
// посмотреть все текущие билды в приложении
heroku builds -a main-react
// завершить билды
heroku builds:cancel -a main-react



### Adjust CRA
node_modules/react-scripts/config/webpack.config.js

// Тут добавляю для "styled-components" babel config, чтобы в деве видеть имена компонент для удобства дебага
// Process application JS with Babel.
```js
plugins: isEnvProduction ?
                    [[
                      require.resolve('babel-plugin-named-asset-import'),
                      {
                        loaderMap: {
                          svg: {
                            ReactComponent:
                                '@svgr/webpack?-prettier,-svgo![path]',
                          },
                        },
                      },
                    ]] :
                    [
                  /*Start custom code*/
                  [
                    require.resolve("babel-plugin-styled-components"),
                    {
                      "displayName": true
                    }
                  ],
                  /*End custom code*/
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-prettier,-svgo![path]',
                        },
                      },
                    },
                  ],
                ],
```




