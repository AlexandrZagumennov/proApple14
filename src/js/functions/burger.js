export const burger = () => {
  const burger = document.querySelector('.js-burger');
  const navigation = document.querySelector('.js-navigation');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_active');
    navigation.classList.toggle('js-navigation_active');

    if (navigation?.classList.contains('js-navigation_active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
    }
  });

  navigation.addEventListener('click', (event) => {
    const closeNav = event.target.closest('.js-navigation__link');

    if (closeNav) {
      navigation.classList.remove('js-navigation_active');
			burger.classList.remove('burger_active');
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
    }
  });
};