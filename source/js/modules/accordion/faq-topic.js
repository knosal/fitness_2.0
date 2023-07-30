const tabsButton = document.querySelectorAll('[data-tabs]');
const tabsItem = document.querySelectorAll('[data-content]');
const accordions = document.querySelectorAll('.accordion__item');
const openClass = 'is-open';
const activeClass = 'is-active';

const closeAllAccordions = () => {
  accordions.forEach((accordion) => accordion.classList.remove(openClass));
};

const hideAllTabs = () => {
  tabsItem.forEach((item) => {
    item.style.display = 'none';
  });
};

const activateTabButton = (tab) => {
  tab.classList.add(activeClass);
};

const deactivateTabButtons = () => {
  tabsButton.forEach((item) => item.classList.remove(activeClass));
};

const showTabContent = (tab) => {
  const contentId = tab.dataset.tabs;
  tabsItem.forEach((item) => {
    const isTabContent = item.dataset.content === contentId;
    item.style.display = isTabContent ? 'block' : 'none';
  });
};

const tabChangeTopic = () => {
  tabsButton.forEach((tab) => {
    tab.addEventListener('click', () => {
      deactivateTabButtons();
      hideAllTabs();
      activateTabButton(tab);
      showTabContent(tab);
      closeAllAccordions();
    });
  });
};

export {tabChangeTopic};
