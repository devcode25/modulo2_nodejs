/*function dobro(num){
  return num*2
}
console.log(dobro(6))*/

/*function falar(){
  return'pipipi popopo'
}
console.log(falar())*/

/*function calcularMedia(nota1,nota2,nota3){
  const soma=(nota1+nota2+nota3)
  const media = soma/3
  return media
}
console.log(calcularMedia(10,10,10))*/

/*function calcularMedia(nota1,nota2){
  const soma=(nota1+nota2)
  const media=soma/2
  return media
}
console.log(calcularMedia(8,10))*/

/*function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
console.log(parImpar(5));*/
function calcularMedia(nota1, nota2) {
  const soma = nota1 + nota2;
  const media = soma / 2;

  if (nota1 > 5 || nota2 > 5) {
    return "nota maior que 5 não pode";
  } else {
    return media;
  }
}
console.log(calcularMedia(4, 2));