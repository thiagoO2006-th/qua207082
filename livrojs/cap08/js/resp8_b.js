const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    if (validarNome(nome) == false) {
        alert("Nome incomleto")
        return
    }
    const sobrenome = obterSobrenome(nome)
    const vogais = contarVogais(nome)
    resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`
})

function validarNome(nome) {
    return nome.match(/ /g) != null
}

function obterSobrenome() {
    const nomes = nomes.split(" ")
    return nomes [ nomes.length -1 ]. tolowerCase()
}   

function contarVogais() {
    const vogais = nome.match (/[aeiou]/g)
    return vogais.length.toString().padStart(2,"0")
}