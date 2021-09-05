var total_divida = 1400;

function atualizar_divida(valor_recebido){
    total_divida -= valor_recebido;
    return total_divida;
}

for(var i=0;i<12;i++){
    document.write(i, ":", atualizar_divida(70),"<br>");
}

document.write(total_divida)
//Respota: Total devido após o pagamento de 12 parcelas de 70: 560