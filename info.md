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

### deploy
NPM выполнит любую команду сперва с pre и только потом саму команду (пример, если сделать npm run deploy, то сперва выполнится predeploy)! Круто!

1) npm i gh-pages --SD
2) in `package.json` "homepage": "https://maxim1006.github.io/react-main",
3) in `package.json` 
```json
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
```
4) npm run deploy
