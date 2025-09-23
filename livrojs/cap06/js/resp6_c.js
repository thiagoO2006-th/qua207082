const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []
candidatos.push({ nome: "Andre", acertos: 35 })
candidatos.push({ nome: "Bianca", acertos: 29 })
candidatos.push({ nome: "Carlos", acertos: 27 })
candidatos.push({ nome: "Débora", acertos: 33 })
candidatos.push({ nome: "Eduardo", acertos: 36 })
candidatos.push({ nome: "Fernanda", acertos: 28 })
candidatos.push({ nome: "Giovana", acertos: 31 })

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Lista de candidatos vazia!")
        React
    }
    resp.innerText = ""
    for (const candidato of candidatos) {
        const { nome, acertos } = candidato
        resp.innerText += `${nome} - ${acertos} acertos\n`
    }

})
frm.btListar.dispatchEvent(new Event("click"))

frm.btAprovados.addEventListener("click", () => {
    const numAcertos = Number(prompt("Numeros de Acertos para Aprovação?"))
    const aprovados = candidatos.filter(candidato => candidato.acertos >= numAcertos)
    if(aprovados.length == 0){
        alert("Numnhum aprovado com essa quantidade")
        return
    }
    aprovados.sort((a,b) => b.acertos - a.acertos)
    resp.innerText = ""
      for (const candidato of candidatos) {
        const { nome, acertos } = candidato
        resp.innerText += `${nome} - ${acertos} acertos\n`
    }
})
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inCandidato.value
   const acertos = Number(frm.inAcertos.value)
   candidatos.push({nome,acertos}) // adiciona dados ao vetor de objeto
   //limpar os campos do form
   frm.inCandidato.value = ""
   frm.inAcertos.value = ""
    frm.inCandidato.focus ()
    // atualiza a lista todos os candidatos na tela
    frm.btListar.dispatchEvent(new Event("click"))
})