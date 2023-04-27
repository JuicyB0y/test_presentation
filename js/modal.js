// Modal

const modalTrigger = document.querySelector('[data-modal]'),
  modal = document.querySelector('.modal-window'),
  modalCloseBtn = document.querySelector('[data-close]'),
  background = document.querySelector('.overlay-dark'),
  background_new = document.querySelector('.modal-bg'),
  prevButton = document.querySelector('.brand-navigation_prev'),
  nextButton = document.querySelector('.brand-navigation_next'),
  firstSection = document.querySelector('.brand-section__list-1'),
  secondSection = document.querySelector('.brand-section__list-2'),
  secondCircle = document.querySelector('.brand-navigation_circle-2');

modalTrigger.addEventListener('click', () => {
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';

  //   background.style.visibility = 'visible';
  //   background.style.opacity = '1';
  //   background.style.display = 'block';
  background_new.classList.add('popup__bg-active');
});

modalCloseBtn.addEventListener('click', () => {
  modal.style.cssText = 'visibility = hidden; opacity = 0; transition: all 0.3s ease';
  // modal.style.visibility = 'hidden';
  // modal.style.opacity = '0';
  console.log('click-close');

  background_new.classList.remove('popup__bg-active');
});

nextButton.addEventListener('click', () => {
  firstSection.style.display = 'none';
  secondSection.style.display = 'block';
  secondSection.classList.add('popup__bg-active');

  secondCircle.style.cssText = 'background-color: #ff6a9f; border: none';
});

prevButton.addEventListener('click', () => {
  firstSection.style.display = 'block';
  secondSection.style.display = 'none';
});
