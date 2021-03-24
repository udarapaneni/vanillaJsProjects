const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
  let hexMat = [];
  for (i = 0; hexMat.length < 6; i++) {
    ran = Math.floor(Math.random() * hex.length);

    hexMat[i] = hex[ran];
    fxMat = hexMat.join('');
    document.body.style.backgroundColor = '#' + fxMat;
    color.textContent = '#' + fxMat;
  }
  console.log(fxMat);
});

console.log('Hello');
