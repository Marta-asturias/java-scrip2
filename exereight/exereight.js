const imputNumberOne = document.getElementById("number-one");
const btnCheck = document.getElementById("btn-take-numbers");
const resultado = document.getElementById("divisible");



function averiguarCualesmayor(numbOne){
    if (numbOne % 2 === 0 || numbOne % 3 === 0 || numbOne % 5 === 0 || numbOne % 7 === 0) {
      
       resultado.innerHTML = "El numero si es divisible"
     
 } else{
       resultado.innerHTML = "El numero no es divisible"
 }
       
}
btnCheck.addEventListener("click", () =>{
    let numbOneUser = imputNumberOne.value;
    averiguarCualesmayor(numbOneUser);
    
});