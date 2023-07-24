const accordionItems = document.querySelectorAll('.accordion__item');

const toggleAccordionItem = (item) => item.classList.toggle('is-open');

const closeOtherAccordionItems = (currentItem) => {
  accordionItems.forEach((item) => item !== currentItem ? item.classList.remove('is-open') : null);
};

const openAccordion = () => {
  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      const isOpen = toggleAccordionItem(item);
      if (isOpen) {
        closeOtherAccordionItems(item);
      }
    });
  });
};

export {openAccordion};
