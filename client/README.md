### Разгрузить useEffect [link](https://beta.reactjs.org/learn/removing-effect-dependencies)
- убрать вычислимые свойста/зависимости
- в случае если это реакция на действия пользователя а не просто отображение, то логику нужно вставить в коллбек
- использовать seState(prev => prev + state)
- разбить на 2 независимых useEffect
- useEffectEvent
- Вынести статические объекты/функции из тела компонента (а если зависят от пропертей то наоборот в useEffect)
- Внести динамические объекты/функции в useEffect

### origin, referer, host
origin - тот кто отсылает
referer = origin + path
host - это ресурс на который идет реквест

в страницу которая должна передавать origin нужно вствить 
<meta name="referrer" content="origin" />

### package.json
если вставить то будет при запуске авто редирект на /react-main route
"homepage": "https://maxim1006.github.io/react-main",

### install app
npx create-react-app my-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Chat GPT
1. explain code
2. debug
3. transform from one programming language to another.
4. get solution or snippets of code on how to do something.
5. generate unit test
6. modify existing code
7. write document and comment our code.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
