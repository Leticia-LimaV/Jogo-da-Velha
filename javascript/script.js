const tabuleiro = document.getElementById('tabuleiro');
const celulas = document.getElementsByClassName('celula');

let vezDoJogador = 'X';
let jogoAtivo = true;

const combinacoesVencedoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

for( let i = 0; i < celulas.length; i++) {
  celulas[i].addEventListener("click", function () {
    if(!jogoAtivo || celulas[i].textContent !== "") return;

    this.textContent = vezDoJogador;

    if(verificarVitoria(vezDoJogador)) {
      setTimeout(() => alert(`${vezDoJogador} venceu!`, 50));
      jogoAtivo = false;
      return;
    }
    if(verificarEmpate()) {
    setTimeout(() => alert("Empate!", 50));
    jogoAtivo = false;
    return;
  }  
    vezDoJogador = vezDoJogador === "X" ? "O" : "X";
  })
}

function verificarVitoria(jogador) {
  return combinacoesVencedoras.some(combinacao => combinacao.every(index =>celulas[index].textContent === jogador));
}

function verificarEmpate() {
  return Array.from(celulas).every(celula => celula.textContent !== "");
}