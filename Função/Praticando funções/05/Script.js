var num = 0;

var SePrimo = function(num){
   var i = 1;
   var cont = 0;
    while(i <= num){
        if(num % i == 0)
            cont ++
        i++
    } 
    if (cont<=2)
        return num**3
    else return "Não é primo"  
}

num = prompt("Insira um número ");

document.write((SePrimo(num)));





