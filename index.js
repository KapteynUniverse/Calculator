var keys = document.querySelectorAll(".btn");
var keys2 = document.querySelectorAll(".btn2");

let input = "";
let a = "";
let operator = "";
let operator2 = "";

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", function () {
    input += this.innerHTML;
    document.querySelector(".display").innerHTML = input;
  });
}

for (var i = 0; i < keys2.length; i++) {
  keys2[i].addEventListener("click", function () {
    operator = this.innerHTML;

    if (operator === "AC") {
      input = "";
      a = "";
      operator = "";
      operator2 = "";
      document.querySelector(".display").innerHTML = "0";
    } else if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "%"
    ) {
      operator2 = operator;
      a = parseFloat(input);
      input = "";
    } else if (operator === "=") {
      calc(parseFloat(a), parseFloat(input));
    } else {
      console.log("Err");
    }
  });
}

function calc(a, b) {
  let c;
  switch (operator2) {
    case "+":
      c = a + b;
      document.querySelector(".display").innerHTML = c;
      input = "";
      break;
    case "-":
      c = a - b;
      document.querySelector(".display").innerHTML = c;
      input = "";
      break;
    case "%":
      c = a / b;
      document.querySelector(".display").innerHTML = c;
      input = "";
      break;
    case "*":
      c = a * b;
      document.querySelector(".display").innerHTML = c;
      input = "";
      break;

    default:
      document.querySelector(".display").innerHTML = "Error";
      return NaN;
  }
}
