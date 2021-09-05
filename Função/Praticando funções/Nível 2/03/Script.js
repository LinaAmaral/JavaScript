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
        return " é primo"
    else 
        return " não é primo"  
}
function TodosPrimos (num){
    var x = 1;
    while (x<=num){
        
        var i = 1;
        var cont = 0;
        while(i <= x){
            if(x % i == 0)
                cont ++
            i++
         } 
        if (cont<=2)
            document.write(x, "<br>")
    x++
    }
}

num = prompt("Insira um número ");

document.write(num, (SePrimo(num)), "<br>");
TodosPrimos(num);





