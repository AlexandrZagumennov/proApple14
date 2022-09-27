export const backToTopController = ({goTopBtnTrigger}) => {
  const goTopBtn = document.querySelector(`.${goTopBtnTrigger}`);

  const trackScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add(`${goTopBtnTrigger}_show`);
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove(`${goTopBtnTrigger}_show`);
    }
  };

  const backToTop = () => {
    var scrollStep = window.pageYOffset / 40;

    if (window.pageYOffset > 0) {
      window.scrollBy(0, -(scrollStep));
      setTimeout(backToTop, 0);
    }
  };

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
};
