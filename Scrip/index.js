let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let kq = document.getElementById('kq');
function Addtion(){
    kq.innerHTML = (parseInt(number1.value) + parseInt(number2.value));
}
function Subtraction(){
    kq.innerHTML = (parseInt(number1.value) - parseInt(number2.value)); 
}
function Multiplication(){
    kq.innerHTML = (parseInt(number1.value) * parseInt(number2.value)); 
}
function Division(){
    kq.innerHTML = (parseInt(number1.value) / parseInt(number2.value)); 
}

