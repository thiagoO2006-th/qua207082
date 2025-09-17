const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1
const CHANCES = 6

frm.addEventListener("submit",  (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        respDica.innerText = `Parabens!! Números sorteado: ${sorteado}`
        frm.btSubmit.disabled = true
        frm.btNovo.className = "exibe"
    } else{
        if(erros.includes(numero)){ // se número existe no vetor erros
            alert(`Você já apostou o numero ${numero}. tente outro`)
        }else{
            erros.push(numero) // adiciona o número ao vetor
            const numErros = erros.length //obtém o tamanho do vetor
            const numChances = CHANCES - numErros // calcula nº chances
            // exibe nº erros, contudo do vetor e nº chances
            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances
            if(numChances == 0) {
                alert("Suas chances acabaram..")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Gamer Over!! Número Sorteado: ${sorteado}`
            } else{
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }

        }
    }
    frm.inNumero.value= ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click" , ()=>{
    location.reload() // recarrega 
    

})