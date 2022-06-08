const imputNumberOne = document.getElementById("numberdadouno");
const imputNumberTwo = document.getElementById("numberdadodos");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("divisor");

function Divisors() {
    let numerouno = document.getElementById('numberdadouno').value;
    let numerodos = document.getElementById('numberdadodos').value;
    let menor;
    let n = []

    if (numerouno < numerodos) {
        menor = numerouno;
    } else {
        menor = numerodos;
    }

    for (let i = menor; i >= 0; i--) {
        if (numerouno % i === 0 && numerodos % i === 0) {
            n.push(i);
            //console.log(i);
        }
    }
    resultado.innerHTML = `Los divisores de ${numerouno} y ${numerodos}son = ${n}`
}

btnCheck.addEventListener("click", Divisors);