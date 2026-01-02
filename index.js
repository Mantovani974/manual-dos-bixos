const palavras = ["o", "e", "et", "ete", "et", "e"];
let indice = 0;

function animar() {
  document.getElementById("dinamico").textContent = palavras[indice];
  indice = (indice + 1) % palavras.length;
  setTimeout(animar, 600);
}

animar();
