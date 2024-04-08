let numberOne = document.getElementById("number");
let numberTwo = document.getElementById("numberTwo");
let btnOne = document.getElementById("btnOne");
let option = document.getElementById("option");
let text = document.getElementById("text");
let textSms = document.getElementById("text-sms");

btnOne.addEventListener("click", () => {
 
  if ((numberOne.value == '' || numberTwo.value =='' ||  isNaN(numberOne.value) ||isNaN(numberTwo.value) )) {
    text.innerHTML = "Please Enter Valid Number";
    textSms.classList.add("error");
    numberOne.value = "";
    numberTwo.value = "";
    
  } else if (numberOne.value != '' && option.value == 1) {
    let sum = parseInt(numberOne.value) + parseInt(numberTwo.value);
    text.innerHTML = "Addition Result is" + " " + sum;
    textSms.classList.add("success");
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 2) {
    let Subtraction = parseInt(numberOne.value) - parseInt(numberTwo.value);
    text.innerHTML = "Subtraction Result is" + " " + Subtraction;
    textSms.classList.add("success");
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 3) {
    let Multiplication = parseInt(numberOne.value) * parseInt(numberTwo.value);
    text.innerHTML = "Multiplication Result is" + " " + Multiplication;
    textSms.classList.add("success");
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 4) {
    let Division = parseInt(numberOne.value) / parseInt(numberTwo.value);
    text.innerHTML = "Division Result is" + " " + Division.toFixed(2);
    textSms.classList.add("success");
    numberOne.value = "";
    numberTwo.value = "";
  }
});
