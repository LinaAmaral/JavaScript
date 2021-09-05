var fatorial = 1;
var i = 0;

num = parseInt(prompt("Digite o valor o qual você gostaria de saber o fatorial: "));
i = num;

while(i>=1){
    fatorial = fatorial * i;
    document.write(i," x ")
    i--;
}

document.write("  = ",fatorial)