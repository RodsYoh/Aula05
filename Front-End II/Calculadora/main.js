<<<<<<< HEAD
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let botao = document.querySelector('#botao')
let resultadoRef = document.querySelector('#resultado')
botao.addEventListener('click', function(event){
    event.preventDefault()
    
})

function calcular() {
    let num1atual = parseInt(num1.value);
    let num2atual = parseInt(num2.value);
    let operacao = document.querySelector('#operacoes').value;
switch (operacao) {
  case 'soma':
    console.log(num1atual + num2atual);
    resultadoRef.innerHTML = (num1atual + num2atual);
    break;
  case 'dividir':
    console.log(num1atual / num2atual);
    resultadoRef.innerHTML = (num1atual / num2atual);
    break;
  case 'subtrair':
    console.log(num1atual - num2atual);
    resultadoRef.innerHTML = (num1atual - num2atual);
    break;
  case 'multiplicar':
    console.log(num1atual * num2atual);
    resultadoRef.innerHTML = (num1atual * num2atual);
    break;
  default: console.log(`Selecione o tipo de operação.`);
}
=======
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let botao = document.querySelector('#botao')
let resultadoRef = document.querySelector('#resultado')
botao.addEventListener('click', function(event){
    event.preventDefault()
    
})

function calcular() {
    let num1atual = parseInt(num1.value);
    let num2atual = parseInt(num2.value);
    let operacao = document.querySelector('#operacoes').value;
switch (operacao) {
  case 'soma':
    console.log(num1atual + num2atual);
    resultadoRef.innerHTML = (num1atual + num2atual);
    break;
  case 'dividir':
    console.log(num1atual / num2atual);
    resultadoRef.innerHTML = (num1atual / num2atual);
    break;
  case 'subtrair':
    console.log(num1atual - num2atual);
    resultadoRef.innerHTML = (num1atual - num2atual);
    break;
  case 'multiplicar':
    console.log(num1atual * num2atual);
    resultadoRef.innerHTML = (num1atual * num2atual);
    break;
  default: console.log(`Selecione o tipo de operação.`);
}
>>>>>>> 9172f26830b2dc75aee888a06b918ad41cba1418
}