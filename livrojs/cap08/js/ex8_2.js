const frm = document.querySelector("form")
const Resp1 = document.querySelector("#outResp1")
const Resp2 = document.querySelector("#outResp2")
const Resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // obter o cantéudo dos formulário
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    // chamar a function classificarVeiculo e salver na variavel 
    const classificacao = classificarVeiculo(ano)
    // chamar a fuction calcularEntrada e salvar na variavel entrada
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada)/10
    // exibir respostas
    Resp1.innerText = modelo+" -"+classificacao
    Resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    Resp3.innerText = `Parcela R$: ${parcela.toFixed(2)} x 10`
})

// desenvolver a fuction classificarVeiculo
function classificarVeiculo(ano){
    const anoAtual = new Date().getFullYear()
    if(ano == anoAtual){
        return "Novo"
    } else if(ano >= Number(anoAtual)-2){
        return "Seminovo"
    } else {
        return "Usado"
    }
}
// desenvolver a fuction calcularEntrada
const calcularEntrada = (preco, classificacao) => {
    if(classificacao == "Novo"){
        return preco * 0.5
    } else {
        return preco * 0.3
    }
}