var num = 0;

var SeQuadradoPerfeito = function(num){
   var i = 1;
   var cont = 0;
    while(i < num){
        if(num % i == 0)
            cont += i
        i++
    } 
    if (cont == num)
        return " É quadrado Perfeito"
    else
        return "Não é quadrado Perfeito"
 
}

num = prompt("Insira um número ");

document.write(SeQuadradoPerfeito(num));






