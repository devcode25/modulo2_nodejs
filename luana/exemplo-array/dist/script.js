//const livros = ["Javascript Assertivo", "Engenharia de Testes", "Clean conde", "Scrum", "Guia HTML5 e CSS3", "MongoDB"];

//Adicionar novo livro chamado "Express, no index 1."

//O primeiro argumento (1) é o índice onde queremos inserir o novo elemento.
//O segundo argumento (0) indica quantos elementos queremos remover a partir do índice informado.
//O terceiro argumento ("Express") é o elemento que queremos adicionar no índice especificado.

//livros.splice(1, 0, "Express");
//console.log(livros)

//Remover o último livro "MongoDB"

//livros.pop()

//Imprimir a quantidade de elementos na array

//console.log(livros.length)

//Listar todos os elementos do Array

//for (let i = 0; i < livros.length; i++) {
  //console.log(livros[i]);
//}

//Imprimir um elemento de um index específico
//console.log(livros[1])

//Imprimir o index de um elemento
//console.log(livros.indexOf("Scrum"));


//let livro = "Express";
//while (livros.indexOf(livro) === -1) {
  //livros.push(livro);
//}
//console.log(livros)





// let livros = [
//   { 
//     titulo: "A Revolução dos Bichos", 
//     disponivel: true 
//   },
//   { 
//     titulo: "1984", 
//     disponivel: false 
//   },
//   { 
//     titulo: "O Processo", 
//     disponivel: true 
//   },
//   { 
//     titulo: "O Castelo", 
//     disponivel: false 
//   },
//   { 
//     titulo: "A Menina que Roubava Livros", 
//     disponivel: true 
//   }
// ];

// let livroDesejado = "O Processo";

// for (let i = 0; i < livros.length; i++) {
//   if (livros[i].titulo === livroDesejado) {
    
//     if (livros[i].disponivel) {
//       console.log("O livro " + livros[i].titulo + " está disponível para empréstimo.");
//       livros[i].disponivel = false;
//     }    
//     else {
//       function livrosDisponiveis(livros) {
//   let disponiveis = [];

//   for (let i = 0; i < livros.length; i++) {
//     if (livros[i].disponivel) {
//       disponiveis.push(livros[i].titulo);
//     }
//   }
//   return disponiveis;
// }
//       console.log("O título: " + livroDesejado + " não está disponível." + "\n" + "Livros disponíveis para empréstimo: " + livrosDisponiveis.length + ". \n" + "Titulos: " + livrosDisponiveis(livros));
      
//     }
//   }
// }



// function livrosDisponiveis(livros) {
//   let disponiveis = [];

//   for (let i = 0; i < livros.length; i++) {
//     if (livros[i].disponivel) {
//       disponiveis.push(livros[i].titulo);
//     }
//   }

//   return disponiveis;
// }

// console.log("Livros disponíveis para empréstimo: " + livrosDisponiveis.length + ". \n" + " Titulos: " + livrosDisponiveis(livros));

//-------------------------------------------------------------


let livros = [
  { 
    titulo: "JavasCript Acertivo", 
    autor: "Gabriel Ramos", 
    disponivel: true 
  },
  { 
    titulo: "Engenharia de Testes", 
    autor: "Alvaro Farias Pinheiro", 
    disponivel: false 
  },
  { 
    titulo: "Clean Code", 
    autor: "Franz Kafka", 
    disponivel: true 
  },
  { 
    titulo: "O Castelo", 
    autor: "Franz Kafka", 
    disponivel: false 
  },
  { 
    titulo: "Scrun", 
    autor: "Markus Zusak", 
    disponivel: true 
  }, 
  { 
    titulo: "Guia HTMLS5 e CSS3", 
    autor: "Franz Kafka", 
    disponivel: false 
  },
  { 
    titulo: "MongoDB", 
    autor: "Franz Kafka", 
    disponivel: false 
  },
];

//filtrando por um ator específico
// let pAutor = prompt(" para pesquisar pelo autor digite o nome do autor")
// const autores = livros.filter(livros => (livros.autor === pAutor))
// console.log(autores)

//filtrando por livros disponível: true
const statusDisponivel = livros.filter(livros => (livros.disponivel === true))
console.log(statusDisponivel)