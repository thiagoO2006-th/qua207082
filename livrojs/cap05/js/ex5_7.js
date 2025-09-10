const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNumero.value);
    let estrelas = "" // varialvel que irá concatenar as estrelas/traços

    for(let i = 1; i <= numero; i++) {
        if (i %2 == 1){
            estrelas += "*" // na posiçao impar do i

        } else {
            estrelas += "-" // na posiçao par do i
        }
        
    }
    resp.innerText = estrelas;
})


