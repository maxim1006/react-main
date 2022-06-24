### docker ps
список всех запущенных в системе докеров

### docker build -t image__name dockerfile__path
сбилдить докер image ex: docker build -t maxim1006/demoapp:1.0 .
-t это --tag

на выходе получаю id (Successfully built 48a305f17997) который затем использую в docker run



### docker run
// так запускаю (пример проекта из текущей папки)
docker run -it --rm -d -p 8080:8080 --name web maxim1006/demoapp:1.0

-it - interactive (чтобы можно было что-то менять в образе)

(https://docs.docker.com/engine/reference/commandline/run/)



### https://hub.docker.com/
храниище всех докер образов

мой dockerid maxim1006

To push your images to Docker’s repository run the docker tag and then the docker push commands. You will first need to login with your Docker ID. If you do not have a free account, you can create one here.
   
$ docker login
$ docker tag nginx-frontend <dockerid>/nginx-frontend
$ docker push <dockerid>/nginx-frontend



### volumes (mount) 
Маунт тоже что и volume только с более verbose syntax
для шаринга даты между контейнерами, создаю на локальной машине папку 
docker volume create folder__name
ex.: docker volume create shared-docker

Команды  
docker volume ls - узнать все вольюмы
docker volume inspect volume__name (ex.  docker volume inspect shared-docker) - инфо о вольюме
docker volume rm volume__name - удалить вольюм

Пример запуска докера с вольюмом
(-d Run container in background and print container ID)

docker run -p 5000:8080 -d \
  --name demoapp \
  --mount source=shared-docker,target=/app \
  48a305f17997

### забрать докер образ из докер репо
docker pull __image-name__

