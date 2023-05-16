/*function dobro(num) {
  return num * 2;
}
console.log(dobro(5));*/

/*function calcularMedia(nota1, nota2, nota3){
const soma = (nota1+nota2+nota3)
  const media = soma / 3
  return media*/

function calcularMedia(nota1, nota2) {
  const soma = nota1 + nota2;
  const media = soma / 2;
  return media;
}
console.log(calcularMedia(8, 5));

//crie função que irá calcular a media de duas notas da matéria  matemática, sendo uma nota para atividade e outra nota para prova. o sistema não pode permitir a entrada maior que 5 para atividade ou prova, se houver tentativa deverá imprimir mensagem de aviso.

const nota1 = 7.5; //nunca mais esquecer e lembrar sempre de Vanessa!
const nota2 = 11; //não esquecer!!  a pequena prodígio Vanessa que chegou atrasada e olhou meu código e corrigiu GRAÇAS A DEUS!

const media = calcularMedia(nota1, nota2);

console.log("A média é:", media);

function calcularMedia(nota1, nota2) {
  if (nota1 > 5 || nota2 > 3) {
    return "Não é válido";
  } else {
    var media = (nota1 + nota2) / 2;
    return media;
  }
}
console.log(calcularMedia(5, 8));
