# Работа с keycloak из react/next.js

### start
docker-compose up --build (--build - всегда пересобирать images)

- запустить postgresql локально
  brew services start postgresql

- остановить postgresql локально
brew services stop postgresql

http://localhost:80/ - тут фронт
http://localhost:3000/ - тут бек node
http://localhost:5432/ - тут db

### кейклок контейнер https://www.keycloak.org/server/containers

Keycloak starts in production mode, using only secured HTTPS communication, and is available on https://localhost:8443.

Health check endpoints are available at https://localhost:8443/health, https://localhost:8443/health/ready and https://localhost:8443/health/live.

Opening up https://localhost:8443/metrics leads to a page containing operational metrics that could be used by your monitoring solution.

### docker volume prune
https://github.com/docker-library/postgres/issues/453
docker volume prune

когда работаю с бд обязательно запускаю docker volume prune для очистки volume у дб

### чтобы создать сертификат для localhost
https://letsencrypt.org/docs/certificates-for-localhost/

crt и key -> pem
и далее в 
https://www.keycloak.org/server/enabletls ищу pem

### realm 
В контексте Keycloak, "realm" (дословно "царство" или "область") представляет собой изолированное пространство для управления учетными записями, аутентификации и авторизации. Realm может быть представлен как отдельное приложение или сервис, имеющее свои собственные наборы пользователей, клиентов (клиентские приложения) и конфигурацию безопасности.

Когда вы используете Keycloak, вы создаете realm для вашего приложения или сервиса. Внутри этого realm вы можете определять пользователей, их роли, настраивать параметры аутентификации и авторизации, а также настраивать клиентские приложения, которые имеют доступ к вашему realm.

Realm обеспечивает изоляцию данных и настроек между разными приложениями или сервисами, что делает его мощным инструментом для управления безопасностью в различных контекстах вашего приложения или организации.

### client
В Keycloak термин "client" обозначает любое приложение или сервис, которое обращается к серверу Keycloak для аутентификации и/или авторизации пользователей. Клиенты в Keycloak могут быть различного типа, включая веб-приложения, мобильные приложения, сервисы API и так далее.

Каждый клиент в Keycloak имеет свои собственные настройки безопасности и конфигурации, такие как:

Идентификатор клиента (Client ID): Уникальный идентификатор, который используется для идентификации клиента при обмене данными с сервером Keycloak.
Секрет клиента (Client Secret): Секретный ключ, используемый для аутентификации клиента при обмене данными с сервером Keycloak.
Роли и разрешения: Клиенты могут иметь свои собственные роли и разрешения, которые могут быть назначены пользователям при авторизации.
Конфигурация протоколов аутентификации: Клиенты могут настраиваться для использования различных протоколов аутентификации, таких как OpenID Connect, SAML и других.
Каждый клиент в Keycloak также может быть настроен для использования различных функций безопасности, таких как SSO (Single Sign-On), множественные области (Realms), ограничение доступа на основе ролей и прочее.



