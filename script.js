const ageInp = document.getElementById("ageInput");
const btn = document.getElementById("btn");
const result = document.getElementById("res");

function verifyAge(age){
    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Minor");
    }

}

console.log(verifyAge(19));
