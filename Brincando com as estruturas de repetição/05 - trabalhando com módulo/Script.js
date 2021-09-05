var soma = 0;

for(i=1; i<500; i++){
    if(i % 2 != 0)
        if(i % 3 == 0)
            soma += i;
}
document.write(soma)