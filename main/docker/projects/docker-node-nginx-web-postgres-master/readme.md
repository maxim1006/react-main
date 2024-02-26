### start
docker-compose up --build (--build - всегда пересобирать images)

- запустить postgresql локально
  brew services start postgresql

- остановить postgresql локально
brew services stop postgresql

http://localhost:80/ - тут фронт
http://localhost:3000/ - тут бек node
http://localhost:5432/ - тут db

2) To push your images to Docker’s repository run the docker tag and then the docker push commands. You will first need to login with your Docker ID. If you do not have a free account, you can create one here.
   
   $ docker login
   $ docker tag nginx-frontend <dockerid>/nginx-frontend
   $ docker push <dockerid>/nginx-frontend
