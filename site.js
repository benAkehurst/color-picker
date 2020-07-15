const inputColor = document.getElementById('favcolor');
const cCode = document.getElementById('cCode');
const root = document.documentElement;

inputColor.addEventListener('input', (e) => {
  cCode.innerHTML = e.target.value;
  root.style.setProperty('--backcol', e.target.value);
});
