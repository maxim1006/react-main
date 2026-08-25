# sentry-main

Проект для проверки интеграции с Sentry и запуска официального Sentry Self-Hosted.

## Основано на официальной документации

- Vite (`create-vite`, запуск `dev/build/preview`): [https://vite.dev/guide/](https://vite.dev/guide/)
- Sentry JavaScript/React SDK (`Sentry.init`, `captureMessage`, `captureException`): [https://docs.sentry.io/platforms/javascript/guides/react/](https://docs.sentry.io/platforms/javascript/guides/react/)
- Sentry Self-Hosted: [https://develop.sentry.dev/self-hosted/](https://develop.sentry.dev/self-hosted/)
- Официальный репозиторий Self-Hosted: [https://github.com/getsentry/self-hosted](https://github.com/getsentry/self-hosted)

## Локальный запуск React-приложения

```bash
npm install
npm run dev
```

## Запуск Sentry Self-Hosted (Docker)

```bash
chmod +x run.sh stop.sh
./run.sh
```

`run.sh`:
- клонирует `getsentry/self-hosted` в `.runtime/self-hosted` (если нужно);
- переключается на последний официальный release tag;
- выполняет `./install.sh`;
- запускает `docker compose up --wait`.

Sentry будет доступен на [http://127.0.0.1:9000/](http://127.0.0.1:9000/).

## Остановка Sentry Self-Hosted

```bash
./stop.sh
```
