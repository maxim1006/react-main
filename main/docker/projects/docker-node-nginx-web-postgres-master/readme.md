- собираю образ
docker-compose up --build

- запустить postgresql
  brew services start postgresql
- 
- остановить postgresql
brew services stop postgresql

1) start app
docker-compose -up обязательно в терминале а то в идее почему то не работает

http://localhost:80/ - тут фронт

2) To push your images to Docker’s repository run the docker tag and then the docker push commands. You will first need to login with your Docker ID. If you do not have a free account, you can create one here.
   
   $ docker login
   $ docker tag nginx-frontend <dockerid>/nginx-frontend
   $ docker push <dockerid>/nginx-frontend
