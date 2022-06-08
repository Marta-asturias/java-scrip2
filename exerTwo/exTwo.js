

const imputNumberOne = document.getElementById("number-one");
const imputNumberTwo = document.getElementById("number-two");
const imputNumberthree = document.getElementById("number-three");
const btnCheck = document.getElementById("btn-take-numbers");
const resultExOne = document.getElementById("result-ex-one");

btnCheck.addEventListener("click", () =>{
    let numbOneUser = imputNumberOne.value;
    let numbTwoUser = imputNumberTwo.value;
    let numbthreeUser = imputNumberthree.value;
    let result = averiguarCualesmayor(numbOneUser,numbTwoUser,numbthreeUser);
    resultExOne.innerHTML = `El numero mayor es ...${result}`;
});

function averiguarCualesmayor(numbOne,numbTwo,numbthree){
    if (numbOne > numbTwo & numbOne > numbthree) {
       // result.innerHTML=`el numero mayor es ${variable}`;
       return numbOne;  
   }else if(numbTwo > numbthree){
       return numbTwo;  
   }
       return numbthree; 
   
   
}

