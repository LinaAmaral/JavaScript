var i=1;
var quant_negativo = quant_positivo = soma = num = 0;

quant_num = parseInt(prompt("Quantos números deseja digitar?" ));
while( i<= quant_num){
    num = parseFloat(prompt("Insira o " + i + "° número:" ));
    if(num>0)
        quant_positivo += 1;
    else 
        if(num<0)
            quant_negativo +=1;
    soma += num;
    i++;
}
document.write("A quantidade de número positivos é ", quant_positivo,"<br>");
document.write("A quantidade de número negativos é ", quant_negativo,"<br>");
document.write("A média aritimética de todos os números digitados é ", soma/quant_num);