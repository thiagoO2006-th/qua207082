const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let numerosDivisores = 0 // declara e inicializa contador
    for(let i = 1; i <= numero; i++) // percorre todos os possiveis divisores de numero
        if(numero % i == 0 ){ // verifica se i (1,2,3...) é divisor do numero 
            numerosDivisores++ // se é, incrementa contador
        }
        if(numerosDivisores == 2){
            resp.innerText = `${numero} é primo`
        } else{
            resp.innerText = `${numero} Não é primo`
        }
})