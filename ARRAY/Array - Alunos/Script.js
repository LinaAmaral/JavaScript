var nota = [];
var soma = 0;

quant_alunos = prompt("Quantos alunos há nessa classe?");

for(i=0;i<quant_alunos;i++){
    nota[i] = parseFloat(prompt("Digite a nota"))
}

for(i in nota){
    soma += nota[i]
}

media = soma/quant_alunos;

document.write("A média da turma é ", media)