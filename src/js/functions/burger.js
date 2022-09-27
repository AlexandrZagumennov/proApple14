import { disableScroll } from './disableScroll.js';
import { enableScroll } from './enableScroll.js';

export const burger = () => {
  const burger = document.querySelector('.js-burger');
  const navigation = document.querySelector('.js-navigation');
	const pageOverlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('js-navigation_active');

    if (navigation.classList.contains('js-navigation_active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
			pageOverlay.style.display = 'block';
			disableScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
			pageOverlay.style.display = 'none';
			enableScroll();
    }
  });

  navigation.addEventListener('click', (event) => {
    const closeNav = event.target.closest('.js-navigation__link');

    if (closeNav) {
      navigation.classList.remove('js-navigation_active');
			burger.classList.remove('burger_active');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
			pageOverlay.style.display = 'none';
			enableScroll();
    }
  });

	pageOverlay.addEventListener('click', () => {
		burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger_active');
    navigation.classList.remove('js-navigation_active');
		pageOverlay.style.display = 'none';
    enableScroll();
	})
};
