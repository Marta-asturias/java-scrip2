let userInput = document.getElementById("marta-input");
let button = document.getElementById("marta-btn");
let resultado = document.getElementById("resultado")



function consultarTexto() {

    let textoSeparado = userInput.value.toLowerCase();

    return textoSeparado;
}
function buscarvocales() {

    let a, e, i, o, u
    a = e = i = o = u = 0
    let Letras = consultarTexto();


    for (k = 0; k < Letras.length; k++) {

        switch (Letras[k]) {
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;
        }
    }
    resultado.innerHTML = `<p> el numero de a son ${a}</p> <p> el numero de e son ${e} </p>
    <p> el numero de i son ${i}</p> <p> el numero de o son ${o}</p> <p> el numero de u son ${u}</p>`
}

button.addEventListener("click", buscarvocales)