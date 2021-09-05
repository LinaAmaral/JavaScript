var vetor = [];

function AlimentarVetor(y){

    for(i=0;i<=10;i++){
        vetor[i] = i * y
        document.write(vetor[i], " ")
    }
}

AlimentarVetor(1)

document.write("<br> Resultado após a função: <br>")
AlimentarVetor(2)