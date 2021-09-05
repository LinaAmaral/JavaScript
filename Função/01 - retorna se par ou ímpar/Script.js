var num;

function par_impar(num){
    if(num % 2 == 0)
        return "Par"
    else return "Impar"
}


num = prompt("digite um número");
document.write("Esse número é ", par_impar(num));
