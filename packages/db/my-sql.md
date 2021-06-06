1) https://formulae.brew.sh/formula/mysql
2) brew install mysql (при чем надо с паролем)
3) mysql -u root -p (и полдня для понимания что надо раздать пермишены для sudo chmod -R 777 /usr/local/var/mysql/ )

### SHOW DATABASES; 
(после каждого скрипта обязательно ;)

### CREATE DATABASE sql_course;

### DROP DATABASE sql_course;

### USE sql_course;
использовать бд

### show tables;

### CREATE
create table teacher(
    id INT AUTO_INCREMENT PRIMARY KEY,
    surname VARCHAR(255) NOT NULL
);

create table lesson(
    id int auto_increment primary key,
    name varchar(255) not null,
    teacher_id int not null,
    foreign key (teacher_id) reference teacher(id) // это референс на табличку с учителями связываю teacher_id с teacher(id)
);

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(255) NOT NULL UNIQUE, 
    bio TEXT, 
    country VARCHAR(2)
)

### show columns from teacher;

### insert into teacher (surname) values("Petrov");
insert into lesson (name, teacher_id) values ("Math", 6), ("Computer science", 6), ("English", 2), ("Physics", 3);

### select * from teacher;
select id, surname from teacher;
select distinct surname from teacher; // distinct - выдать только уникальные записи
select * from teacher where id = 1;
select * from teacher where id > 1;
select * from teacher where surname = "Sidorov";
select * from teacher where surname = "Sidorov" limit 2;
select * from teacher limit 2; // выбрать 2 первых записи
select id as "_id", surname as "_surname" from teacher; // переименовать столбцы
select * from teacher order by surname; // отсортировать по surname
select * from teacher order by id desc; // выбрать по id в обратном порядке
select * from teacher where surname like "ma%"; // % заменит все что осталось на что-то типо регекс .
select * from teacher where id < 3 and age < 40;
select * from teacher where id < 3 or age < 40;
select * from teacher where not id = 2;
select * from teacher where age between 35 and 45;
SELECT teacher.surname, lesson.name FROM teacher INNER JOIN lesson ON teacher.id = lesson.teacher_id; // мапим учителей на уроки
SELECT * FROM teacher UNION SELECT * FROM lesson; // вывожу 2 таблицы подряд
SELECT AVG(age) FROM teacher; // вернет средний возраст учителей
SELECT MAX(age), MIN(age) FROM teacher;
SELECT SUM(AGE) FROM teacher;
SELECT age, COUNT(age) FROM teacher GROUP BY age; // сгруппирует учителей по возрасту

### alter table teacher add age int;
Добавить колонку age в таблицу teacher

ALTER TABLE user_entity AUTO_INCREMENT=1; // сбросить индексы


### update teacher set age = 20 where id = 1;

### delete from teacher where id = 1;
