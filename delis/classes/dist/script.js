// class Carro {
//   constructor(cor,placa,ano) {
//     this.cor=cor;
//     this.placa=placa;
//     this.ano=ano;
//       // console.log(`sou um carro ${this.cor} de  placa ${this.placa} e ano ${this.ano}!`)
//   }
//   info(){
//     console.log("Cor: " + this.cor)
//     console.log("Placa: " + this.placa)
//     console.log("Ano: " + this.ano)
//   }

// }
// // let c1 = new Carro("vermelho","JGF2584",2015);
// // let c2 = new Carro("amarelo","GFD89872", 2002)

// let c3 = new Carro("verde","rfd9721",1999)
// c3.info()

class Home {
  constructor(endereco, proprietario, m2, status, aluguel) {
    this.endereco = endereco;
    this.proprietario = proprietario;
    this.m2 = m2;
    this.status = status;
    this.aluguel = aluguel
  }
  info() {
    console.log("Endereco: " + this.endereco);
    console.log("Proprietario: " + this.proprietario);
    console.log("Metros ² " + this.m2);
    console.log(this.status ? "Alugado: sim" : "Alugado: não");
    console.log("---------------------");
    set setAluguel(v){
      this.aluguel = v
      console.log("o valor do aluguel foi alterado! valor atual:" + this.aluguel)
    }
  }
}

let nHome1 = new Home(
  "Rua dois, 258, abreu e lima",
  "Paulo Fernando Silva",
  50,
  true
);
let nHome2 = new Home(
  "Rua dois, 73, jaboatão",
  "Paulo Fernando Silva",
  50,
  false
);
let nHome3 = new Home("Rua dois, 2, goiana", "Paulo Fernando Silva", 50, false);
let nHome4 = new Home(
  "Rua dois, 7890, paulista",
  "Paulo Fernando Silva",
  50,
  false
);
let nHome5 = new Home("Rua dois, 3, recife", "Paulo Fernando Silva", 50, false);
let nHome6 = new Home(
  "Rua dois, 258, paulista",
  "Paulo Fernando Silva",
  50,
  true
);
let nHome7 = new Home(
  "Rua dois, 55, recife",
  "Paulo Fernando Silva",
  50,
  false
);
let nHome8 = new Home("Rua dois, 7, olinda", "Paulo Fernando Silva", 50, false);

nHome1.info();
// nHome2.info();
// nHome3.info();
// nHome4.info();
// nHome5.info();
// nHome6.info();
// nHome7.info();
// nHome8.info();
nHome1.setAluguel = 100