const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" // string com a resposta a ser exibida 
let numContas = 0 // inuicializa contador 
let valTotal = 0  // e acumlador (variaveis globais)

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++
    valTotal += valor //ou valTotal = valTotal + valor 
    resposta += `${descricao} - R$: ${valor.toFixed(2)}\n`

    resp1.innerText = `${resposta}----------------`
    resp2.innerText = `${numContas} conta (s) - Total R$:${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" //limpa todos os campos
    frm.inValor.value =""
    frm.inDescricao.focus() //posiciona no campo inDescrição do form 
})
frm.addEventListener("reset", () => {
    frm.inDescricao.focus()
    resp1.innerText = ""
    resp2.innerText = ""
    resposta = ""
    numContas = 0
    valTotal = 0
})