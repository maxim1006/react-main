### Redis
скачиваю
https://redis.io/

в папку и захожу в нее и выполняю
make

https://redis.io/topics/quickstart

sudo cp src/redis-server /usr/local/bin/
sudo cp src/redis-cli /usr/local/bin/

чтобы сделать переменные и теперь могу запустить сервер
redis-server

а чтобы запустить redis-cli в соседнем терминале запускаю 
redis-cli

// в connect-redis пакеты для работы с express
npm install redis connect-redis express-session @types/redis @types/express-session @types/connect-redis

# Strings
set __key__ __value__ (set name Max or set email test@mail.com)

get __key__

getrange __from__ __start-position-number__ __end-position-number__ (getrange email 0 4 => "test@")

// запись нескольких строк, ключ значение
mset lang English technology Redis

mget lang technology 
=> 1) "English"
   2) "Redis"

// длина строки
 strlen __key__ (strlen lang => 7)
 
 // могу присваивать и числа
 set count 1

### incr decr (увеличить/уменьшить на 1)
incr count (увеличит count на 1)
decr count (уменьшит count на 1)
incrby count 10 (увеличит count на 10)
decrby count 10 (уменьшит count на 10)

### expire (удалить значение через n секунд)
expire __key__ __seconds-when-expire__

### setex (засетить значение на n секунд и удалить)
setex __key__ __seconds-when-expire__ __value__



#Lists

### keys
// вывожу все ключи
keys * 

### flushall (удаляю все)
flushall

### lpush/кзгыр (добавляю значение в начало/конец списка)
lpush __list__ __value__

### lrange (вставляет дату в начало списка)
lrange __list__ __start__ __stop__
// получаю всю дату в массиве
lrange family 0 -1

### llen (длина списка)
llen __list__

### lpop, rpop (удалить по элементу в начале и конце)

### lset (поменять элемент в списке) position 0 based
lset __list__ __position__ __new-value_
lset family 1 Lili

### linsert (вставить значение перед/после итема в списке)
linsert __key__ __before|after__ __value__ __inserted-value__
linsert family before Alisa Alla

### lindex (найти значение на определенной позиции)
lindex __key__ __position__

### lpushx/rpushx (вставить в начало/конец списка только если он существует)
lpushx __key__ __value__


