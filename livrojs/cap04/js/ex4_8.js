
const prompt = require("prompt-sync")() 
const valor = Number(prompt("Valor da compra R$:"))
const aux = Math.floor(valor / 20)
const parcelas = aux == 0 ? 1  : aux > 6 ? 6 : aux //operador ternário
const valorParcela = valor / parcelas
console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)
