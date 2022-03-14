<h1 align="center"> Trustartup Frontend </h1>

<h3 align="center">
  Микросервис для проекта Trustartup.
</h3>

## Содержание

-   [Описание](#описание)
-   [Технологии](#технологии)
-   [Использование](#использование)

## Описание

~~Ну тут frontend~~ Отдаёт статические файлы фронтенда.

## Технологии

-   React (Create React App)
-   Tailwind
-   Docker

## Использование

Микросервис может быть запущен локально или в докер контейнере.

### Локально

-   [Node.js](https://nodejs.org/en/download/)

Сначала установите зависимости:

```bash
npm install
```

Затем запустите сервер разработки по адресу [http://localhost:3000](http://localhost:3000):

```bash
npm start
```

Изменения автоматически перезагружают страницу.

Доступные команды:

-   `npm test` - запускает test runner.
-   `npm run build` - компилирует приложение для production в папку build.
-   `npm run eject` - удаляет зависимости разработки. **_необратимо_**

### Docker

-   [Docker](https://www.docker.com/get-docker)

Сначала постройте образ:

```bash
docker-compose build
```

Запустите микросервис:

```bash
docker-compose up -d
```

По умолчанию сервис запустится на `3000` порте
