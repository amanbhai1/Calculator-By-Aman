let display = document.getElementById('display');
let body = document.body;


function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function updateBackgroundColor() {
  let newColor = getRandomColor();
  body.style.transition = 'background-color 5s ease';
  body.style.backgroundColor = newColor;
}

setInterval(updateBackgroundColor, 1000);

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
