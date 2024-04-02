let numberOne = document.getElementById("number");
let numberTwo = document.getElementById("numberTwo");
let btnOne = document.getElementById("btnOne");
let option = document.getElementById("option");
let text = document.getElementById("text");
btnOne.addEventListener("click", () => {
  if((option.value = isNaN)) {
    text.innerHTML = "Please Enter Valid Numbers";
    numberOne.value = "";
    numberTwo.value = "";
  }else if(option.value == 1) {
    let sum = numberOne.value + numberTwo.value;
    text.innerHTML = "Addition Number is" + " " + sum;
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 2) {
    let Subtraction = numberOne.value - numberTwo.value;
    text.innerHTML = "Subtraction Number is" + " " + Subtraction;
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 3) {
    let Multiplication = numberOne.value * numberTwo.value;
    text.innerHTML = "Multiplication Number is" + " " + Multiplication;
    numberOne.value = "";
    numberTwo.value = "";
  } else if (option.value == 4) {
    let Division = numberOne.value / numberTwo.value;
    text.innerHTML = "Division Number is" + " " + Division;
    numberOne.value = "";
    numberTwo.value = "";
  }
});
