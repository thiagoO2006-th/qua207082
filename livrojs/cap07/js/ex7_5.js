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
    // dividir o nome em itens de vetor, criado a cada ocorrencia do espaços 
    const parte = nome.split(" ")
    // vai concatenar letras
    let email = ""
    // obter nº  de itens do vetor pares
    const tam = parte.length-1
    // percorrer itens do vetor (exceto o último)
    for(let i = 0; i < tam; i++){
        
    // obtem a letra inicial de cada item
    email += parte[i].charAt(0)
}
    // concatenar as letras inicias com a última parte (sobrenome) e empresa
    email += parte[tam]+"@empresa.com.br"
    // exibir e-mail em minúsculo
    resp.innerText = email.toLocaleLowerCase()
})