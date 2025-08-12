import * as http from 'http';

// стандартный вызов
http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const result = JSON.stringify({
        message: 'Hello mom',
    });

    response.end(result);
}).listen(3002);

// чтобы посмотреть как приходит стриминг - то надо не в хроме смотреть
// curl -v --raw http://localhost:3003/
http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const result = JSON.stringify({
        message: 'Hello mom from Max',
    });

    response.write(result.slice(0, 9));

    setTimeout(() => {
        response.write(result.slice(9, 18));
    }, 2000);

    setTimeout(() => {
        response.end(result.slice(18));
    }, 4000);
}).listen(3003);

// стриминг с html
http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html;charset=UTF-8');

    let html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
Первая часть
`;

    response.write(html);

    setTimeout(() => {
        html = `Вторая часть`;
        response.write(html);
    }, 2000);

    setTimeout(() => {
        html = `Треться часть`;
        response.end(html);
    }, 4000);
}).listen(3004);
