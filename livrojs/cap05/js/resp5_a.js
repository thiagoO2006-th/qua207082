const frm = document.querySelector("form")
const resp = document.querySelector("h3")

addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    const fruta =  frm.inFruta.value
    let respostas = ""
    for (let i = 1; i < num; i++){
       respostas = respostas + fruta + "*" 
    }
    
    resp.innerText = respostas + fruta 
 
})

