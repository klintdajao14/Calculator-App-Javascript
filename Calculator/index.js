const numberButtons = document.querySelectorAll('.number');
let currentNumber = '';
let previousNumber = null;
let currentOperation = null;

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentNumber += button.textContent;
    document.getElementById('inputNumbers').textContent = currentNumber;
    console.log("Current number:", currentNumber); // Display the current number for debugging
  });
});

document.getElementById('Add').addEventListener("click", function() {
  if (currentNumber !== '') {
    if (previousNumber !== null && currentOperation !== null) {
      calculateResult();
    } else {
      previousNumber = parseFloat(currentNumber);
      currentNumber = '';
    }
    currentOperation = '+';
    document.getElementById('inputNumbers').textContent = previousNumber + " " + currentOperation;
  }
});

document.getElementById('Subtract').addEventListener("click", function() {
  if (currentNumber !== '') {
    if (previousNumber !== null && currentOperation !== null) {
      calculateResult();
    } else {
      previousNumber = parseFloat(currentNumber);
      currentNumber = '';
    }
    currentOperation = '-';
    document.getElementById('inputNumbers').textContent = previousNumber + " " + currentOperation;
  }
});

document.getElementById('Divide').addEventListener("click", function() {
  if (currentNumber !== '') {
    if (previousNumber !== null && currentOperation !== null) {
      calculateResult();
    } else {
      previousNumber = parseFloat(currentNumber);
      currentNumber = '';
    }
    currentOperation = '/';
    document.getElementById('inputNumbers').textContent = previousNumber + " " + currentOperation;
  }
});

document.getElementById('Multiply').addEventListener("click", function() {
  if (currentNumber !== '') {
    if (previousNumber !== null && currentOperation !== null) {
      calculateResult();
    } else {
      previousNumber = parseFloat(currentNumber);
      currentNumber = '';
    }
    currentOperation = '*';
    document.getElementById('inputNumbers').textContent = previousNumber + " " + currentOperation;
  }
});

document.getElementById('Modulo').addEventListener("click", function() {
  if (currentNumber !== '') {
    if (previousNumber !== null && currentOperation !== null) {
      calculateResult();
    } else {
      previousNumber = parseFloat(currentNumber);
      currentNumber = '';
    }
    currentOperation = '%';
    document.getElementById('inputNumbers').textContent = previousNumber + " " + currentOperation;
  }
});

document.getElementById('Equals').addEventListener("click", function() {
  calculateResult();
});

function calculateResult() {
  if (currentNumber !== '' && previousNumber !== null && currentOperation !== null) {
    const current = parseFloat(currentNumber);
    let result;
    switch (currentOperation) {
      case '+':
        result = previousNumber + current;
        break;
      case '-':
        result = previousNumber - current;
        break;
      case '/':
        if (current !== 0) {
          result = previousNumber / current;
        } else {
          console.log("Error: Division by zero");
          return;
        }
        break;
      case '*':
        result = previousNumber * current;
        break;
      case '%':
        result = previousNumber % current;
        break;
      default:
        console.log("Error");
        return;
    }
    result = parseFloat(result.toFixed(2))
    document.getElementById('inputNumbers').textContent = result;
    previousNumber = result;
    currentNumber = '';
    currentOperation = null;
  }
}

function deleteInput() {
  document.getElementById("inputNumbers").textContent = "";
  currentNumber = '';
  currentOperation = null;
}
