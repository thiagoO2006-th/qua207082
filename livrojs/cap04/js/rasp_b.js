
const prompt = require("prompt-sync")() 
const Velocidade = Number(prompt("Velocidade do carro:"))
const condutor = Number(prompt("Velocidade do condutor:"))
const velorcidadeMax = 50
if(condutor > velorcidadeMax){
    const multa = (condutor < velorcidadeMax) * 20
    console.log(`sem multa}`)
}
if (condutor > velorcidadeMax){
    const multa = (condutor - velorcidadeMax) * 20
    console.log(`multa de R$${multa}`)
}