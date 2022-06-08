const imputNumberOne = document.getElementById("number-one");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("divisible");



function averiguarCualesmayor(numbOne){
    if (numbOne % 2 === 0 || numbOne % 3 === 0 || numbOne % 5 === 0 || numbOne % 7 === 0) {
        if (numbOne % 2 === 0) {
            resultado.innerHTML = "El numero si es divisible por 2 ";
        }
        if (numbOne % 3 === 0) {
            resultado.innerHTML = "El numero si es divisible por 3 ";
        }
        if (numbOne % 5 === 0) {
            resultado.innerHTML = "El numero si es divisible por 5 ";
        }
        if (numbOne % 7 === 0) {
            resultado.innerHTML = "El numero si es divisible por 7 ";
        }
        } else {
            resultado.innerHTML = "El numero no es divisible ni por 2 ni por 3 ni por 5 ni por 7 ";
        }
       
}
btnCheck.addEventListener("click", () =>{
    let numbOneUser = imputNumberOne.value;
    averiguarCualesmayor(numbOneUser);
    
});
