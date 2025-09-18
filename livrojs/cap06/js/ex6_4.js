const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const crianças = [] 

criancas.push({nome: "Lucas", idade: 4})
criancas.push({nome: "Ana", idade: 3})
criancas.push({nome: "Bianca", idade: 6})
criancas.push({nome: "Pedro", idade: 6})
criancas.push({nome: "Joao", idade: 4})
criancas.push({nome: "Maria", idade: 4})
criancas.push({nome: "Juliana", idade: 3})
criancas.push({nome: "cátia", idade: 6})

frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há criancas na lista")
        return
    }
    // método reduce() concatena uma string, obtendo modelo e preço da 
    const lista = criancas.reduce((acumulador, crianca) =>
        acumulador + criancas.nome + ` - ${criancas.idade} anos\n`, "")
    resp.innerText = `Lista dos criancas Cadastrados\n${"-".repeat(40)}\n${lista}`

})
//dispara o evento de click em btListar (equivale um click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    carros.push({ nome, idade }) //adiciona dados ao vetor de objetos
    // limar os campos do form
    frm.inNome.value = ""
    frm.inIdade.value = ""
    frm.inNome.focus()
    // atualiza a lista dos carros na tela 
    frm.btListar.dispatchEvent(new Event("click"))
})