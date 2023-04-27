window.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

let x1 = null; //координаты касания
let y1 = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];

  // console.log(firstTouch);
  x1 = firstTouch.clientX;
  y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let DiffX = x2 - x1;
  let DiffY = y2 - y1;

  //проверка куда тянули - по x или Y
  if (Math.abs(DiffX) > Math.abs(DiffY)) {
    if (DiffX > 0) {
      console.log('right');
      swipeSlideBack();
    } else {
      console.log('left');
      swipeSlideForward();
    }
  } else {
    if (DiffY > 0) console.log('down');
    else console.log('top');
  }
  x1 = null;
  y1 - null;
}

// 1 - мы скрыли все слайды, 2 - показываем только тот, который активный

const slides = document.querySelectorAll('.gallery-slide'),
  amount = document.querySelector('.main-sum'),
  homeBtn = document.querySelectorAll('.menu__button'),
  slidesWrapper = document.querySelector('.gallery-wrapper'),
  slidesField = document.querySelector('.gallery-line'),
  width = window.getComputedStyle(slidesWrapper).width, // ширина окна через которое мы все видим
  mainPageBtn = document.querySelector('.main-header__button');

mainPageBtn.addEventListener('click', () => {
  swipeSlideForward();
  console.log('click');
});
// amount.textContent = slides.length;
let slideInd = 0;
let offset = 0;

slidesField.style.width = 100 * slides.length + '%'; //общая ширина слайдера

slides.forEach((slide) => {
  slide.style.width = width;
  console.log(slide.style.width);
});

//делаем увеличение отступа для слайдера
function swipeSlideForward() {
  //   const widthNumber = Number(width.replace(/px/g, ''));
  if (offset != (slides.length - 1) * Math.round(+width.replace(/px/g, ''))) {
    offset += Math.round(+width.replace(/px/g, ''));
    slidesField.style.transform = `translateX(-${offset}px)`;
  }
}

function swipeSlideBack() {
  if (offset !== 0) {
    console.log('back');
    offset -= Math.round(+width.replace(/px/g, ''));
    slidesField.style.transform = `translateX(-${offset}px)`;
  }
}

homeBtn.forEach((item) => {
  item.addEventListener('click', () => {
    offset = 0;
    slidesField.style.transform = `translateX(-${offset}px)`;
    console.log('click');
  });
});
