(function(win,doc){

  'use strict';

  var $inputCalculator = doc.querySelector("#inputCalculator");

  /*abaixo será passado o value para cada botão*/
  var $buttonOne = doc.querySelector("#one");
  var $buttonTwo = doc.querySelector("#two");
  var $buttonThree = doc.querySelector("#three");
  var $buttonFour = doc.querySelector("#four");
  var $buttonFive = doc.querySelector("#five");
  var $buttonSix = doc.querySelector("#six");
  var $buttonSeven = doc.querySelector("#seven");
  var $buttonEight = doc.querySelector("#eight");
  var $buttonNine = doc.querySelector("#nine");
  var $buttonZero = doc.querySelector("#zero");
  var $buttonAddition = doc.querySelector("#addition");
  var $buttonSubtraction = doc.querySelector("#subtraction");
  var $buttonMultiplication = doc.querySelector("#multiplication");
  var $buttonDivision = doc.querySelector("#division");
  var $buttonCe = doc.querySelector("#ce");

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
  doc.querySelector('[data-js="one"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="two"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="three"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="four"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="five"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="six"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="seven"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="eight"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="nine"]').addEventListener("click",
  buttonNumber,false);
  doc.querySelector('[data-js="zero"]').addEventListener("click",
  buttonNumber,false);

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

  /*eventos ao clicar nos botões de operação, irá mostrar no input o
  operador e concatenar com o que já está no input*/
  doc.querySelector('[data-js="addition"]').addEventListener("click",
  buttonOperator, false);
  doc.querySelector('[data-js="subtraction"]').addEventListener("click",
  buttonOperatorNegative, false);
  doc.querySelector('[data-js="multiplication"]').addEventListener("click",
  buttonOperator, false);
  doc.querySelector('[data-js="division"]').addEventListener("click",
  buttonOperator, false);

  /*evento ao clicar no botão CE, irá zerar a calculadora*/
  doc.querySelector('[data-js="ce"]').addEventListener("click",
  buttonOperatorCe, false);

  doc.querySelector('[data-js="equal"]').addEventListener("click",
  buttonOperatorEqual, false);

})(window,document);
