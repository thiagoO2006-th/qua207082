const frm = document.querySelector("form")
const resp = document.querySelector("Pre")
const clubes = []

clubes[0]= "Flamengo"
clubes[1]= "Palmeiras" 
clubes[2]= "vasco"
clubes[3]= "Gremio"
clubes[4]= "Internacional"
clubes[5]= "Cuiaba"
clubes[6]= "Mirassol"
clubes[7]= "ABC"

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const clube = frm.inClube.value
    clubes.push(clube) //adiciona dados ao vetor de objetos
    frm.btListar.dispatchEvent(new Event("click"))    
    frm.inClube.value = ""
})

frm.btListar.addEventListener("click", () => {
    
    resp.innerText = ""
    for(const clube of clubes) {
        resp.innerText += `${clube}\n`
    }
})


frm.btListar.dispatchEvent(new Event("click"))

frm.btTabela.addEventListener("click", () =>{
    if(clubes.length%2 == 1) {
        alert("Deve ser uma quantidade par de clubes")
    return
    }
    resp.innerText = ""
    for(let i= 0; i < clubes.length/2; i++){
        resp.innerText += `${clubes[i]} x ${clubes[clubes.length -i-1]}\n`
    }
})