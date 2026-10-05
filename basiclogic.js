function average()
{
let n1 = parseInt(document.getElementById("num1").value);
let n2 = parseInt(document.getElementById("num2").value);
let n3 = parseInt(document.getElementById("num3").value);

let avg = document.getElementById("res");

avg.value = (n1+n2+n3)/3;
}
  