const imputNumberOne = document.getElementById("numberdado");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("divisor");

     

function Divisors (){
let numero = document.getElementById('numberdado').value; 
let n =[]
for(let i = numero; i >= 0; i--){
    if(numero % i === 0){
        n.push(i);
        console.log(i);
    }
}
resultado.innerHTML = `Los divisores de ${numero} son = ${n}`
}
btnCheck.addEventListener("click", Divisors);