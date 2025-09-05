const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const velocidade = Number(frm.inVelocidade.value)
    const condutor = Number(frm.inCondutor.value)

    if(condutor <= velocidade){
        resp.innerText = `sem multa`
    }else if(condutor <= velocidade + 20){
        resp.innerText = `multa leve`
    }else{
        resp.innerText = `multa grave`
    }
        




})