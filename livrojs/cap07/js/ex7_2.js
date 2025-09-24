const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) =>{
e.preventDefault()
// conteúdo do campo em maiusculas
    const palavra = frm.inFruta.value.toUpperCase()
// limpa a resposta
    resp.innerText = ""
// percorre todos os caracteres da palavra 
    for (const letra of palavra) {
        if(letra == palavra.charAt(0)){ // se letra igual a letra inicial da string
            resp.innerText += letra
        } else {// senão coloca o _
            resp.innerText += "_"
        }
    }
    // preencher com "*", conforme o tamanho
    frm.inFruta.value = "*".repeat(palavra.length)
})