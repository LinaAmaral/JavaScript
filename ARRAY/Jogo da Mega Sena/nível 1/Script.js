var aposta = [] 
var numero = i = 0

function NumerosMega(){
    while(aposta.length < 6){

        numero = parseInt(Math.random()*(61-1))
         
        if (!(aposta.find(elemento => elemento == numero))){
            aposta[i] = numero
            i ++
        }
    }
    document.write("Aposte nos números: ", aposta)
}