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

> install docker
