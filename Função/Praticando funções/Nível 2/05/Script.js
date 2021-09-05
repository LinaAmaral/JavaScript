var num = 0;

function PosNeg (num){
    if(num>= 0)
        return "P"
    else 
        return "N"
}


num = parseFloat(prompt("Insira um número "));

document.write(PosNeg(num));






