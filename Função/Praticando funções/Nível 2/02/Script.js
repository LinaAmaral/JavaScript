var num1 = num2 = num3 = 0;

function Maior(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3)
        return num1
    else if(num2>= num1 && num2 >= num3)
        return num2
    else return num3
}
function Menor(num1, num2, num3){
    if(num1 <= num2 && num1 <= num3)
        return num1
    else if(num2 <= num1 && num2 <= num3)
        return num2
    else return num3
}

num1 = parseFloat(prompt("Digite 1° número: "));
num2 = parseFloat(prompt("Digite 2° número: "));
num3 = parseFloat(prompt("Digite 3° número: "));

document.write("O maior dos três é: ", Maior(num1, num2, num3), "<br>");
document.write("O menor dos três é: ", Menor(num1, num2, num3));






