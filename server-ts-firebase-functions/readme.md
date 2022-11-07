### Useful links
[firebase](https://console.firebase.google.com/)
[firestore crud](https://cloud.google.com/nodejs/docs/reference/firestore/latest)

### установка firebase
1) npm i firebase-tools -g
2) firebase init functions (дальше настраиваю проект, переношу файлы и подстраиваю конфиги)
3) добавить в firebase.json rewrites с названием функции которую хочу редиректить
// вот тут появится endpoint для users
http://127.0.0.1:5001/maximprosv-server-ts/us-central1/functionsApp/api/v1/users

очень неприятно что deploy functions отработают только в платных подписках, но хотябы есть эмуляция, правда отстой что доки убогие
