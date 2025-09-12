# @max/prettier-config

Единый переиспользуемый конфиг Prettier для проектов и монорепозиториев. Помогает поддерживать единый стиль форматирования кода без дублирования настроек.

## Назначение

- Централизует настройки Prettier в одном пакете
- Упрощает подключение и обновление форматирования в проектах
- Гарантирует единообразие стиля между репозиториями

Текущие настройки (см. `index.js`):

```js
module.exports = {
  singleQuote: true,
  printWidth: 120,
  semi: true,
  tabWidth: 2,
  endOfLine: 'lf',
  useTabs: false,
};
```

Требования:

- Node.js >= 18
- peerDependency: `prettier@2.x || 3.x`

## Где используется

- В этой монорепе в каталоге `packages/npm-workspaces`:
  - файл `packages/npm-workspaces/.prettierrc.yml` ссылается на `@max/prettier-config`
  - в `packages/npm-workspaces/package.json` пакет указан в `devDependencies`

Также может использоваться в любых ваших проектах/пакетах.

## Установка

```bash
npm i -D @max/prettier-config prettier
# или
yarn add -D @max/prettier-config prettier
# или
pnpm add -D @max/prettier-config prettier
```

## Примеры использования

Выберите любой из удобных вариантов:

1. Файл `.prettierrc.js`

```js
module.exports = require('@max/prettier-config');
```

2. В `package.json` (поле `prettier`)

```json
{
  "prettier": "@max/prettier-config"
}
```

3. Файл `.prettierrc.yml`

```yaml
'@max/prettier-config'
```

4. Явное указание конфига через CLI

```bash
npx prettier . --write --config @max/prettier-config
```

## .prettierignore

При создании исключает файлы и директории из форматирования Prettier.

- В корне проекта (монорепы) — Prettier автоматически подхватывает файл из текущего рабочего каталога
- Либо в каждом пакете монорепы, если запускаете Prettier из каталога пакета

## Скрипты

Добавьте скрипты в `package.json` проекта:

```json
{
  "scripts": {
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

## Изменения

Смотри `CHANGELOG.md` в этом пакете.
