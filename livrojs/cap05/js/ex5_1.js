const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    for (let i = 1; i < 10; i++) {
        let resposta = ""
        const numero = Number(frm.inNumero.value)
        for (let i = 1; i <= 10; i++) {
            resposta = resposta + `${numero} x ${i} = ${numero * i} \n`  
        }
        resp.innerText = resposta
    }
})
