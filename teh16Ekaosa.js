const prompt =require('prompt-sync')();
var ekanumero = prompt("anna 1. numero");
var toinennumero = prompt("anna 2. numero");

if(ekanumero > toinennumero){
    console.log(ekanumero + "on suurempi numero");
}
if(toinennumero > ekanumero){
    console.log(toinennumero + "on suurempi numero");
}
if(toinennumero==ekanumero){
    console.log("numerot ovat samanarvoiset");
}

