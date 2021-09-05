var num1 = num2 = i = temp = 0;

function divisao(num1, num2){
    return (num1/num2).toFixed(2)
}

while (i!=1){
    num1 = prompt("Digite um número: ");
    num2 = prompt("Digite um número: ");

    if(!(num1 == 0 || num2 == 0 || num1-num1 != 0 || num2-num2 != 0))
        i = 1;
    else alert("Número invalido, tente novamente!");
}

if(num2 < num1){
    temp = num1;
    num1 = num2;
    num2 = temp;
}

document.write("O valor da divisão é: ", divisao(num1, num2));
