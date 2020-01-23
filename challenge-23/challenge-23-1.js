(function(win,doc){

  'use strict';

  var $inputCalculator = doc.querySelector('[data-js="inputCalculator"]');

  /*abaixo será passado o value para cada botão*/
  var $buttonOne = doc.querySelector('[data-js="one"]');
  var $buttonTwo = doc.querySelector('[data-js="two"]');
  var $buttonThree = doc.querySelector('[data-js="three"]');
  var $buttonFour = doc.querySelector('[data-js="four"]');
  var $buttonFive = doc.querySelector('[data-js="five"]');
  var $buttonSix = doc.querySelector('[data-js="six"]');
  var $buttonSeven = doc.querySelector('[data-js="seven"]');
  var $buttonEight = doc.querySelector('[data-js="eight"]');
  var $buttonNine = doc.querySelector('[data-js="nine"]');
  var $buttonZero = doc.querySelector('[data-js="zero"]');
  var $buttonAddition = doc.querySelector('[data-js="addition"]');
  var $buttonSubtraction = doc.querySelector('[data-js="subtraction"]');
  var $buttonMultiplication = doc.querySelector('[data-js="multiplication"]');
  var $buttonDivision = doc.querySelector('[data-js="division"]');
  var $buttonCe = doc.querySelector('[data-js="ce"]');
  var $buttonEqual = doc.querySelector('[data-js="equal"]');

  function buttonNumber(){
    /*inicia o calculo com o número passado e não em zero*/
    if($inputCalculator.value == 0){
      return $inputCalculator.value = this.value;
    }
    /*caso já tenha iniciado o calculo apenas concatena com o já digitado */
    $inputCalculator.value = $inputCalculator.value.concat(this.value);
  }

  /*eventos ao clicar nos botões de números, irá mostrar os números
  no input e concatenar com o que já está no input*/
  $buttonOne.addEventListener("click", buttonNumber,false);
  $buttonTwo.addEventListener("click", buttonNumber,false);
  $buttonThree.addEventListener("click", buttonNumber,false);
  $buttonFour.addEventListener("click", buttonNumber,false);
  $buttonFive.addEventListener("click", buttonNumber,false);
  $buttonSix.addEventListener("click", buttonNumber,false);
  $buttonSeven.addEventListener("click", buttonNumber,false);
  $buttonEight.addEventListener("click", buttonNumber,false);
  $buttonNine.addEventListener("click", buttonNumber,false);
  $buttonZero.addEventListener("click", buttonNumber,false);

  /*eventos ao clicar nos botões de operação, irá mostrar no input o
  operador e concatenar com o que já está no input*/
  $buttonAddition.addEventListener("click", buttonOperator, false);
  $buttonSubtraction.addEventListener("click", buttonOperatorNegative, false);
  $buttonMultiplication.addEventListener("click", buttonOperator, false);
  $buttonDivision.addEventListener("click", buttonOperator, false);

  /*evento ao clicar no botão CE, irá zerar a calculadora*/
  $buttonCe.addEventListener("click", buttonOperatorCe, false);

  $buttonEqual.addEventListener("click", buttonOperatorEqual, false);

  function buttonOperator(){
    if($inputCalculator.value == 0){
      /*não permite iniciar um calculo com '*','/','+' */
      return $inputCalculator.value = 0;
    }
    /*caso já tenha iniciado o calculo apenas concatena com o já digitado */
    $inputCalculator.value = $inputCalculator.value.replace(/\D$/,'').concat(
      this.value);
  }

  function buttonOperatorNegative(){
    if($inputCalculator.value == 0){
      /*inicia o calculo com o negativo*/
      return $inputCalculator.value = this.value;
    }
    /*caso já tenha iniciado o calculo apenas concatena com o já digitado */
    $inputCalculator.value = $inputCalculator.value.replace(/\D$/,'').concat(
      this.value);
  }

  function buttonOperatorCe(){
    return $inputCalculator.value = this.value; /*irá zerar a calculadora*/
  }

  function buttonOperatorEqual(){
    /*vai realizar os calculos solicitados e mostrar o resultado no input*/
    var result = eval($inputCalculator.value);
    return $inputCalculator.value = result;
  }

})(window,document);
