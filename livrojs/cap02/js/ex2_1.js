// cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("keyup",(e)=>{
    const nome = frm.inNome.value // obtém o nome digitado no form
    resp.innerHTML = `Ola <i> ${nome}<i>` // exibe a resposta do programa
    e.preventDefault() //evitar envio do form
})