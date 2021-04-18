### Postgres
(cделал черзе pgAdmin)
CREATE DATABASE airbnb;

(работает только с SQL в постгре нет)
SHOW DATABASES;

// создание
```sql
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    bio TEXT, 
    country VARCHAR(2)
)
```

```postgres
CREATE TABLE Users (
    id SERIAL PRIMARY KEY, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    bio TEXT, 
    country VARCHAR(2)
)
```

```postgres
CREATE TABLE Rooms (
    id SERIAL, 
    street VARCHAR(255) NOT NULL UNIQUE, 
    owner_id INT NOT NULL, 
    PRIMARY KEY(id),
    FOREIGN KEY(owner_id) 
    REFERENCES Users(id)
)
```

in SQL DATETIME anin in ps TIMESTAMP
```postgres
CREATE TABLE Bookings (
    id SERIAL, 
    guest_id INT NOT NULL, 
    room_id INT NOT NULL, 
    check_in TIMESTAMP, 
    PRIMARY KEY(id),
    FOREIGN KEY(guest_id) REFERENCES Users(id),
    FOREIGN KEY(room_id) REFERENCES Rooms(id)
)
```

// insertion
```sql, postgres
INSERT INTO Users (email, bio, country)
VALUES (
    'hello@world.com',
    'my name is max',
    'ru'
),
(
	'maximprosv@gmail.com',
	'still max',
	'ru'
)
```

// тут надо обратить внимание что все улицы для 1го оунера
```sql, postgres
INSERT INTO Rooms(owner_id, street)
VALUES
(1, 'paveletskaya'),
(1, 'centralnaya'),
(1, 'lubyanka')
```

```sql, postgres
INSERT INTO Bookings(room_id, guest_id, check_in)
VALUES
(1, 1, '2020-04-19 19:10:25-07'),
(1, 2, '2020-04-19 20:10:25-07')
```

// select
```sql, postgres
SELECT * FROM public.users
ORDER BY id ASC 
```

```sql, postgres
SELECT email, id FROM public.users
ORDER BY id ASC 
LIMIT 1
```

```sql, postgres
SELECT email, id FROM public.users
ORDER BY id DESC 
LIMIT 2
```

```sql, postgres
SELECT email, id FROM public.users
WHERE country='ru'
ORDER BY id DESC 
LIMIT 2
```

```sql, postgres
SELECT email, id FROM public.users
WHERE country='ru'
AND id > 1
ORDER BY id DESC 
LIMIT 2
```

```sql, postgres
SELECT email, id FROM public.users
WHERE country='ru'
OR id > 1
ORDER BY id DESC 
LIMIT 2
```

```sql, postgres
SELECT email, id FROM public.users
WHERE email LIKE 'm%'
ORDER BY id DESC 
LIMIT 2
```

// join - получаю пользователей из 2х таблиц сразу (LEFT, RIGHT, INNER, OUTER)
inner - основной
```sql, postgres
SELECT * FROM Users
INNER JOIN Rooms
ON Rooms.owner_id = Users.id;
```

left - вернет даже тех оунеров у которых нет комнат, right - тоже что иннер
```sql, postgres
SELECT * FROM Users
LEFT JOIN Rooms
ON Rooms.owner_id = Users.id;
```

могу переименовывать id
```sql, postgres
SELECT 
    Users.id AS user_id,
    Rooms.id AS room_id,
    email,
    street
FROM Users
INNER JOIN Rooms
ON Rooms.owner_id = Users.id;
```

// комнаты запуканные юзером
```sql, postgres
SELECT 
    guest_id,
    street,
    check_in
FROM Bookings
INNER JOIN Rooms ON Rooms.owner_id = guest_id
WHERE guest_id = 1;
```

// история всех кто был в комнате
```sql, postgres
SELECT 
    room_id,
	guest_id,
	email,
	bio
FROM Bookings
INNER JOIN Users ON Users.id = guest_id
WHERE room_id = 1;
```



// drop
```sql, postgres
DROP TABLE Users;
DROP DATABASE airbnb;
```


// index (чтобы гораздо быстрее находить данные, но медленнее запись и требует больше памяти)
CREATE INDEX email_index ON Users(email)



CREATE - это keyword в то время как Users - identifier
PRIMARY KEY - id must be unique and not null
AUTO_INCREMENT - создать id за меня и увеличивать постепенно
VARCHAR(255) - стринга с max length 255
TEXT - стринга с неопределенным размером
VARCHAR(2) - максимальная длинна 2
WHERE email LIKE 'm%' - найти все email начинающиеся с m
FOREIGN KEY(owner_id) 
    REFERENCES Users(id) - это связка на другую табличку, если так сделать то теперь юзера просто так не удалить так как у него есть связка на комнаты

