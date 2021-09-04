const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnDiv = document.getElementById('/');
const btnMult = document.getElementById('*');
const btnMod = document.getElementById('%');
const btnSom = document.getElementById('+');
const btnMen = document.getElementById('/');
const btnResult = document.getElementById('=');

const result = document.getElementById('result');

btn0.addEventListener('click', clicked);

function clicked(e) {
    e.preventDefault();

}