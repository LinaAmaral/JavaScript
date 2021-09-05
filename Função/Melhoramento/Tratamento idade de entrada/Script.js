var ano = 1;

function idade(ano){
    if( 2021 - ano  >= 18)
        document.write("Você é MAIOR de idade");
    else
        document.write ("Você é MENOR de idade");
}

do{
    ano = prompt("Em que ano você nasceu? ");
    if(ano<1891 || ano>2022)
        alert ("Amigo, você não nasceu este ano. Tente novamente!")

}while(ano<1891 || ano>2021);
 
idade(ano);
