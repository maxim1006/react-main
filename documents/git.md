#add github project
git remote add origin git@github.com:maxim1006/react-main.git

#add mail
git config --global user.email "your@email"

# add name
git config --global user.name "FIRST_NAME LAST_NAME"

# как откатывать коммиты / ветки
1) откатываю с помощью reset, если надо откатить все задачи до какого-то коммита
   git reset --hard e133bc020
   git push origin master --force // это если в мастере
2) если надо убрать коммит между то использую rebase
git rebase -r --onto <хеш коммита который накатываю> <хеш коммита вместо которого накатываю>
Это обычно хеши коммитов - мержей в ветку
пример:
git rebase -r --onto e42b17ca3 e133bc020
git push origin master --force

3) откатываю с помощью revert но из минусов убьет все коммиты в ветке
git revert --no-commit <hash-начала-feature-ветки (не включая)>..<название откатываемой ветки / хеша коммита>
