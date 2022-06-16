
// Buttons for each item on the calculator

const buttonClear = document.querySelector('#item1');
const buttonRemember = document.querySelector('#item3');
const buttonDivide = document.querySelector('#item4');
const button7 = document.querySelector('#item5');
const button8 = document.querySelector('#item6');
const button9 = document.querySelector('#item7');
const buttonMultiply = document.querySelector('#item8');
const button4 = document.querySelector('#item9');
const button5 = document.querySelector('#item10');
const button6 = document.querySelector('#item11');
const buttonSubtract = document.querySelector('#item12');
const button1 = document.querySelector('#item13');
const button2 = document.querySelector('#item14');
const button3 = document.querySelector('#item15');
const buttonAddition = document.querySelector('#item16');
const button0 = document.querySelector('#item17');
const buttonPrecision = document.querySelector('#item19');
const buttonEquals = document.querySelector('#item20');
const button = document.querySelectorAll('button')

// assign integer values to buttons; not nessecary with value attribute
// button1.addEventListener('click', () => 1);
// button2.addEventListener('click', () => 2);
// button3.addEventListener('click', () => 3);
// button4.addEventListener('click', () => 4);
// button5.addEventListener('click', () => 5);
// button6.addEventListener('click', () => 6);
// button7.addEventListener('click', () => 7);
// button8.addEventListener('click', () => 8);
// button9.addEventListener('click', () => 9);
// button0.addEventListener('click', () => 0);

// 4 operations for the items
let addition = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let division = (a, b) => a / b
let operate = (a,b,c) => a(b,c)

// assign operation buttons
buttonAddition.addEventListener('click', () => addition )
buttonSubtract.addEventListener('click', () => subtract)
buttonMultiply.addEventListener('click', () => multiply)
buttonDivide.addEventListener('click', () => division)

// assign clear and equals button
buttonClear.addEventListener('click', () => 'return')
buttonEquals.addEventListener('click', () => operate)

// integer holder function and runthru process
let numHolder1 = 0
let numHolder2 = 0
const intButtons = document.querySelectorAll('.intButton')
console.log(intButtons)
for (let i = 0; i < intButtons.length; i++){
intButtons[i].addEventListener('click', () => console.log(intButtons[i].value))
}

 const calcProcess = function(){
  while (True){

  }
}