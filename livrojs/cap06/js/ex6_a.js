const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []


frm.btListar.addEventListener("click", () => {
    if (clubes.length == 0) {
        alert("Não há clubes na lista")
        return
    }
    // método reduce() concatena uma string, obtendo modelo e preço da 
    const lista = clubes.reduce((acumulador, clubes) =>
        acumulador + clubes.nome + ` - ${clubes} \n`, "")
    resp.innerText = `Lista dos clubes Cadastrados\n${"-".repeat(40)}\n${lista}`

})