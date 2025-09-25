const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // obter o nome informado e retirar espaços em branco di inicio e final da string
    const nome = frm.inNome.value.trim()
    // se o nome não (!) possuir espaço alert para inserir nome completo
    if(nome.includes(" ") == false){
        alert("Informe o nome completo...")
        return
    }
    // gravar a posição do primeiro espaço
    const priEspaco = nome.indexOf(" ")
    // gravar a posiçao do ultimo espaço 
    const ultEspaco = nome.lastIndexOf(" ")
    // copia nome e sobrenome usando os parametros do subtr()
    const cracha = nome.substr(0,priEspaco)+nome.substr(ultEspaco)
    // exibir resposta
    resp.innerText = cracha
})