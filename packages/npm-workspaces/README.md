Project for config tests 

### General
Коммитить в гитхаб - запускаю semantic-release
GH_TOKEN={{GITHUB_TOKEN}} npx semantic-release --no-ci

Коммитить как 
{TYPE}({TICKET}): {description}
ex.: feat(MAX-1): common config for prettier and browserslist

TYPEs:
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
docs: Documentation only changes
feat: A new feature
fix: A bug fix
chore: техдолг, архитектура, настройки, зависимости, те не сам код функциональности приложения
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests

### Browserslist
могу подключить либо через package.json
```json
  "browserslist": [
    "extends @max/browserslist-config"
  ],
```
либо через .browserslistrc
```text
extends @max/browserslist-config
```
