const img = document.querySelector('.heroImg');
const card = document.querySelector('.card');
const info = document.querySelector('.info');
img.onclick = () => {
  card.classList.toggle('cardRestyle');
  info.classList.toggle('showInfo');
};
