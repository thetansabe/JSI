let isLogged = localStorage.getItem('isLogged');
if (isLogged == null) {
  isLogged = false;
}
if (isLogged == false) {
  window.location.href = '../pages/login.html';
}

var swiper = new Swiper(".product-swiper", {
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});