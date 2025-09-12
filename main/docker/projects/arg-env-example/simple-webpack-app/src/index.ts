__webpack_public_path__ = __VARIABLE_FROM_DOCKER_ARG__; // __webpack_public_path__ === my arg

console.log('__webpack_public_path__ ', __webpack_public_path__); // my arg
console.log(`__VARIABLE_FROM_DOCKER_ENV__: ${__VARIABLE_FROM_DOCKER_ENV__}`); // custom env

window.document.addEventListener('click', async (): Promise<any> => {
    // вместо стандартного пути будет /my%20arg778.index.js из-за __webpack_public_path__
    const { default: export1 } = await import('./scripts/export1');
    const { default: export2 } = await import('./scripts/export2');

    console.log(export1, export2);
});
