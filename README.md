# Módulo 2 - Conceito de Node e Tipos em Javascript

# Hello Node.js

O que é o node?

O Node.js pode ser definido como um ambiente de execução Javascript server-side.
Ou seja com o node usamos JavaScript <3 no backend.

Ele foi construído em cima da engine __V8__ que interpreta JavaScript, criado pela Google e usado em seu navegador, o Chrome. Isso quer dizer que você utilizará a linguagem pelo lado do servidor também, e não só pelo browser, como normalmente ocorre.

Além disso, ele usa uma arquitetura voltada a eventos, o que se integra muito bem com JavaScript.
Usando um loop de eventos, o Node interpreta, em uma única thread, as requisições de forma assíncrona em vez de sequenciais, e não permitindo bloqueios. Isso o torna __incrivelmente rápido, perfeito para lidar com um número muito alto de requisições.__

Já tem o node instalado?

Para checar digite na linha de comando:
`node --version`

Se tiver instalado vai aparecer a versão.
Caso não tenha, esse é o link para instalação: https://nodejs.org/en/download/

Agora vamos ver ele em ação, no terminal (ou gitbash) digite:
````node````

Repare aque agora o terminal mostrará `>`e aqui podemos digitar:
````console.log("Hello World")````

Para executar um arquivo, vamos no terminal, entramos na pasta que o arquivo `.js` está e digitamos:
````node nome-do-arquivo.js````

# Tipos em Javascript

## Tipos Primitivos

* Boolean
`false` e `true`

* Null (nulo) -> pode ser utilizado para representar um valor vazio

* Undefined -> valor que nao foi definido

* Number -> valores numéricos (podem ser inteiros ou decimais 5 ou 5.0)

* BigInt (numero grandao)

  o tipo Number é limitado por isso o tipo de dado BigInt foi criado. Com ele é possível representar inteiros de precisão não exata. Para fazer uso dele você pode adicionar um n ao final do número inteiro ou chamar a função BigInt() como mostrado abaixo:
````
90071992547409910n * 100n
9007199254740991000n
````
com o Number:
````
90071992547409910 * 100
9007199254740990000
````

* String -> representa textos
```
'hello world'
"hello world"
`hello world`
```

## Outros tipos

* Object
* Function


# Operadores

## Operadores Matemáticos

```
+  mais
-  menos
*  multiplicação
/  divisão
%  modulo (ou resto)
** potencia
```

## Operadores de Atribuição

a = 2 -> atribui valor de 2 para a


## Operadores Lógicos

```
&&  significa E
||  significa OU
```

## Operadores de Comparação

```
==   igual
===  igual
>    maior que
<    menor que
>=   maior igual a
<=   menor igual a
!==  diferente
!=   diferente
 ```

### Triple equals vs Double equals
```
2 == 2 // true
2 === 2 // true
2 === "2" // false
2 == "2" // true
```

O double equals vai tentar nos ajudar na comparação, e ao notar que
estamos tentando comparar tipos diferentes (string e number) ele vai tentar converter a string para number. No caso acima ele consegue e por isso temos o resultado true.

Entao por baixo dos panos o que aconteceu foi:
``2 == Number("2") //true``

Com o triple equals o javascript nunca tenta converter os valores. Por isso, o resultado false.

Sendo assim, __recomenda-se usar o triple equals__ para evitar surpresas.

E a internet não perdoa as surpresas:

![meme1](./images/meme-javascripto.png)





# Estruturas Condicionais

Na programação utilizamos estruturas condicionais para decidir se algo deve ou não acontecer. Ou seja, para tomada de decisão.

## if/ else if/ else

```
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
}
```

```
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else {
  // se a primeira condição não for verdadeira, o código aqui dentro será executado
}
```

````
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else if (condição) {
  // se a condição anterior não for verdadeira e a condição atual for, o código aqui dentro será executado
} else {
  // se as condições anteriores não forem verdadeiras, o código aqui dentro será executado
}
````

Exemplo:

Se for maior de idade pode entrar:
```
if (idade >= 18) {
  console.log('pode entrar')
}
```

Agora queremos também mandar mensagem caso não seja maior de idade:

```
if (idade >= 18) {
  console.log('pode entrar')
} else {
  console.log('entrada permitida apenas para maiores de idade.')
}
```

Agora mudamos um pouco a regra e complicamos um poco:
- se for maior de 18 entra
- se for mais de 18 e menor de 21 entra, mas nao pode consome bebida alcolica
- se for maior de 21 entra e pode consome bebida alcolica.

````
if (idade >= 18 && idade < 21) {
  console.log('pode entrar, mas não pode consumir bebidas alcolicas')
} else if (idade >= 21) {
  console.log('pode entrar e consumir bebidas alcolicas')
} else {
  console.log('entrada permitida apenas para maiores de idade.')
}
````
O else if pode ser repetido quantas vezes for necessário.


## Switch Case

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

````
const produto = 'mamão'

switch (produto) {
  case 'laranja':
    console.log('laranja custa 30 centavos');
    break;
  case 'manga':
  case 'mamão':
    console.log('manga e mamão custam 2.79 reais.');
    break;
  default:
    console.log('desculpe, nao temos o produto desejado');
}
````


# Escopo

A grande maioria das linguagens possui o conceito de escopos, e JavaScript não é diferente. Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código.

Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.

## Global

Todos tem acesso a valores que são definidos no escopo global.

## Local

No escopo local, variaveis que sao criadas dentro dele não podem ser acessadas no escopo global(com excessao da var).

Escopos locais são criados através de __funções__ e __blocos__ de código.
Bloco de código é tudo que está dentro de chaves `{}`

```
// escopo global

if (2 > 1) {
  //escopo local
  const restrito = 'olá'
}
```
console.log(restrito) // ReferenceError: restrito is not defined

agora vamos definir a variável `popular` fora do bloco de if (no escopo global).
Veja que conseguimos acessa-lá de dentro do escopo local.

```
const popular = 'oi'
if (2 > 1) {
  //escopo local
  console.log(popular)
}
```

# Variáveis

JavaScript é uma linguagem de __tipagem dinâmica__.
Isso significa que você não necessita declarar o tipo de uma variável antes de sua atribuição.
O tipo será automaticamente determinado quando o programa for processado.
Isso também significa que você pode reatribuir uma mesma variável com um tipo diferente.


Uma variável faz referencia a um espaço na memória do computador.
São utilizadas para guardar informações que serão usadas nos programas.


Criamos a variável nome e atribuimos o valor string de 'natalya' a ela.
em seguida acessamos a variavel e a mostramos na tela.

```
var nome = 'natalya'
console.log(nome)
```


Na __declaração__ usamos as palavras reservadas (var, let ou const):
```
let batata = 'pure'
```


__Reatribuíção:__
```
batata = 'batata-frita'
```

## var

É  mais antiga forma de definir variáveis no javascript.
Ela pode ser reatribuída e redeclarada.
Diferentemente da const e da let ela não tem escopo de bloco.


## let

A let junto com a const vieram no es6 (atualização de 2015).
Ela também pode ter o seu valor reatribuido mas não pode ser redeclarado.


## const

A const (constante) não pode ter seu valor reatribuído nem redeclarado.
Diferentemente da let e da var. E assim com a let ela também tem escopo de bloco.



# Resolução de problemas / Algoritmos

Com os conceitos que aprendemos hoje, já podemos criar algoritmos para resolução de problemas.

__Definição do Wikipedia:__ Em ciência da computação, um algoritmo é uma sequência finita de ações executáveis que visam obter uma solução para um determinado tipo de problema. Segundo Dasgupta, Papadimitriou e Vazirani, "algoritmos são procedimentos precisos, não ambíguos, mecânicos, eficientes e corretos".

Em outras palavras algoritmos são instruções ordenadas que executadas resolvem um determinado problema.

Exemplos do dia-a-dia:

| Problemas       |    Solução    |
|----------------:|:----------------------------------------------------:|
| Fazer um bolo   | Receita com instruçoes                               |
| Ligar a TV      | 1 Procurar controle remoto; 2 apertar botao de ligar |
| Montar um Móvel | Seguir manual com instruções                         |

Todas os problemas acima são resolvidos com algoritmos.

No mundo da engenharia de software é assim, quando temos que resolver um problema
pensamos de forma estruturada e ordenada de como resolve-lo e passamos as instruções para
o computador por meio de linguagem de programação.

# Conteúdo Extra:

* parseInt

Analisa um argumento __string__, e retorna um __numero__ inteiro.

```
parseFloat("89898")  // Retorna 89898 : note que aqui ele transforou uma string em Number
parseFloat("8989.8") // Retorna 8989  : aqui também porém ignorou o numero depois do ponto.
```

* parseFloat

Analisa um argumento __string__, e retorna um __numero__ de ponto flutuante

````
parseFloat("89898")  // Retorna 89898 : note que aqui ele transforou uma string em Number
parseFloat("8989.8") // Retorna 8989.8 : aqui também e ele NÃO ignorou o numero depois do ponto.

````

* toFixed

Esse método converte um __número__ em uma __string__, arredondando esse número ao número de casa decimais passado por argumento.

````
const numObj = 12345.6789;

numObj.toFixed();       // Retorna '12346': note o arredondamento, tiramos todos os números depois do ponto.
numObj.toFixed(1);      // Retorna '12345.7': note o arredondamento, com 1 numero apos o ponto.
numObj.toFixed(6);      // Retorna '12345.678900': note que adicionou zeros e deixou 6 numeros após o ponto.

````

# Links :

* eloquent Javascript - https://braziljs.github.io/eloquente-javascript/chapters/valores-tipos-operadores/

* Valores Verdadeiros e falsos (Truthy e falsy) - https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy#:~:text=Nesta%20p%C3%A1gina&text=Em%20JavaScript%2C%20um%20valor%20truthy,de%20tipo%20em%20contextos%20booleanos

* memes js - https://dev.to/damxipo/javascript-versus-memes-explaining-various-funny-memes-2o8c

* node - https://www.opus-software.com.br/node-js/

* const, let e var - https://medium.com/@natalya.peixoto/var-const-e-let-qual-a-diferen%C3%A7a-338ff0c7a972

* algoritmo - https://www.cursoemvideo.com/course/curso-de-algoritmo/

* toFixed - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

* parseFloat - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

* parseInt - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt

* CURSO EM VIDEO - https://www.cursoemvideo.com/cursos/

* FREECODECAMP - https://www.freecodecamp.org/learn
