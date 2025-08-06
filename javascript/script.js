const tabuleiro = document.getElementById("tabuleiro");
const celulas = document.getElementsByClassName("celula");

let vezDoJogador = "X";

for (let i = 0; i < celulas.length; i++) {
  celulas[i].addEventListener("click", function () {
    if (this.textContent === "") {
      this.textContent = vezDoJogador;
      vezDoJogador = vezDoJogador === "X" ? "O" : "X";

      verificarVitoria();
    }
  });
}

function verificarVitoria() {
  if (
    (celulas[0].textContent === "X" &&
      celulas[1].textContent === "X" &&
      celulas[2].textContent === "X") ||
    (celulas[3].textContent === "X" &&
      celulas[4].textContent === "X" &&
      celulas[5].textContent === "X") ||
    (celulas[6].textContent === "X" &&
      celulas[7].textContent === "X" &&
      celulas[8].textContent === "X") ||
    (celulas[0].textContent === "X" &&
      celulas[3].textContent === "X" &&
      celulas[6].textContent === "X") ||
    (celulas[1].textContent === "X" &&
      celulas[4].textContent === "X" &&
      celulas[7].textContent === "X") ||
    (celulas[2].textContent === "X" &&
      celulas[5].textContent === "X" &&
      celulas[8].textContent === "X") ||
    (celulas[0].textContent === "X" &&
      celulas[4].textContent === "X" &&
      celulas[8].textContent === "X") ||
    (celulas[2].textContent === "X" &&
      celulas[4].textContent === "X" &&
      celulas[6].textContent === "X")
  ) {
    setTimeout(() => {
      alert("X venceu!");
    }, 50);
    return true;
  } else if (
    (celulas[0].textContent === "O" &&
      celulas[1].textContent === "O" &&
      celulas[2].textContent === "O") ||
    (celulas[3].textContent === "O" &&
      celulas[4].textContent === "O" &&
      celulas[5].textContent === "O") ||
    (celulas[6].textContent === "O" &&
      celulas[7].textContent === "O" &&
      celulas[8].textContent === "O") ||
    (celulas[0].textContent === "O" &&
      celulas[3].textContent === "O" &&
      celulas[6].textContent === "O") ||
    (celulas[1].textContent === "O" &&
      celulas[4].textContent === "O" &&
      celulas[7].textContent === "O") ||
    (celulas[2].textContent === "O" &&
      celulas[5].textContent === "O" &&
      celulas[8].textContent === "O") ||
    (celulas[0].textContent === "O" &&
      celulas[4].textContent === "O" &&
      celulas[8].textContent === "O") ||
    (celulas[2].textContent === "O" &&
      celulas[4].textContent === "O" &&
      celulas[6].textContent === "O")
  ) {
    setTimeout(() => {
      alert("O venceu!");
    }, 50);
    return true;
  }
  return false;
}

 