var aposta = [] 
var numero = i = 0

function GeraRandom(){
    const d = new Date();
    segundos = d.getSeconds();
    milessimo = d.getMilliseconds();

    num = (segundos*milessimo)%61
    return num
}

function NumerosMega(){
    while(aposta.length < 6){

        numero = GeraRandom()
         
        if (!(aposta.find(elemento => elemento == numero))){
            aposta[i] = numero
            i ++
        }
    }
    document.write("Aposte nos números: ", aposta)
}

