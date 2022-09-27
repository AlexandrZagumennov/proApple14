export const smothScroll = ({pageTrigger, SPEED}) => {
  const trigger = document.querySelector(pageTrigger);

  const scrolled = e => {
    e.preventDefault();
    const target = e.target;

    if (target.matches('[href^="#"]')) {
      let start = 0;
      const pageY = window.pageYOffset;
      const hash = target.getAttribute('href');

      if (hash === '#') return;

      const elem = document.querySelector(hash);
      const coordinateElem = elem.getBoundingClientRect().top;
      const allDistance = pageY + coordinateElem;
      const scroll = time => {
        if (!start) start = time;
        const progress = time - start;
        const r = (coordinateElem < 0 ?
          Math.max(pageY - progress / SPEED, allDistance) :
          Math.min(pageY + progress / SPEED, allDistance));

        window.scrollTo(0, r);

        const scrolling = coordinateElem < 0 ?
          r > allDistance :
          r < allDistance;
        if (scrolling) requestAnimationFrame(scroll);
      }
      requestAnimationFrame(scroll)
    }
  }
  trigger.addEventListener('click', scrolled);
};