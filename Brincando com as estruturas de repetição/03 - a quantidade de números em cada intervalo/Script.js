var i=1;
var intervalo025 = intervalo2650 = intervalo5175 = intervalo76100 = 0

while( i <= 10){
    num = parseFloat(prompt("Insira o " + i + "° número:" ));
    if(num>=0 && num<=25)
        intervalo025 += 1; 
    else 
        if(num>=26 && num<=50)
            intervalo2650 += 1;
            else 
                if(num>=51 && num<=75)
                    intervalo5175 += 1;
                    else
                        if(num>=76 && num<=100)
                            intervalo76100 += 1;
                            else
                                if(num <0)
                                    alert("Esse número é negativo");
    i++;
}
document.write("A quantidade de números no intervalo de 0 a 25 é:  ", intervalo025,"<br>");
document.write("A quantidade de números no intervalo de 26 a 50 é:  ", intervalo2650,"<br>");
document.write("A quantidade de números no intervalo de 51 a 75 é:  ", intervalo5175,"<br>");
document.write("A quantidade de números no intervalo de 76 a 100 é:  ", intervalo76100,"<br>");
