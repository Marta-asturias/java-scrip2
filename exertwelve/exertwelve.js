
const imputNumberOne = document.getElementById("number");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("primo")


function numeroprimo (){

let primo = document.getElementById('number').value;     
let i = 2;
while (primo % i !== 0 && i < primo / 2 ) {
    i++;
    }

if (primo % i !== 0) {
    resultado.innerHTML = "El numero si es primo"
} else {
    resultado.innerHTML = "El numero no es primo"
}

}

btnCheck.addEventListener("click", numeroprimo);

