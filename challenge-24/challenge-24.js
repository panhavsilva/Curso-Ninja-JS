/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false);
});
Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', handleClickOperation, false);
});
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickNumber() {
  if($visor.value == 0)
    return $visor.value = this.value;
  $visor.value += this.value;
}

function handleClickOperation() {
  if($visor.value == 0)
    return $visor.value;
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = this.value;
}

function isLastItemAnOperation(number) {
  var operations = /\D$/;
  return operations.test(number);
}

function removeLastItemIfItIsAnOperator(number) {
  return number = number.replace(/\D$/,'');
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var result = eval($visor.value);
  return $visor.value = result;
}
