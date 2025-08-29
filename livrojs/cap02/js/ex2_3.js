// cri referencia ao form e aos elementos de resposta(pelo seu id)
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outresp1')
const resp2 = document.querySelector('#outresp2')
const resp3 = document.querySelector('#outresp3')

frm.addEventListener("submit", (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50
    const parcela = entrada / 12 

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `entrada de R$:${entrada.toFixed(2)}`
    resp3.innerText = `+12 de R$:${parcela.toFixed(2)}`

    e.preventDefault()
})