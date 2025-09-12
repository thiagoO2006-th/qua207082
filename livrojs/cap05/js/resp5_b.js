const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

  for (let i = 1; i < numero; i++) {
        let resposta = ""
        const numero = Number(frm.inNumero.value)
        for (let i = 1; i <= numero; i++) {
            resposta = resposta + `${chincilas} x ${i} = ${numero * i} \n`  
        }
        resp.innerText = resposta
    }
})