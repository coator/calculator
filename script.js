
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
let calcDisplay = document.querySelector('.calcDisplay')

// 4 operations for the items
let addition = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let division = (a, b) => a / b


// assign operation buttons
buttonAddition.addEventListener('click', () => addition)
buttonSubtract.addEventListener('click', () => subtract)
buttonMultiply.addEventListener('click', () => multiply)
buttonDivide.addEventListener('click', () => division)


// assign equals button
buttonEquals.addEventListener('click', () => operate)


// integer holder array for the current number displayed
const intButtons = document.querySelectorAll('.intButton')


//reset value onload
calcDisplay.innerHTML = [0,0,0,0,0,0,0,0,0,0,0,0,0].join('')

//function that adds listener event to add integers to holdNum array
// bind method allows to add outer functions into inner function before calling them.
let holder = []
for (let i = 0; i < intButtons.length; i++){
  intButtons[i].addEventListener('click', holdNum.bind(this, intButtons[i]));
  function holdNum(num){
    if (holder.length <= 14) {
    holder.push(num.value)
    calcDisplay.innerHTML = holder.join('')
  }}
};


//functionality for clear button
// LastButton holds last button to determine if clear was pressed twice

let allButtons = document.getElementsByTagName('button')
let lastButton = []
for (let i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', function() {
    lastButton[0] = lastButton[1];
    lastButton[1] = allButtons[i].id;
  });
}
function clearHolder(){
  if (lastButton[0] = 'item1'){
    //placeholder for reset calc function
  } else {
    holder = []; 
    calcDisplay.innerHTML= holder;
  }
};

buttonClear.addEventListener('click', clearHolder)


// function operate
let operate = function(a,b,c){

}
