export const magicLineController = ({line, item}) => {
  const navLine = document.querySelector(`.${line}`),
  navItem = document.querySelectorAll(`.${item}`);
  
  navLine.style.width = `${navItem[0].offsetWidth}px`;
  
  navItem.forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      navLine.style.width = `${e.currentTarget.offsetWidth}px`;
      navLine.style.left = `${e.currentTarget.offsetLeft}px`;
      navLine.classList.add(`${line}_hover`);
    });

    el.addEventListener('mouseleave', () => {
      navLine.style.width = `${navItem[0].offsetWidth}px`;
      navLine.style.left = `0px`;
      navLine.classList.remove(`${line}_hover`);
    });
  });
};
