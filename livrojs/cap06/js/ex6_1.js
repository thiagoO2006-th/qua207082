const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inPaciente.value
    pacientes.push(nome)
    let lista = ""
    // for "tradicional" (inicia em 0, enquanto menor que tamanho do vetor)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}.${pacientes[i]}\n`
    }
    respLista.innerText = lista // exibe a lista de pacientes na página
    frm.inPaciente.valeu = "" // linha conteúdo do campo do form
    frm.inPaciente.focus() // posiciona o curso no campo
})

frm.btUrgencia.addEventListener("click", () => {
    // verificar se as validaçoes do form estao ok
    // no caso,paciente is required
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido com urgência")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome) // adiciona paciente no inicio do vetor
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()

})

frm.btAtender.addEventListener("click", () =>{
// se o tamanho do vetor = 0 
if(pacientes.length == 0){
    alert("Não há pacientes na lista de espera")
    frm.inPaciente.focus()
    return
}
const atender = pacientes.shift()
respNome.innerText = atender
let lista = ""
pacientes.forEach((paciente,i)=>(lista += `${i+1}.${paciente}\n`))
respLista.innerText = lista

})