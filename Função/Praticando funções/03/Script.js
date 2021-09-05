var num = 0;

var result = function (num){
    if (num == "F")
        return "Feminino"
    else if(num == "M")
        return "Masculino"
}

num = prompt("Digite F/M: ");
document.write(result(num));



