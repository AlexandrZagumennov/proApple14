export const accController = ({accList, accItem, accTitle, accDescription}) => {
  const accListElem = document.querySelector(accList);
  const accItemElems = document.querySelectorAll(accItem);

  accItemElems.forEach(elem => {
    if (elem.children[1].classList.contains('active')) {
      elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
    }
  });

  const open = (button, dropDown) => {
    closeAllDrops(button, dropDown);
    button.ariaExpanded = true;

    dropDown.style.height = dropDown.scrollHeight + 'px';
    button.classList.add('active');
    dropDown.classList.add('active');
    console.log(dropDown)
  };

  const close = (button, dropDown) => {
    button.ariaExpanded = false;
    button.classList.remove('active');
    dropDown.classList.remove('active');
    dropDown.style.height = '';
  };

  const closeAllDrops = (button, dropDown) => {
    accItemElems.forEach((elem) => {
      if (elem.children[0] !== button && elem.children[1] !== dropDown) {
        close(elem.children[0], elem.children[1]);
      }
    })
  };

  accListElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains(accTitle)) {
      const parent = target.closest(accItem);
      const description = parent.querySelector(accDescription);
      description.classList.contains('active') ? 
      close(target, description) : 
      open(target, description);
    }
  });
};
