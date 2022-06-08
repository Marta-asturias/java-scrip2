let userInput = document.getElementById("marta-input");
let button = document.getElementById("marta-btn");
let resultado = document.getElementById("resultado");

function cantidaddevolaces() {
    let cadena = userInput.value;
    let numchar = cadena.length;
    cadena = cadena.toUpperCase();  
    let vocal;
    let contador = 0;
    let i;
    for (i = 0; i < numchar; i++) {
        vocal = cadena.charAt(i); 
        if ((vocal == "A") || (vocal == "E") || (vocal == "I") || (vocal == "O") || (vocal == "U")) {
            contador++;
        }
    }
    resultado.innerHTML = `el total de vocales ${contador}`;
}
button.addEventListener("click", cantidaddevolaces);
