
console.log('hellod');
//Displays
let display = document.querySelector('.display')
let warningDisplay = document.querySelector('.warning')

//Buttons
let divideBtn = document.getElementById('divide')
let timesBtn = document.getElementById('times')
let minusBtn = document.getElementById('minus')
let plusBtn = document.getElementById('plus')
let positiveNegativeBtn = document.getElementById('positive-negative')
let clearBtn = document.getElementById('clear')
let equalsBtn = document.getElementById('equals')
let result = 0

//Inputs 
let inputOneValue = document.getElementById('input1')
let inputTwoValue = document.getElementById('input2')


//Validate Inputs
plusBtn.addEventListener('click', onPlus)
equalsBtn.addEventListener('click', () => {
  let displaySeparator = display.textContent.split(' ')[1]
  if(displaySeparator == '+'){
    onPlus()
  }else if(displaySeparator == '-'){
    onMinus()
  }else if(displaySeparator == '/'){
    onDevide()
  }
  else if(displaySeparator == 'x'){
    onTimes()
  }
    
    
   
    
    display.textContent = result
})
minusBtn.addEventListener('click', onMinus)
divideBtn.addEventListener('click', onDevide)
timesBtn.addEventListener('click', onTimes)
positiveNegativeBtn.addEventListener('click', onPositiveNegative)
clearBtn.addEventListener('click', () => {
    warningDisplay.textContent = ''
    inputOneValue.value = ''
    inputTwoValue.value = ''
    display.textContent = ''
    result = ''
})

function onPlus(event) {
    let beforeSecondInput = 0
    
    beforeSecondInput = Number(inputOneValue.value)
    display.textContent = `${inputOneValue.value} +`
    if (inputTwoValue.value != '') {
        if (inputOneValue.value != Number(inputOneValue.value)) {
            let error = new Error('First Input is not a number , change it to number')
            warningDisplay.textContent = error
            
        }
        
        if (inputTwoValue.value != Number(inputTwoValue.value)) {
            let error = new Error('Second Input is not a number , change it to number')
            warningDisplay.textContent = error
        }
        
        result = beforeSecondInput + Number(inputTwoValue.value)
    }
    
    


}
function onMinus(event) {
    let beforeSecondInput = 0

    beforeSecondInput = Number(inputOneValue.value)

    display.textContent = `${inputOneValue.value} -`
    if (inputTwoValue.value != '') {
        if (inputOneValue.value != Number(inputOneValue.value)) {
            let error = new Error('First Input is not a number , change it to number')
            warningDisplay.textContent = error

        }

        if (inputTwoValue.value != Number(inputTwoValue.value)) {
            let error = new Error('Second Input is not a number , change it to number')
            warningDisplay.textContent = error
        }

        result = beforeSecondInput - Number(inputTwoValue.value)
    }

}

function onDevide(event){
    let beforeSecondInput = 0

    beforeSecondInput = Number(inputOneValue.value)

    display.textContent = `${inputOneValue.value} /`
    if (inputTwoValue.value != '') {
        if (inputOneValue.value != Number(inputOneValue.value)) {
            let error = new Error('First Input is not a number , change it to number')
            warningDisplay.textContent = error

        }

        if (inputTwoValue.value != Number(inputTwoValue.value)) {
            let error = new Error('Second Input is not a number , change it to number')
            warningDisplay.textContent = error
        }

        result = beforeSecondInput / Number(inputTwoValue.value)
    }
}

function onTimes(event){
    let beforeSecondInput = 0

    beforeSecondInput = Number(inputOneValue.value)

    display.textContent = `${inputOneValue.value} x`
    if (inputTwoValue.value != '') {
        if (inputOneValue.value != Number(inputOneValue.value)) {
            let error = new Error('First Input is not a number , change it to number')
            warningDisplay.textContent = error

        }

        if (inputTwoValue.value != Number(inputTwoValue.value)) {
            let error = new Error('Second Input is not a number , change it to number')
            warningDisplay.textContent = error
        }

        result = beforeSecondInput * Number(inputTwoValue.value)
    }
}

function onPositiveNegative(event){
    inputOneValue.value = Number(-inputOneValue.value)

    
}



