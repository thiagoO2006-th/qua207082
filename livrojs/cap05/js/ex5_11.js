const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas:"))
const eLinha = Number(prompt("Nº de Etiquetas por linha: "))
// cria um laço de repetição até num/2
for(let i = 1; i < num/eLinha; i++){
    let linha = ""
    for(let j = 1;)
}