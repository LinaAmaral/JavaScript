var ano = 0;

function idade(ano){
    if( 2021 - ano  >= 18)
        document.write("Você é MAIOR de idade");
    else
        document.write ("Você é MENOR de idade");
}


ano = prompt("Em que ano você nasceu? ");
idade(ano);

