const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const operator = document.getElementById("operator");
const equal = document.getElementById("equal");
const total = document.getElementById("total");
const erase = document.getElementById("erase");
let number = numberOne;





// chiffres
function press9() {
    var number9 = document.getElementById("number9").value;
    number.innerHTML += number9;
    
    
}
function press8() {
    var number8 = document.getElementById("number8").value;
    number.innerHTML += number8;
}

function press7() {
    var number7 = document.getElementById("number7").value;
    number.innerHTML += number7;
}

function press6() {
    var number6 = document.getElementById("number6").value;
    number.innerHTML += number6;
}

function press5() {
    var number5 = document.getElementById("number5").value;
    number.innerHTML += number5;
}

function press4() {
    var number4 = document.getElementById("number4").value;
    number.innerHTML += number4;
}

function press3() {
    var number3 = document.getElementById("number3").value;
    number.innerHTML += number3;
}

function press2() {
    var number2 = document.getElementById("number2").value;
    number.innerHTML += number2;
}

function press1() {
    var number1 = document.getElementById("number1").value;
    number.innerHTML += number1;
}

function press0() {
    var number0 = document.getElementById("number0").value;
    number.innerHTML += number0;
}

function pressPoint() {
   var numberPoint = document.getElementById("numberPoint").value;
   number.innerHTML += numberPoint;
} 


// boutons press 
function pressPlus() {
    operator.innerHTML = "+" ; 
    number = numberTwo;
}

function pressFois() {
    operator.innerHTML = "x" ; 
    number = numberTwo;
}

function pressDiv() {
    operator.innerHTML = "÷" ; 
    number = numberTwo;
}

function pressMoin() {
    operator.innerHTML = "-" ; 
    number = numberTwo;
}

// fonction calcul
function pressEgal() {
    equal.innerHTML = "=" ;
    if(operator.innerHTML =="+"){
   total.innerHTML = parseFloat(numberOne.textContent) + parseFloat(numberTwo.textContent);
    }

    if(operator.innerHTML =="x"){
        total.innerHTML = parseFloat(numberOne.textContent) * parseFloat(numberTwo.textContent); 
    }

    if(operator.innerHTML =="÷"){
        total.innerHTML = parseFloat(numberOne.textContent) / parseFloat(numberTwo.textContent); 
    }

    if(operator.innerHTML =="-"){
        total.innerHTML = parseFloat(numberOne.textContent) - parseFloat(numberTwo.textContent); 
    }
   
}

// erase
function pressErase(){
    operator.innerHTML = "";
    numberOne.innerHTML = "";
    numberTwo.innerHTML = "";
    equal.innerHTML = "";
    total.innerHTML = "";
    number = numberOne;

}
