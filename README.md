<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# Интеграция windowSizeHelper в ваш проект

_Легко отображайте размеры окна и направление прокрутки на вашей веб-странице._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Explain how to include the script, either directly or via CDN. Include options and examples.
-->

## Шаг 1: Интеграция `windowSizeHelper`

_Давайте добавим этот полезный скрипт в ваш проект! :sparkles:_

Этот шаг описывает, как интегрировать скрипт `windowSizeHelper` на вашу веб-страницу. Вы можете либо скачать скрипт и включить его локально, либо использовать CDN для легкого доступа.

### :computer: Действие: Включите скрипт

1.  **Выберите метод:** Решите, скачивать скрипт или использовать CDN.

    *   **Скачивание:**
        *   Скачайте `windowSizeHelper.min.js` (рекомендуется для production) или `windowSizeHelper.js` из этого репозитория.
        *   Поместите скачанный файл в подходящий каталог в вашем проекте (например, `/js/`).

    *   **CDN:**
        *   Используйте ссылку CDN для включения скрипта непосредственно из сети доставки контента.
        *   Пример:
            ```html
            <script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>
            ```

2.  **Добавьте тег `<script>` в HTML:** Разместите тег `<script>` в `<head>` или, предпочтительно, в конце `<body>` вашего HTML-документа.

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Моя страница</title>
      <!-- Другие элементы head -->
    </head>
    <body>
      <!-- Ваш контент здесь -->
      <script src="path/to/windowSizeHelper.min.js"></script>
    </body>
    </html>
    ```

    *   Замените `path/to/windowSizeHelper.min.js` правильным путем к вашему скачанному файлу или URL-адресом CDN.

### :gear: Настройка параметров

`windowSizeHelper` можно настроить с помощью различных параметров конфигурации. Вы можете предоставить эти параметры двумя способами:

**Способ 1: Встроенная конфигурация (рекомендуется)**

Этот метод включает передачу объекта параметров непосредственно в функцию `window.windowSizeHelper()` после включения скрипта.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Моя страница</title>
  <!-- Другие элементы head -->
</head>
<body>
  <!-- Ваш контент здесь -->
  <script src="path/to/windowSizeHelper.min.js"></script>
  <script>
    window.windowSizeHelper({
      topOffset: '30px',
      fontSize: '18px',
      backgroundColor: '#ffc107' // Янтарный цвет
    });
  </script>
</body>
</html>

markdown
Способ 2: Использование window.windowSizeHelperOptions

Этот метод устанавливает параметры до загрузки скрипта.

<!DOCTYPE html>
<html>
<head>
  <title>Моя страница</title>
  <!-- Другие элементы head -->
  <script>
    window.windowSizeHelperOptions = {
      topOffset: '30px',
      fontSize: '18px',
      backgroundColor: '#ffc107'
    };
  </script>
</head>
<body>
  <!-- Ваш контент здесь -->
  <script src="path/to/windowSizeHelper.min.js"></script>
</body>
</html>

html
Доступные параметры:

topOffset: Строка, определяющая верхний отступ виджета. Примеры: '10px', '2em', '5%'. По умолчанию: '0px'.
fontSize: Строка, определяющая размер шрифта виджета. Примеры: '12px', '1.2em', 'smaller'. По умолчанию: '16px'.
backgroundColor: Строка, определяющая цвет фона виджета. Примеры: '#ffffff', 'red', 'rgba(0, 0, 0, 0.5)'. По умолчанию: '#fa0'.
Пример со всеми параметрами:

window.windowSizeHelper({
  topOffset: '50px',
  fontSize: '20px',
  backgroundColor: '#4CAF50' // Зеленый цвет
});

javascript
[!IMPORTANT] Если используется window.windowSizeHelperOptions, убедитесь, что объект window.windowSizeHelperOptions определен до включения скрипта windowSizeHelper.min.js. Встроенный метод переопределяет параметры, определенные в window.windowSizeHelperOptions.

Теперь, когда вы добавили скрипт, подождите около 20 секунд, обновите страницу, и вы должны увидеть виджет. Следующий шаг - внести небольшое изменение в параметры и зафиксировать его.

Получить помощь: Напишите на нашей доске обсуждений • Просмотрите страницу статуса GitHub

© 2024 Stafexy • Кодекс поведения • Лицензия MIT
