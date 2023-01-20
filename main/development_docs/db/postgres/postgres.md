[Супер статья про ноду и постгрю (как создать юзера бд и тд)](https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/)

### installation
#### brew install postgresql (brew services start postgresql/brew services stop postgresql)

- запускаю postgres командой
  brew services start postgresql
- подключаюсь к ней с помощью psql: psql postgres
  \conninfo
  \q: Exit psql connection
  \c: Connect to a new database
  \dt: List all tables
  \du: List all roles
  \list: List databases
- создаю роль me: CREATE ROLE me WITH LOGIN PASSWORD 'password';
- даю этой роли права на создание дб: ALTER ROLE me CREATEDB;
- \du - проверяю роли \q - выхожу из текущей сессии
- подключаюсь с ролью me: psql -d postgres -U me (должно появиться postgres=>)
- создаю бд CREATE DATABASE api;
- смотрю текущие бд \list
- подключаюсь к бд \c api
- 
#### скачать клиент https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.15/macos/
делаю psql postgres, затем \conninfo
чтобы получить инфо о бд тут /tmp это хост и порт (5432) тоже указан, которые использую при настройке сервера, username: me (см ниже) и пароль тоже от него
!!!сперва должен запустить бд только потом зайти в клиент!!!
#### синтаксис

- Creating a table in Postgres
```
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```

- заполнить табличку
```
insert INTO users (name, email)
VALUES ('Max', 'max@test.com'), ('Aliya', 'al@test.com');
```
