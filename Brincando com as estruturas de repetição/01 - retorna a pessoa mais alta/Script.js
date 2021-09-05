i=1;
maior_altura = altura =0;
menor_altura = 3.0;

while( i<= 15){
    altura = parseFloat(prompt("Digite a altura da "+i+ "ª pessoa:" ));
    if (altura > maior_altura)
        maior_altura = altura;
    if (altura < menor_altura)
        menor_altura = altura;
    i++;
}
document.write("A pessoa mais alta do grupo mede ", maior_altura,"<br>");
document.write("A pessoa mais baixa do grupo mede ", menor_altura);