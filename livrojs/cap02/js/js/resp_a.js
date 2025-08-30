// cria refêrencia ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
const medicamento = frm.inMedicamento.value //obtém conteúdo do campos
const preco = Number(frm.inPreco.value) 

const Promoção = Math.floor(preco)
const desconto = Promoção * 2

resp.innerHTML =`Promoção de ${medicamento} <br>  Leve 2 por apenas R${desconto.toFixed(2)}`    
    e.preventDefault() // evita envio do form
})