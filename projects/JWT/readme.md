JWT (json web token использую вместо sessionId) - только для authorization (check if user who sends requests the same user as logged on during authentication) not authentication (check username and password)

Преимущество JWT перед sessionId в том что сервер не хранит никаких кук или инфо о пользователе, все зашито в JWT который хранится на клиенте

1) Дергаю логин http://localhost:1338/login
получаю 2 токена

2) могу дернуть запрос и получу ровно того кто в боди с name
3) могу дернуть рефреш токен и снова получить access token
4) могу удалить рефреш токен и тогда не смогу получить access token 

node -> require("crypto").randomBytes(64).toString('hex')
