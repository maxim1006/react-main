### Настройка кастомного гитлаб у себя на сервере
https://docs.gitlab.com/install/package/ubuntu/?tab=Community+Edition
https://www.youtube.com/watch?v=TftSa_xJKXM&list=PLg5SS_4L6LYuJxTrdU5vzBaVGlZko8Hsy&index=8&ab_channel=ADV-IT



### Настройка двухфакторную аутентификацию в Gitlab
```yaml
ssh-keygen -o
cat ~/.ssh/id_rsa.pub
```
и вставляем в профиль на Gitlab в список ssh-ключей

### fix logon problem
1.Open services.msc
2.Find GitLab Runner.
3.Go to properties.
4.Set password to correct user password

### For registration runner go to
https://docs.gitlab.com/runner/register/#windows

GitLab Runner — это сервер (процесс), который запускает джобы CI/CD
Executor — Executor — это программа которая исполняет команды внутри Runner’а. Он определяет, где и как будет исполняться код. (бывают shell docker k8s и тд)
