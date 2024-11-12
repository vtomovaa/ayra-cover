
const popup = document.getElementById('share-popup');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
  form.reset();
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
