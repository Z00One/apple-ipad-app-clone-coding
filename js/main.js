// BASKET ELEMENT //
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = document.querySelector('.basket');

basketStarterEl.addEventListener('click', function(event) {
  // Stop the event propagation
  event.stopPropagation();
  // Checking element has class of 'show'
  if (basketEl.classList.contains('show')) {
    // hide
    hideBasket();
  } // false & true
  else {
    showBasket();
  }
});

basketEl.addEventListener('click', function(event) {
  // Stop the event propagation
  event.stopPropagation();
})

window.addEventListener('click', hideBasket);

function showBasket() {
  basketEl.classList.add('show');
};

function hideBasket() {
  basketEl.classList.remove('show');  
}

// SEARCH
const headerEl = document.querySelector('header');
const searchWrapEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = searchWrapEl.querySelector('.search-closer');
const searchShadowEl = searchWrapEl.querySelector('.shadow');
const htmlEl = document.documentElement;

searchStarterEl.addEventListener('click', showSearch);

searchCloserEl.addEventListener('click', hideSearch);

searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
  headerEl.classList.add('searching');
  htmlEl.classList.add('fixed');
};

function hideSearch() {
  headerEl.classList.remove('searching');
  htmlEl.classList.remove('fixed');
};