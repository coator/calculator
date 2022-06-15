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


let addition = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let division = (a, b) => a / b
let operate = (a,b,c) => a(b,c)

for ( i = 0 ;i < button.length; i++){
  let i = button[i]['id']
  button[i].addEventListener('click', () => i)
}