const accordionItems = document.querySelectorAll('.accordion__item');

const toggleAccordionItem = (item) => item.classList.toggle('is-open');

const openAccordion = () => {
  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleAccordionItem(item);
    });
  });
};

export {openAccordion};
