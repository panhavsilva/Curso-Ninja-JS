/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = ['Pamela', 31, true, 1+2, 'ninja', undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction (arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction ([1,2,3])[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2 (arr,num) {
  return num === undefined ? arr : arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otaVar = ['Pamela', 31, true, null, 'Rafa'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log ( myFunction (otaVar) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (bookName) {
  var myBooks = {
    'livro1':{
      quantidadePaginas: 100,
      autor: 'Pamela',
      editora: 'Pam'
    },
    'livro2':{
      quantidadePaginas: 1000,
      autor: 'Rafael',
      editora: 'Rafa'
    },
    'livro3':{
      quantidadePaginas: 300,
      autor: 'Bulma',
      editora: 'Bull'
    }
  };
  return !bookName ? myBooks : myBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

function obterPaginas (bookRequired) {
  return 'O livro ' + bookRequired + ' tem ' + book(bookRequired)['quantidadePaginas'] +
  ' páginas!';
}

obterPaginas('livro1');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

function obterAutor (bookRequired) {
  return 'O autor do livro ' + bookRequired + ' é ' + book(bookRequired)['autor'] + '.';
}

obterAutor('livro1');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

function obterEditora (bookRequired) {
  return 'O livro ' + bookRequired + ' foi publicado pela editora ' + book(bookRequired)
  ['editora'] + '.';
}

obterEditora('livro1');
