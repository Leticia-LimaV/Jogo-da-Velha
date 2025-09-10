const tabuleiro = document.getElementById("tabuleiro");
const celulas = document.getElementsByClassName("celula");
const mensagem = document.getElementById("mensagem");

let vezDoJogador = "X";
let jogoAtivo = true;

//Placar

let pontosX = 0;
let pontosO = 0;
let empates = 0;

//Combinações

const combinacoesVencedoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Evento de click

for (let i = 0; i < celulas.length; i++) {
  celulas[i].addEventListener("click", function () {
    if (!jogoAtivo || celulas[i].textContent !== "") return;

    this.textContent = vezDoJogador;

    this.classList.add(vezDoJogador.toLowerCase());

    if (verificarVitoria(vezDoJogador)) {
      if(vezDoJogador === 'X') {
        pontosX++;
      } else {
        pontosO++;
      }

      document.getElementById('placar-x').textContent = `X: ${pontosX}`;
      document.getElementById('placar-o').textContent = `O: ${pontosO}`;

      mensagem.classList.add("vitoria", "show");
      mensagem.textContent = `Jogador ${vezDoJogador} venceu o jogo!`;
      jogoAtivo = false;
      return;

    }
    if (verificarEmpate()) {
      empates++;
      document.getElementById('placar-empates').textContent = `Empates: ${empates++}`;

      mensagem.classList.add("empate", "show");
      mensagem.textContent = `Empate!`;
      jogoAtivo = false;
      return;
    }
    vezDoJogador = vezDoJogador === "X" ? "O" : "X";
  });
}

function verificarVitoria(jogador) {
  for (let combinacao of combinacoesVencedoras) {
    if (combinacao.every((index) => celulas[index].textContent === jogador)) {
      combinacao.forEach((index) => celulas[index].classList.add("vencedora"));
    for (let i = 0; i < celulas.length; i++) {
    if (!combinacao.includes(i)) {
      celulas[i].classList.add("perdedora")
    }
  }  
    return true;
    }
  }
  return false;
}

function verificarEmpate() {
  return Array.from(celulas).every((celula) => celula.textContent !== "");
}

//Botão de reiniciar

document.getElementById("reiniciar").addEventListener("click", function () {
  for (let i = 0; i < celulas.length; i++) {
    celulas[i].textContent = "";
    celulas[i].classList.remove("x", "o", "vencedora", "perdedora");
  }
  vezDoJogador = "X";
  jogoAtivo = true;

  mensagem.textContent = "";
  mensagem.classList.remove("vitoria", "empate", "show");
  
});

document.getElementById("zerar-placar").addEventListener("click", function () {
  pontosX = 0;
  pontosO = 0;
  empates = 0;

  document.getElementById('placar-x').textContent = `X: ${pontosX}`;
  document.getElementById('placar-o').textContent = `O: ${pontosO}`;
  document.getElementById('placar-empates').textContent = `Empates: ${empates}`;
})
