const accordionItems = document.querySelectorAll('.accordion__item');

const toggleAccordionItem = (item) => item.classList.toggle('is-open');

const openAccordion = () => {
  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      toggleAccordionItem(item);
    });
  });
};

const focusAccordion = () => {
  accordionItems.forEach((item) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        const target = event.shiftKey ? item.previousElementSibling : item.nextElementSibling;
        if (target) {
          target.focus();
        }
      }
    });
  });
};

export {openAccordion, focusAccordion};
