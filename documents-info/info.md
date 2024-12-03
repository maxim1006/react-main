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

### proxy
"proxy": "http://localhost:3001" in client/package.json - говорю CRA проксировать все запросы за данными (api request) на 3001 порт


### JSON stub
https://jsonplaceholder.typicode.com/



### rerender
По умолчанию происходит когда:
- поменялись входные проперти компоненты
- поменялся стейт компоненты
- когда перерендерился родитель


### github actions
в папке actions-runner в которой создал раннер для гитхаба запускаю ./run.sh

// чтобы сделать чтобы раннеры работали даже без кастомного процесса
// sudo ./svc.sh install
// sudo ./svc.sh start

jobs:
  build:

    runs-on: self-hosted // если хочу у себя на компе хостить


### meta 
// чтобы мог зумить и при этом в сафари не зумилось автоматом
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">


### lerna
1) npx init lerna
2) add nx to learna.json and package.json

## origin / referer / host
origin - тот кто отсылает
referer = origin + path
host - куда делается request (host из Request URL) (nginx проверяет его относительно server_name чтобы перенаправить запрос)

# Version Control (Git) Conventions

## Commits

❗️ **Commit messages will be used to generate `CHANGELOG.md`.**
So you must write commit messages according to [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/#summary)

Each commit message must have a ticket number and change `type` annotation, e.g. `feat: TICKET_PREFIX-77777 added new awesome feature`.
Possible types are listed in `package.json`:

```json
{
    "types": [
        { "type": "feat", "section": "Features" },
        { "type": "fix", "section": "Bug Fixes" },
        { "type": "dp", "hidden": true },
        { "type": "docs", "hidden": true },
        { "type": "test", "hidden": true }
    ]
}
```

Changes of types `feat` and `fix` will be placed in corresponding sections of `CHANGELOG.md`. **Others will be ignored, so be careful about it**.

You can reference Gitlab users in commit messages by adding `@userId`. In that case link to the user's Gitlab profile will be added to changelog.

> Example: commit message: `feat: TICKET_PREFIX-7 cool stuff @max` will add a [@max](https://git.repository.com/max) link

### origin referer host
origin - тот кто отсылает
referer = origin + path
host - это ресурс на который идет реквест

### перейти на https без сертификата
thisisunsafe

### deployment
https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896
https://www.youtube.com/watch?v=oykl1Ih9pMg&t=699s&ab_channel=TraversyMedia
https://beget.com/ru/kb/how-to/vps/vypusk-i-ustanovka-ssl-sertifikatov-ot-lets-encrypt-na-vps?_ga=2.239763715.1405035485.1674833977-170125771.1674302625#nginx

### beget
### [main link](https://cp.beget.com/vps/maximprosv)

### подключение ssh root@62.217.181.35

### настройка
https://youtu.be/oykl1Ih9pMg
https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896

origin - тот кто отсылает
referrer = origin + path
host - это ресурс на который идет реквест
