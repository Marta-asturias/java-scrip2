let userInput = document.getElementById("marta-input");
let button = document.getElementById("marta-btn");
let resultado = document.getElementById("resultado")



function consultarTexto() {

    let textoSeparado = userInput.value.toLowerCase();

    return textoSeparado;
}
function buscarvocales() {

    let a, e, i, o, u
    a = e = i = o = u = []
    let Letras = consultarTexto();


    for (k = 0; k < Letras.length; k++) {

        switch (Letras[k]) {
            case "a":
                a.push("a");
                break;
            case "e":
                e.push("e");
                break;
            case "i":
                i.push("i");
                break;
            case "o":
                o.push("o");
                break;
            case "u":
                u.push("u");
                break;
        }
    }
    resultado.innerHTML = `Tenemos: ${a} `
}

button.addEventListener("click", buscarvocales)