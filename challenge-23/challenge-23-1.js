(function(win,doc){

  'use strict';

  /*não permite que seja digitado na input*/
  doc.querySelector("#inputCalculator").readOnly = true;

  var $inputCalculator = doc.querySelector("#inputCalculator");
  $inputCalculator.value = '0'; /*iniciar a calculadora com zero*/

  /*abaixo será passado o value para cada botão*/
  var $buttonOne = doc.querySelector("#one");
  $buttonOne.value = '1';
  var $buttonTwo = doc.querySelector("#two");
  $buttonTwo.value = '2';
  var $buttonThree = doc.querySelector("#three");
  $buttonThree.value = '3';
  var $buttonFour = doc.querySelector("#four");
  $buttonFour.value = '4';
  var $buttonFive = doc.querySelector("#five");
  $buttonFive.value = '5';
  var $buttonSix = doc.querySelector("#six");
  $buttonSix.value = '6';
  var $buttonSeven = doc.querySelector("#seven");
  $buttonSeven.value = '7';
  var $buttonEight = doc.querySelector("#eight");
  $buttonEight.value = '8';
  var $buttonNine = doc.querySelector("#nine");
  $buttonNine.value = '9';
  var $buttonZero = doc.querySelector("#zero");
  $buttonZero.value = '0';
  var $buttonAddition = doc.querySelector("#addition");
  $buttonAddition.value = '+';
  var $buttonSubtraction = doc.querySelector("#subtraction");
  $buttonSubtraction.value = '-';
  var $buttonMultiplication = doc.querySelector("#multiplication");
  $buttonMultiplication.value = '/';
  var $buttonDivision = doc.querySelector("#division");
  $buttonDivision.value = '*';
  var $buttonCe = doc.querySelector("#ce");
  $buttonCe.value = '0';

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
  doc.querySelector("button.numbers#one").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#two").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#three").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#four").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#five").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#six").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#seven").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#eight").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#nine").addEventListener("click",
  buttonNumber);
  doc.querySelector("button.numbers#zero").addEventListener("click",
  buttonNumber);

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
    var result = eval($inputCalculator.value);
    return $inputCalculator.value = result;
  }

  /*eventos ao clicar nos botões de operação, irá mostrar no input o
  operador e concatenar com o que já está no input*/
  doc.querySelector("button.operator#addition").addEventListener("click",
  buttonOperator);
  doc.querySelector("button.operator#subtraction").addEventListener("click",
  buttonOperatorNegative);
  doc.querySelector("button.operator#multiplication").addEventListener("click",
  buttonOperator);
  doc.querySelector("button.operator#division").addEventListener("click",
  buttonOperator);

  /*evento ao clicar no botão CE, irá zerar a calculadora*/
  doc.querySelector("button.operator#ce").addEventListener("click",
  buttonOperatorCe);

  doc.querySelector("button.operator#equal").addEventListener("click",
  buttonOperatorEqual);

})(window,document);
