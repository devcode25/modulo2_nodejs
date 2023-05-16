const frutas = ['Maçã', 'Banana','Uva','Laranja','Coco',];

console.log(frutas);

// fazer a varredura no array

frutas.forEach(function (item, indice, array) {
   console.log(array)
   
 });

//acessar item 

const primeiro = frutas[0];
const ultimo = frutas[frutas.length - 1];

console.log(primeiro, ultimo)

//Inserindo elementos

const adicionar = frutas.push("Mangaba","Limão");
console.log(frutas)

// adiciona ao início
//const remover = frutas.unshift("Morango");
//console.log(frutas)

// inserir um item na posição escolhida
frutas.splice(1, 0, "Tangerina","Melão");
console.log(frutas)