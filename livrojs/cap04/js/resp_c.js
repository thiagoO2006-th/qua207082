const frm = document.querySelector("form")
const resp1 = document.querySelectorAll("h3")[0]
const resp2 = document.querySelectorAll("h3")[1]

frm.addEventListener("submit", (e) =>{
 e.preventDefault();

 const valor = Number(frm.inValor.value)
 let troco 

 if (valor < 1.00){
     resp1.innerText = `valor insuficiente ${valor.toFixed(2)}`
     resp2.innerText = ""
 } else if(valor < 1.75){    
     resp1.innerText = `Tempo 30min`
     troco = valor - 1
     resp2.innerText = `Troco de R$: ${troco.toFixed(2)}`
 } else if(valor < 3.00){
     resp1.innerText = `tempo 60min`
     troco = valor - 1.75
     resp2.innerText = `troco de R$: ${troco.toFixed(2)}`
 } else {
     resp1.innerText = `tempo 120min`
     troco = valor - 3
     resp2.innerText = `troco de R$: ${troco.toFixed(2)}`
 }

})