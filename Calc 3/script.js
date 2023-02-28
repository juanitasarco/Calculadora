let input = document.getElementById('input');
let isNewInput = true;

function addInput(value) {
  if (isNewInput) {
    input.value = '';
    isNewInput = false;
  }
  input.value += value;
}

function clearInput() {
  input.value = '';
  isNewInput = true;
}

function calculate() {
  let expression = input.value;
  if (expression.includes('%')) {
    expression = expression.replace(/%/g, '*0.01');
  }
  let resultado = eval(expression);
  if (Number.isInteger(resultado)) {    
    input.value = resultado;
  } else { 
    input.value = resultado.toFixed(3);
  }
  isNewInput = true;
}
