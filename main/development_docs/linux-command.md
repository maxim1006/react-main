# посмотреть хедеры при запросе
curl -I https://google.com
curl -Ik https://google.com
curl -Ik -X POST https://google.com
curl --location --request POST https://google.com

-I - head; -k - insecure; -X - request

# clean RAM
sudo purge

# cd
cd ~ (вернуться в домашнюю директорию)

# touch (создать файл / create file)
touch file__name

# grep (найти)
grep "some string" __file-name__
grep -i "REact" __file-name__ (case insensitive)
grep -c "react" index.js (c is for count)
рекурсивный поиск слов в директории
grep -nri __слово-для-поиска__ __директория__

// поиск паттерна по пути
grep -rnw '/path/to/somewhere/' -e 'pattern'

// This will only search through those files which have .c or .h extensions:
grep --include=\*.{c,h} -rnw '/path/to/somewhere/' -e "pattern"

// This will exclude searching all the files ending with .o extension:
grep --exclude=\*.o -rnw '/path/to/somewhere/' -e "pattern"

// For directories it's possible to exclude one or more directories using the --exclude-dir parameter. For example, this will exclude the dirs dir1/, dir2/ and all of them matching *.dst/:
grep --exclude-dir={dir1,dir2,*.dst} -rnw '/path/to/somewhere/' -e "pattern"


grep -nr 'yourString*' .
The dot at the end searches the current directory. Meaning for each parameter:

-n            Show relative line number in the file
'yourString*' String for search, followed by a wildcard character
-r            Recursively search subdirectories listed
.             Directory for search (current directory)

# cat
cat .bashrc | less (показать файл + использовать less, q - выйти)
cat somefile > somefile2 (copy and create from file somefile to somefile2)

# mkdir
mkdir some-directory

mkdir -p /foo/bar/baz  # creates bar and baz within bar under existing /foo

# rm
rm -rf some-directory

// удалить нод модули в папке
rm -rf ./**/node_modules

# rmdir
rmdir some-directory (removes empty directory)

# find
// найти файл
find path -name filename
find . -name "*.js"

// найти папку
sudo find / -type d -name "*shared-docker*"

# mv
mv somefile /to/some/other/path
mv ~/Documents/Ukulele/Apache.pdf . (from ~/Documents/Ukulele/Apache.pdf to current folder)

# alias
alias pf="ps -e | grep $1" (pf shutter - пример найти PID процесса shutter)

# kill
kill pid-of-program 

# ps 
ps -ef | grep webstorm, затем kill PID
ps -ax | grep mysql // найти все процессы, выдаст pid

# find and kill process on port
Find:
sudo lsof -i :3000 // найти процесс на порту
Kill:
kill -9 <PID>

# get all PATH
echo $PATH

# get username
whoami

# add permission to folder for user (have to open terminal inside folder)
sudo chown __use-name__ .
sudo  chown mysql:mysql mysql-files // дать права пользователю mysql и группе mysql на папку mysql-files

sudo chown -R mysql /usr/local/var/mysql/
-R - recursively
# chmod
http://linuxcommand.org/lc3_lts0090.php

chmod 600 some_file // для файла только оунер может менять
chmod 755 ./ // для директории the directory owner has full access. All others may list the directory, but cannot create files nor delete them. This setting is common for directories that you wish to share with other users.

chmod +x file__name // сделать файл выполняемым, если создаю баш скрипт должен поставить

sudo chmod -R 777 /usr/local/var/mysql/  // проставить разрешения для запуска mysql, затем sudo /usr/local/Cellar/mysql/8.0.25_1/support-files/mysql.server start
-R - recursively
# check ownership
ls -laF /usr/local/var/mysql/

# add path to $PATH
export MONGO_PATH=/Users/max/mongodb
export PATH=$PATH:$MONGO_PATH/bin

or

export PATH=$PATH:~/mongodb/bin (inside user directory)

# mongo
(create folder for mongo to store its data)
mkdir -p /data/db 

(launch mongo)
sudo mongod

# echo
echo "export VAR_NAME='VAR_VALUE''" > var-file.env
echo "var-file" >> .gitignore
source ./var-file.env

">> appends to the file and > overwrites the file."

// создать файл
echo "Some line" > file1.txt

# create gzip
cat ./dist{file1, file2, file3}.js | gzip > gulpfile.js.gzip - //собрать все в 1 файл и добавить в gzip

# history
посмотреть предыдущие команды
-чтобы выполнить команду из истории (работает и с отрицательными номерами)
!__номер_команды__
- команда будет выведена но не запущена
!__номер_команды__:p 
- найти в history
history | grep __слово-которое-ищем__
- выполнить последнюю команду с sudo
sudo !!

# Горячие клавиши
курсор в начало
ctrl + a
курсор в конец
ctrl + e
удалить правую букву
ctrl + d
вправо на слово
esc + f
влево на слово
esc + b
выделить всю строку
ctrl + xx
вырезать всю строку
ctrl + u
вырезать слово слева от курсора
ctrl + w
вырезать все справа от курсора
ctrl + k
вставить
ctrl + y
перейти в предыдущую директорию
cd -

# команды
тут даже если первая с ошибкой вторая попробует выполниться
command1; command2;
первая упала вторая не выполнится
command1 && command2
первая выполнилась вторая не выполнится (первая не выполнилась вторая выполнится)
command1 || command2

# просмотр файлов
смотреть весь
cat __имя-файла__
смотреть весь со строками
nl __имя-файла__
смотреть весь c less
less __имя-файла__
смотреть весь c more (тоже что лесс только в конце не надо q для выхода нажимать)
more __имя-файла__
смотреть определенное количество строк (по умолчанию 10) в начале и конце
head -n + __кол-во-строк__ __имя-файла__
tail -n + __кол-во-строк__ __имя-файла__

# просмотр информации о команде
чтобы выйти shift + q
man __имя-команды__ 

# просмотр логов с tail
tail -f logs/app/application.log

# узнать свои ip
ifconfig | grep inet (последняя строка ipv4 inet 10.236.135.175 --> 10.236.135.175 netmask 0xffffe000, также можно посмотреть в cisko: details -> statistics)




