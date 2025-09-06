const frm = document.querySelector("form")
const resp = document.querySelector("h3")

const secreto = Math.round(Math.random()*100)

let palpites = 0
frm.addEventListener("submit", (e) => {
    e.preventDefault();

palpites = palpites + 1

const numero = Number(frm.inNumero.value)


if (numero == secreto){
    resp.innerText = `Parabéns, você acertou com ${palpites} Palpites`
} else if (numero > secreto){
    resp.innerText = `O número secreto é menor`
} else {
    resp.innerText = `O número secreto é maior`
} 
})