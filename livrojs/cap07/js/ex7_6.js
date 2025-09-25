const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    // obter senha informada pelo usuario
    const senha = frm.inSenha.value
    //vetor com erros
    const erros = []
    // verificar se o tamanho da senha é invalida
    if(senha.length < 8 || senha.length > 15){
        erros.push("Não possui entre 8 e 15 caracteres")
    }
    // verificar se não possui número 
    if(senha.match(/[0-9]/g)==null){
        erros.push("Não possui números(no minimo 1)")
    }
    // verificar se não possui minusculas
    if(senha.match(/[a-z]/g)==null){
        erros.push("Não possui letras minusculas(no minimo 1)")
    }
    // verificar se possui letras maiusculas ou se possui apenas 1
    if(senha.match(/[A-Z]/g)==null || senha.match(/[A-Z]/g).length < 2){
        erros.push("Não possui letras maiusculas(no minimo 2)")
    }
    // verificar se não possui simbolos ou "_"
    if(senha.match(/[\w|_]/g)==null){
        erros.push("Não possui simbolos (no minimo 1)")
    }
    // se o vetor estiver vazio (significa que não foi encontrado erros)
    if(erros.length == 0){
        resp.innerText = "OK! Senha Válida"
    } else{
        // senão imprimir lista de erros 
        resp.innerText = "erro...\n"
        resp.innerText += erros.join("\n")
    }
    

})