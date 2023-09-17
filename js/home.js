let isLogged = localStorage.getItem('isLogged');
if (isLogged == null) {
  isLogged = false;
}
if (isLogged == false) {
  window.location.href = '../pages/login.html';
}