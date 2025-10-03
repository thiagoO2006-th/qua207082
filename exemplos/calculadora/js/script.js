// funçao para adicionar um valor ao visor 
function adicionar(valor) {
    document.querySelector("#visor").value += valor
}
//funçao para limpar o visor
function limpar() {
    document.querySelector("#visor").value = ""
}
// funçao para apagar o ultimo caractere
function apagar() {
    const visor = document.querySelector("#visor")
    visor.value= visor.value.slice(0, -1)
}
// funçao para calcular o resultado
function calcular() {
    const visor = document.querySelector("#visor")
    try {
        // usar a funcion eval() para calcular o resultado
        visor.value = eval(visor.value)
    } catch (error) {
        visor.value = "Erro"
    }
}

function porcentagem () {
    calcular()
    const visor = document.querySelector("#visor")
    visor.value = Number(visor.value)/100
}

const botoes = document.querySelectorAll("button")
for (const botao of botoes) {
    botao.addEventListener("click", () =>{
        switch (botao.innerText) {
            case "C":
                limpar() 
                break;
            case "←":
                apagar() 
                break;
            case "%":
                porcentagem() 
                break;
            case "=":
                calcular() 
                break;
            default:
                adicionar(botao.innerText)
                break;
        }
    })
}