// Реализация бургер-меню
import { burger } from './functions/burger.js';
import { sliders } from './functions/sliders.js';
import { ItcTabs } from './assets/tabs.js';
import { modalController } from './functions/modal.js';
import { accController } from './functions/acc.js';
import { magicLineController } from './functions/magicLine.js';

burger();
sliders();


// Табы
new ItcTabs('.js-tabs');
/*Для инициализации нескольких табов на странице
  const tabs = document.querySelectorAll('.js-tabs');
  for (let i = 0, length = tabs.length; i < length; i++) {
    new ItcTabs(tabs[i]);
  }
*/

// программно переключиться на 2 вкладку (1 – индекс вкладки, на которую нужно перейти)
// const tab = new ItcTabs('.js-tabs');
// tab.showByIndex(1);

// Модальное окно
modalController({
  modal: '.js-modal-1',
  btnOpen: '.js-btn-open-modal-1',
  btnClose: '.modal__close',
});

// Аккордеон
accController({
  accList: '.js-acc__list',
  accItem: '.js-acc__item',
  accTitle: 'js-acc__title',
  accDescription: '.js-acc-description',
});

// Magic Line
// Класс указывается без точки, чтобы скрипт отработал корректно при работе с классами
magicLineController({
  line: 'navigation__line',
  item: 'navigation__item',
});
