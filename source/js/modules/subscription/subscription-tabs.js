const month = document.querySelectorAll('[data-month]');
const lists = document.querySelectorAll('[data-list]');
const subscriptionsItems = document.querySelectorAll('.subscriptions__item');
const activeClass = 'is-active';
const displayNone = 'none';
const displayGrid = 'grid';

const hideLists = () => {
  lists.forEach((list, i) => {
    if (i !== 0) {
      list.style.display = displayNone;
    }
  });
};

const showList = (list, tab) => {
  if (tab.dataset.month === list.dataset.list) {
    tab.classList.add(activeClass);
    list.style.display = displayGrid;
  }
};

const activateTab = (tab) => {
  month.forEach((item) => item.classList.remove(activeClass));
  tab.classList.add(activeClass);
};

const hoverSubscriptionItems = (item) => {
  item.addEventListener('mouseenter', () => {
    subscriptionsItems.forEach((el) => el.classList.remove(activeClass));
    item.classList.add(activeClass);
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove(activeClass);
  });
};

const priceChange = () => {
  hideLists();

  month.forEach((tab) => {
    tab.addEventListener('click', ()=> {

      activateTab(tab);

      lists.forEach((list) => {
        list.style.display = displayNone;
        showList(list, tab);
      });
    });
  });

  subscriptionsItems.forEach(hoverSubscriptionItems);
};

export {priceChange};
