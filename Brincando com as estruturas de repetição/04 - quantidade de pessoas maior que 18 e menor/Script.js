var i=1;
var maior18 = menor18 = 0;

while( i <= 4){
    num = parseInt(prompt("Insira a idade da " + i + "ª pessoa:" ));
    if(num>=18)
        maior18 += 1; 
    else menor18 += 1;
    i++;
}
document.write("A quantidade de pessoas maior de 18 anos é:  ", maior18,"<br>");
document.write("A quantidade de pessoas menor de 18 anos é:  ", menor18,"<br>");

