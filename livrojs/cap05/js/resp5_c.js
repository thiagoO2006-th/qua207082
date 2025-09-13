const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2= document.querySelector("h4")

frm.addEventListener ("submit", (e) =>{
e.preventDefault()
 
const num = Number(frm.inNumero.value)
 let Divisores = `Divisores do ${num}: 1`
let soma = 1
for (let i = 2; i <= num/2; i++){
    if(num % i == 0){
        soma += i
        Divisores += "," + i
    }

}
resp1.innerText =` ${Divisores} (soma: ${soma})`
if(soma == num){
    resp2.innerText = `${num} É um número perfeito`
} else {
    resp2.innerText = `${num} NÂO é um número perfeito`
} 



})