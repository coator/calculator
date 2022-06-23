
// Buttons for each item on the calculator

// integers are intButtons
const buttonClear = document.querySelector('#item1');
const buttonRemember = document.querySelector('#item3');
const buttonDivision = document.querySelector('#item4');
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

// nodeList for all integers and the decimal
const intButtons = document.querySelectorAll('.intButton')


let allButtons = document.getElementsByTagName('button')
let lastButtonPressed = ''

// array to hold calc operation history (add, sub, mult, div)
let arrOperation = []

// array to store integers until they are pushed into hHistory.
let holder = []

// hHistory holds all integer values between operations and passes them to the
// operation func
let hHistory = []

// value for after clearing calc
let defaultValue = [0,0,0,0,0,0,0,0,0,0,0,0,0]

// reset value onload
function clearAll(){
  holder = []
  hHistory = []
  lastButtonPressed = []
  arrOperation = []
  calcDisplay.innerHTML = 'WELCOME'
}

clearAll()

// assigns lastButton function to allButton 
for (let i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', function() {
    lastButtonPressed = allButtons[i]}
    )}

// function that adds listener event to add integers to holdNum array
// bind method allows to add outer functions into inner function before calling them.
for (let i = 0; i < intButtons.length; i++){
  intButtons[i].addEventListener('click', holdNum.bind(this, intButtons[i]));
  function holdNum(num){
    if (holder.length <= 14) {
      // will disallow another decimal if there is already a decimal present.
      if ((holder.filter(i=> i==".").length>=1) && (lastButtonPressed.value == '.')){
        return
      } else {
    holder.push(num.value)
    calcDisplay.innerHTML = holder.join('')
  }}}
};

// function that clears current items in holder.
function clearHolder(){
  holder = []; 
  calcDisplay.innerHTML= defaultValue.join('');
};

buttonClear.addEventListener('click', clearHolder)
buttonClear.addEventListener('dblclick', clearAll)



let addition = (a, b) => a + b
let subtract = (a, b) => a - b
let multiply = (a, b) => a * b
let division = (a, b) => a / b
let lib = {
  'addition': addition,
  'subtraction': subtract,
  'multiply': multiply,  
  'division': division,}

function operate(){
  // if holder is empty then ignore
  if (holder.length > 0){
    arrOperation.push(lastButtonPressed.value)
    hHistory.push(Number(holder.join('')))
    holder=[]
    // perform arithmetic action is there are two values.
    if (hHistory.length > 1){
      let a = hHistory.pop();
      let b = hHistory.pop();
      let c = arrOperation.shift();
      output = lib[c](a,b);
      hHistory.push(output);
      // calculate for 0/0 error
      calcDisplay.innerHTML = output
      return
}}}

function equals(){
  if (lastButtonPressed.value = 'equals' & arrOperation[0] == 'equals'){
    return
  }
  hHistory.push(Number(holder.join('')))
  console.log(arrOperation, 'is arrOperation')
  console.log(hHistory[1], ' is a')
  console.log(hHistory[0], ' is b')
  let a = hHistory[1];
  let b = hHistory.shift();
  let c = arrOperation.shift();
  output = lib[c](a,b);
  hHistory.push(output)
  calcDisplay.innerHTML = output
}

// nodeList for all operators and equal function
const actionButtons = document.querySelectorAll('.actionButton')


// assign equals button
buttonEquals.addEventListener('click', equals)



for (let i = 0; i < actionButtons.length; i++){
  actionButtons[i].addEventListener('click', operate.bind(this, actionButtons[i]))
}