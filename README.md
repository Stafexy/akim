# windowSizeHelper

_Компактный JavaScript для отображения размеров окна браузера и направления и длительности прокрутки.
Полезен для отладки адаптивного дизайна и тестирования разрешений._

## Подключение через CDN

Добавьте следующий тег `<script>` в `<head>` или в конец `<body>` вашей HTML-страницы:

```html
<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>
```

## Настройка параметров. Доступно два способа:

### Способ 1: Inline-конфигурация (рекомендуется)
Этот способ требует подключения скрипта, а затем сразу же определения параметров.
```html
<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>
<script>window.windowSizeHelper({topOffst: '30px', fontSize: '18px', bkgColor: '#ffc107'});</script>
```

### Способ 2: window.windowSizeHelperOptions
Этот способ требует определения объекта настроек перед подключением скрипта.
```html
<script>window.windowSizeHelperOptions = {topOffst: '30px', fontSize: '18px', bkgColor: '#ffc107'};</script>
<script src="https://cdn.jsdelivr.net/gh/Stafexy/akim@mods/windowSizeHelper.min.js"></script>
```

### Доступные параметры (они не обязательные):
```javascript
topOffst: '0px' (по умолчанию)  // Отступ от верха экрана
fontSize: '5px' (по умолчанию)  // Размер шрифта
bkgColor: 'red' (по умолчанию)  // Цвет фона подсказки
```

---
© 2024 Stafexy • MIT License
