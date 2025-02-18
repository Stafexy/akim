(function() {
  // Конфигурация по умолчанию
  const defaultOptions = {
    topOffset: '0px',
    fontSize: '16px',
    backgroundColor: '#fa0',
  };

  // Функция для объединения настроек пользователя с настройками по умолчанию
  function extendOptions(userOptions) {const options = {};for (const key in defaultOptions) {options[key] = (userOptions && userOptions[key]) !== undefined ? userOptions[key] : defaultOptions[key];}return options;}

  // Основная функция, принимающая настройки
  window.windowSizeHelper = function(userOptions) {
    const settings = extendOptions(userOptions);

    // Стили CSS (инлайновые, чтобы не требовать внешнего файла)
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --top-offset: ${settings.topOffset}; /* отступ подсказки сверху */
        --font-size: ${settings.fontSize}; /* размер шрифта подсказки */
        --bcg-color: ${settings.backgroundColor}; /* цвет заливки подсказки */
      }
      #element::-webkit-scrollbar {display: none;}
      .fixed {position: fixed; z-index: 999999999999999999; top: var(--top-offset);}
      .wh-help {pointer-events: none; width: 100%; height: 20px; display: flex; justify-content: center; align-content: center; flex-wrap: wrap; font-family: 'Exo 2', Arial, sans-serif;}
      .wh-block {background-color: var(--bcg-color);}
      .wh-var {font-size: var(--font-size); padding: 0px 10px;}
    `;
    document.head.appendChild(style);

    // Создаем элементы DOM
    const whHelp = document.createElement('div');
    whHelp.className = 'wh-help';

    const whBlock = document.createElement('div');
    whBlock.className = 'wh-block';

    const whVar = document.createElement('div');
    whVar.className = 'wh-var';
    whBlock.appendChild(whVar);
    whHelp.appendChild(whBlock);

    // Функция обновления текста подсказки
    let prevScroll = 0;
    function updateWindowSize() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // кроссбраузерность
      const scrollDirection = currentScroll > prevScroll ? "↓" : "↑";
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;  // кроссбраузерность
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; // кроссбраузерность

      whVar.textContent = `Ш: ${width} | В: ${height} | Скролл ${scrollDirection}: ${Math.round(currentScroll)}`;
      prevScroll = currentScroll;
    }

    // Обработчики событий
    function init() {
      updateWindowSize();
      window.addEventListener("resize", updateWindowSize, false);
      window.addEventListener("scroll", updateWindowSize, false);
      whHelp.classList.add('fixed');

      // Добавляем созданный элемент в body
      document.body.appendChild(whHelp);
    }

    // Запускаем инициализацию после загрузки DOM
    if (document.readyState === 'loading') {document.addEventListener('DOMContentLoaded', init);} else {init();}
  }; // конец windowSizeHelper

    // Автоматическая инициализация, если опции переданы через window.windowSizeHelperOptions
    if (window.windowSizeHelperOptions) {window.windowSizeHelper(window.windowSizeHelperOptions);}
})();
