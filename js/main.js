let a = +prompt("Write first number");
let b = prompt("choose on of them +,-,*,/");
let c = +prompt("Write second number");

function calc(a) {
  if (b == "+") {
    let result = a + c;
    alert(result);
  } else if (b == "-") {
    result = a - c;
    alert(result);
  } else if (b == "*") {
    result = a * c;
    alert(result);
  } else if (b == "/") {
    result = a / c;
    alert(result);
  } else {
    alert("not a true try again");
  }
}

calc(a);
