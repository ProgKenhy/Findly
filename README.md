# Findly - Мобильное приложение с картой

Это мобильное приложение, разработанное с использованием React Native и с возможностью отображения позиций пользователей на карте.

## Структура проекта

Проект использует следующий стек технологий:
- **React Native** для разработки мобильного приложения.
- **FastAPI** для создания бэкенда.
- **PostgreSQL** для хранения данных.

## Требования

Для работы с проектом вам потребуется:
- [Node.js](https://nodejs.org/) (рекомендуемая версия 14.x или выше).
- [npm](https://www.npmjs.com/) или [Yarn](https://yarnpkg.com/).
- [Android Studio](https://developer.android.com/studio) (для Android) или [Xcode](https://developer.apple.com/xcode/) (для iOS).

## Установка и запуск проекта

### 1. Клонировать репозиторий

```bash
git clone https://github.com/ProgKenhy/Findly.git
cd Findly
```

2. Установить зависимости
Для установки зависимостей, выполните одну из следующих команд:

С использованием npm:
```bash
npm install
```
С использованием Yarn:
```bash
yarn install
```

Install the following packages:
```bash
npx expo install react-native-svg lucide-react-native
```

Запустить!
```bash
 npx expo start
```

4. Настройка переменных окружения
Если проект использует переменные окружения (например, для API-ключей или конфигурации сервера), создайте файл .env в корне проекта и добавьте необходимые переменные. Пример:

API_URL=https://api.yoursite.com
DATABASE_URL=postgres://user:password@localhost/dbname
Не забудьте заменить пример на свои данные.

5. Подключение к базе данных (PostgreSQL)
Если проект работает с базой данных, настройте PostgreSQL:

Установите PostgreSQL на свой локальный сервер или используйте облачный сервис.
Создайте базу данных и подключитесь к ней с помощью настроек из .env.
6. Дополнительные команды
Для запуска бэкенда (если используется FastAPI):
```bash
uvicorn main:app --reload
```
