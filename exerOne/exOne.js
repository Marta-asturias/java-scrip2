

const imputNumberOne = document.getElementById("number-one");
const imputNumberTwo = document.getElementById("number-two");
const btnCheck = document.getElementById("btn-take-numbers");
const resultExOne = document.getElementById("result-ex-one");

btnCheck.addEventListener("click", () =>{
    let numbOneUser = imputNumberOne.value;
    let numbTwoUser = imputNumberTwo.value;
    let result = averiguarCualesmayor(numbOneUser,numbTwoUser);
    resultExOne.innerHTML = `El numero mayor es ...${result}`;
});

function averiguarCualesmayor(numbOne,numbTwo){
    if (numbOne > numbTwo) {
       // result.innerHTML=`el numero mayor es ${variable}`;
       return numbOne;  
 } 
       return numbTwo;  
}

