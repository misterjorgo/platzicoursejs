let form = document.querySelector("#formulario");
let input1 = document.querySelector("#num1");
let input2 = document.querySelector("#num2");
let btn = document.querySelector("#btn");
let parrafo = document.querySelector(".parrafoText");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let var1 = input1.value;
  let var2 = input2.value;

  parrafo.innerText = parseInt(var1) / parseInt(var2);
});
