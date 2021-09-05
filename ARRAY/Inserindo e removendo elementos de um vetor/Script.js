var S = ["A","b","B","C","c","1","2","3"];
for(i in S){
    document.write(S[i], " - ")
}

document.write(" <br> ")
S.unshift("a")
for(i in S){
    document.write(S[i], " - ")
}

document.write(" <br> ")
S.push("4")
for(i in S){
    document.write(S[i], " - ")
}

document.write(" <br> ")
for(i in S){
    if(i>4)
        S[i] = S[parseInt(i)+1]
}
S.pop()
for(i in S){
    document.write(S[i], " - ")
}

document.write(" <br> ")
S.shift();
for(i in S){
    document.write(S[i], " - ")
}

document.write(" <br> ")
S.pop();
for(i in S){
    document.write(S[i], " - ")
}