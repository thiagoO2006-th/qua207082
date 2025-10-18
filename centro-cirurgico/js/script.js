const frm = document.querySelector("form")
const divEl = document.querySelector("div")


document.addEventListener("DOMContentLoaded", () => {
    const paciente = []
    const nomeInput = document.getElementById("nomePaciente")
    const statusInput = document.getElementById("stutus")
    const inicioPrevistoInput = document.getElementById("inicioPrevisto")
    const inicioCirurgiaInput = document.getElementById("inicioCirurgia")
    const fimCirurgiaInput = document.getElementById("fimCirurgia")
    const saidaPrevistaInput = document.getElementById("saidaPrevista")
    const tabela = document.getElementById("TavelaPaciente")

    const btnNovo = document.getElementById("btnNovo")
    const btnGravar =  document.getElementById("btnGravar")
    const btnApagar = document.getElementById("btnApagar")

    let indiceSelecionado = -1

    // === Novo: limpar os campos ===
    btnNovo.addEventListener("click", ()=>{
        nomeInput.value = ""
        statusInput.value = "Pré-Operatório"
        inicioPrevistoInput.value = ""
        inicioCirurgiaInput.value = ""
        fimCirurgiaInput.value = ""
        saidaPrevistaInput.value = ""
        indiceSelecionado = -1
    })

    // ===GRAVAR: adiciona ou edita ===
    const novoPaciente = {
        nome: nomeInput.value,
        status: statusInput.value,
        inicioPrevisto: inicioCirurgiaInput.value,
        inicioCirurcia: inicioCirurgiaInput.value,
        fimCirurgia: fimCirurgiaInput.value,
        saidaPrevista: saidaPrevistaInput.value
    }

    if(!paciente.nome){
        alert("Digite o nome do paciente!")
        return
    }
    if(indiceSelecionado === -1){
        paciente.push(paciente)
    } else{
        paciente[indiceSelecionado] = paciente
    }

    atualizarTabela()
    btn.click
})

// === APAGAR: exclui paciente ===

btn.btnApagar.addEventListener("click", ()=>{
    if(indiceSelecionado === -1){
        alert("Selecione um paciente na tabela para excluir!")
        return
    }
    paciente.splice(indiceSelecionado, 1)
    atualizarTabela()
    btnNovo.click()
})

// === Atualizar tabela ===
function atualizarTabela(){
    tabela.innerHTML = ""
    pacientes.forEach((p, index)=>{
        const tr = document.createElement("tr")
        tr.innerHTML = '
        <td>${p.nome}</td>
        
        
        
        
        
        '
    })
}
