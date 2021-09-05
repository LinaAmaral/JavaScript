var temperatura = []
var nome = []

function CriaArray(){
    tamN = parseInt(prompt("Quantas temperaturas deseja inserir?"))
    tamM = parseInt(prompt("Quantos nomes deseja inserir?"))
    temperatura = InserirDados(temperatura, tamN,"Temperatura") 
    nome = InserirDados(nome, tamM, "Nome")
    VerificaNome(nome)
    VerificaTemperatura(temperatura)
}

function InserirDados(vetor, tamanho, Dado){
    i = 0;
    while(i < tamanho){
        vetor[i] = prompt(Dado + ": Insira o " + parseInt(i+1) + "° elemento:")
        i ++;
    }
    // document.write(vetor, "<br>")
    return(vetor)
}

function VerificaNome(nome){
    verifica = nome.find(elemento => elemento == "Eliana")
    if(verifica)
        document.write("Eliana está na lista <br>")
    else document.write("Eliana não está na lista <br>")

    verifica = nome.findIndex(elemento => elemento == "Carlos");
    if(verifica == -1)
        document.write("Carlos não está na lista <br>")
    else document.write("Carlos está na posição ", verifica, "<br>")
}

function VerificaTemperatura(temperatura){

    verifica = temperatura.filter(elemento => elemento > 20);
    if(verifica.length > 0)
        document.write(verifica, "<br>")
    else document.write("Não temos temperatura maior de 20 <br>")

    document.write("Exibindo o cubo das temperaturas: ")
    for(i in temperatura)
        document.write(temperatura[i]**3, " ")
}