
var soma = (num1, num2, num3) => num1+num2+num3;
var media = (num1, num2, num3) => soma(num1, num2, num3)/3;

num1 = parseFloat(prompt("Digite 1° número: "));
num2 = parseFloat(prompt("Digite 2° número: "));
num3 = parseFloat(prompt("Digite 3° número: "));

document.write("A soma é: ", soma(num1, num2, num3), "<br>");
document.write("A média é: ", media(num1, num2, num3));





