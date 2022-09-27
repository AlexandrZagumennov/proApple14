// Реализация бургер-меню
import { burger } from './functions/burger.js';
import { sliders } from './functions/sliders.js';
import { ItcTabs } from './assets/tabs.js';
import { modalController } from './functions/modal.js';

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