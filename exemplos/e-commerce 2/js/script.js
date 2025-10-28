const original = document.querySelector(".produto")
const produtos = document.querySelector(".produtos")
const divCarrinho = document.querySelector(".carrinho")
produtos.innerHTML = ""

for (const p of lsProduto) {
    const clone = original.cloneNode(true)
    clone.querySelector(".nome").innerText = p.nome
    clone.querySelector("img").src = p.img
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2).toString().replace(".", ",")}`
    produtos.appendChild(clone)

}

document.querySelectorAll(".produto").forEach((p, i) => {
    p.addEventListener("click", () => {
        p.classList.toggle("marcado")
        if (lsProduto[i].qt == undefined) {
            lsProduto[i].qt = 1
        } else {
            delete lsProduto[i].qt
        }
        atualizarQt()

    })

})

function atualizarQt() {
    const qt = lsProduto.filter(p => p.qt == 1)
    document.querySelector("#qt").innerText =  qt.length > 0 ? qt.length : ""
   
}

document.querySelector("#btTenis").addEventListener("click", carrinho)

function carrinho() {
    const qtText = document.querySelector("#qt").innerText
    if (qtText == "") {
        alert("Necessário selecionar 1 item.")
        return
    }
    produtos.classList.toggle("ocultar")
    divCarrinho.classList.toggle("ocultar")
    atualizarTb()
}

let pedido
function atualizarTb() {
    pedido = ""
    let total = 0
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    for (let i = 0; i < lsProduto.length; i++) {
        const p = lsProduto[i]
        if (p.qt > 0) {
            tbody.innerHTML += `<tr>
            <td>${p.nome}</td>
            <td>${p.qt}</td>
            <td>${p.valor.toFixed(2)}</td>
            <td>${(p.qt * p.valor).toFixed(2)}</td>
            <td onclick="add(${i}, 1)">+</td>
            <td onclick="add(${i},-1)">-</td>
            </tr>
            `
            total += p.qt * p.valor
            pedido += `${p.nome} (${p.qt}x${p.valor} = ${p.valor*p.qt})\n`
        }
    }
    tbody.innerHTML += `
    <tr>
        <td colspan="3">Valor Final</td>
        <td colspan="3">${total.toFixed(2)}</td>
    </tr>
    `
    pedido += `Total = ${total.toFixed(2)}\n`
}

function add(i, valor) {
    lsProduto[i].qt += valor
    atualizarTb()
    if (lsProduto[i].qt == 0) {
        document.querySelectorAll(".produto")[i].dispatchEvent(new Event("click"))
    }
    const qt = lsProduto.filter(p => p.qt >= 1)
    if (qt.length == 0) {
        produtos.classList.toggle("ocultar")
        divCarrinho.classList.toggle("ocultar")
    }
}
const frm = document.querySelector("form")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const nome = frm.inNome.value
    let msg = "Olá, Desejo fazer o seguinte pedido!📝\n"
    msg += pedido
    msg += `Att: ${nome}`
    if(confirm("Deseja enviar essa mensagem?\n"+msg)){
        msg = encodeURI(msg)
        const link = `https://api.whatsapp.com/send?phone=5561996629300&text=${msg}`
        window.open(link, "_blanck")
    
    }
    })