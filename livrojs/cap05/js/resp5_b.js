const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

  for (let i = 1; i <= Number(frm.inNumero.value); i++) {
    resp.innerText += `Chincila ${i} \n`
    }
})