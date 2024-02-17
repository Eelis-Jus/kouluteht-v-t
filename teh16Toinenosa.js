const prompt=require('prompt-sync')();

var alkusana=prompt("anna sana jota haluat testata onko se palindromi:");

var testi=[...alkusana].reverse().join("");

if(alkusana==testi){
    console.log(alkusana + " on palindromi");
}
if(alkusana != testi){
    console.log(alkusana + " ei ole palindromi");
}