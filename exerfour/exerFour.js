let userInput = document.getElementById("marta-input");
let button = document.getElementById("marta-btn");
let resultado = document.getElementById("resultado")



function consultarTexto() {

    let textoSeparado = userInput.value.toLowerCase();

    return textoSeparado;
}

function buscarvocales() {

    let a = 0
    
    let Letras = consultarTexto();
    


    for (k = 0; k < Letras.length; k++) {

        if (Letras[k] = "a") {       
                a++;
        }
    }
    resultado.innerHTML = `el numero de a son ${a} `
}


button.addEventListener("click", buscarvocales)