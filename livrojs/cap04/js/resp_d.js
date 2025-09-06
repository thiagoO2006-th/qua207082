const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const a = Number(frm.inA.value)
    const b = Number(frm.inB.value)
    const c = Number(frm.inC.value)
    

    if (a > b+c || b > a+c || c > a+b){
        resp1.innerText = `não forma um triângulo`
        return
    }
    if (a == b && a == c){
        resp1.innerText = `triângulo equilátero`
    } else if ( a != b && a != c && b != c){
        resp1.innerText = `triângulo escaleno`
    } else {
        resp1.innerText = `triângulo isósceles`
    }

})