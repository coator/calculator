
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
  if (holder.length > 0){
    hHistory.push(Number(holder.join('')))
    hHistory.push(lastButtonPressed.value)
    holder=[]
  }
  if (hHistory[1] = 'equal' && hHistory.length < 4){
    hHistory[1] = lastButtonPressed.value
    console.log(hHistory, ' is hHistory before the operation is executed')
    if (hHistory.length > 2){
      a = hHistory[0]
      c = hHistory[1]
      b = hHistory[2]
      output = lib[c](a,b)
      console.log(a, c, b, '=', output)
      hHistory = [output, lastButtonPressed.value]
      console.log(hHistory, ' is hHistory after the operation is executed')
      calcDisplay.textContent=output
      return
    }
  } else if (hHistory[1] = 'equal' && hHistory.length > 3 ) {
    hHistory.shift()
    hHistory.shift()
    console.log(hHistory, ' is hHistory after the operation is executed and length >3')
  }
  
}

function equals(){
  if (hHistory.length > 1 && holder.length > 0 && hHistory[1] != 'equal') {
    hHistory.push(Number(holder.join('')))
    console.log(hHistory, ' is hHistory after the operation is executed')
    holder=[]
    a = hHistory[0]
    c = hHistory[1]
    b = hHistory[2]
    output = lib[c](a,b)
    console.log(a, c, b, '=', output)
    hHistory = [output, lastButtonPressed.value]
    console.log(hHistory, ' is hHistory after the operation is executed')
    calcDisplay.textContent=output
    //calculate for 1/0 error
  return
  }
}

// nodeList for all operators and equal function
const actionButtons = document.querySelectorAll('.actionButton')


// assign equals button
buttonEquals.addEventListener('click', equals)



for (let i = 0; i < actionButtons.length; i++){
  actionButtons[i].addEventListener('click', operate.bind(this, actionButtons[i]))
}