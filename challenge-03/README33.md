```js
var pessoa = {
  nome: 'Pamela',
  sobrenome: 'Vieira',
  sexo: 'Feminino',
  idade: 31,
  altura: 1.63,
  peso: 60 + ' Kg ',
  andando: false,
  caminhouQuantosMetros: 0,
};
pessoa.fazerAniversario = function() { pessoa.idade++;};
pessoa.andar = function (x) {
  pessoa.andando = true;
  pessoa.caminhouQuantosMetros += x;
};
pessoa.parar = function  () {
  pessoa.andando = false;
};
pessoa.nomeCompleto = function () {
  return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!';
};
pessoa.mostrarIdade = function () {
  return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
};
pessoa.mostrarPeso = function () {
  return 'Eu peso ' + pessoa.peso;
};
pessoa.mostrarAltura = function () {
  return 'Minha altura é ' + pessoa.altura + ' m.';
};
pessoa.nomeCompleto() 
pessoa.mostrarIdade() 
pessoa.mostrarPeso() 
pessoa.mostrarAltura() 
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.mostrarIdade() 
pessoa.andar(2)
pessoa.andar(3)
pessoa.andar(10)
pessoa.andando 
pessoa.parar()
pessoa.andando
pessoa.caminhouQuantosMetros 
pessoa.apresentacao = function () {
  var artigo, singular_plural, plural_singular;
  if (pessoa.sexo === 'Feminino') {artigo = 'a '};
  if (pessoa.sexo === 'Masculino') {artigo = 'o '};
  if (pessoa.idade === 1) {singular_plural = ' ano, '};
  if (pessoa.idade > 1) {singular_plural = ' anos, '};
  if (pessoa.caminhouQuantosMetros === 1) { plural_singular = ' metro!'};
  if (pessoa.caminhouQuantosMetros > 1) {plural_singular = ' metros!'};
  return 'Olá, eu sou ' + artigo + pessoa.nome + ' ' + pessoa.sobrenome + 
  ', tenho ' + pessoa.idade + singular_plural + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + 
  pessoa.caminhouQuantosMetros + plural_singular ;
};
pessoa.apresentacao()
```
