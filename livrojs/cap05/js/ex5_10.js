const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor R$:"))
const num = Number(prompt("Nº de Parcelas: "))
const valorParcelas = Math.floor(valor/num) //calcula valor sem decimas
const valorFinal = valorParcelas + (valor % num) // calcula parcelas final
for (let i = 1; i < num; i++) {
    console.log(`${i}ª parcela: R$ ${valorFinal.toFixed(2)}`)
} 
console.log(`${num}ª parcela: R$ ${valorFinal.toFixed(2)}`)