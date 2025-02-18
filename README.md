# windowSizeHelper

_Минималистичный JavaScript-скрипт для отображения размеров окна браузера и направления прокрутки непосредственно на вашей странице.  Идеально подходит для отладки адаптивного дизайна и тестирования разрешений._

## Подключение через CDN

Добавьте следующий тег `<script>` в `<head>` или в конец `<body>` вашей HTML-страницы:
<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>

Настройка параметров
Доступно два способа:

### Способ 1: Inline-конфигурация (рекомендуется)

<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>
<script>
  window.windowSizeHelper({
    topOffset: '30px',      // Отступ от верха
    fontSize: '18px',       // Размер шрифта
    backgroundColor: '#ffc107' // Цвет фона
  });
</script>

### Способ 2: window.windowSizeHelperOptions

Перед подключением скрипта:

<script>
  window.windowSizeHelperOptions = {
    topOffset: '30px',
    fontSize: '18px',
    backgroundColor: '#ffc107'
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>

### Доступные параметры:
topOffset: '0px' (по умолчанию)
fontSize: '16px' (по умолчанию)
backgroundColor: '#fa0' (по умолчанию)
© 2024 Stafexy • MIT License
