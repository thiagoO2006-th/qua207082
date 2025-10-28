const original = document.querySelector(".produto");
const produtos = document.querySelector(".produtos");
const divCarrinho = document.querySelector(".carrinho");
produtos.innerHTML = "";

for (const p of lsProduto) {
  const clone = original.cloneNode(true);
  clone.querySelector(".nome").innerText = p.nome;
  clone.querySelector("img").src = p.img;
  clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2).toString().replace(".", ",")}`;
  produtos.appendChild(clone);
}

document.querySelectorAll(".produto").forEach((p, i) => {
  p.addEventListener("click", () => {
    p.classList.toggle("marcado");

    // Toggle seleção: se não existe qt, cria com 1, senão remove
    if (lsProduto[i].qt === undefined) {
      lsProduto[i].qt = 1;
    } else {
      delete lsProduto[i].qt;
    }

    atualizarQt();
  });
});

function atualizarQt() {
  // Conta todos os produtos que tenham qt >= 1 (ou seja, selecionados)
  const qt = lsProduto.filter(p => p.qt >= 1);
  document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : "";
}

document.querySelector("#btTenis").addEventListener("click", carrinho);

function carrinho() {
  const qtText = document.querySelector("#qt").innerText;
  if (qtText === "") {
    alert("Necessário selecionar 1 item.");
    return;
  }

  // Se o carrinho estiver oculto, mostrar; senão esconder
  const produtosEl = document.querySelector(".produtos");
  if (divCarrinho.classList.contains("ocultar")) {
    produtosEl.classList.add("ocultar");
    divCarrinho.classList.remove("ocultar");
  } else {
    produtosEl.classList.remove("ocultar");
    divCarrinho.classList.add("ocultar");
  }

  atualizarTb();
}

let pedido = "";

function atualizarTb() {
  pedido = "";
  let total = 0;
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i = 0; i < lsProduto.length; i++) {
    const p = lsProduto[i];
    if (p.qt > 0) {
      tbody.innerHTML += `<tr>
        <td>${p.nome}</td>
        <td>${p.qt}</td>
        <td>${p.valor.toFixed(2)}</td>
        <td>${(p.qt * p.valor).toFixed(2)}</td>
        <td onclick="add(${i}, 1)" style="cursor:pointer">+</td>
        <td onclick="add(${i}, -1)" style="cursor:pointer">-</td>
      </tr>`;
      total += p.qt * p.valor;
      pedido += `${p.nome} (${p.qt}x${p.valor} = ${p.valor * p.qt})\n`;
    }
  }

  tbody.innerHTML += `
    <tr>
      <td colspan="3">Valor Final</td>
      <td colspan="3">${total.toFixed(2)}</td>
    </tr>
  `;

  pedido += `Total = ${total.toFixed(2)}\n`;
}

function add(i, valor) {
  // protege caso qt esteja undefined
  if (lsProduto[i].qt === undefined) lsProduto[i].qt = 0;
  lsProduto[i].qt += valor;

  // se chegar a zero, remove a seleção e atualiza o botão do produto
  if (lsProduto[i].qt <= 0) {
    delete lsProduto[i].qt;
    // dispara o clique do produto para remover a classe 'marcado'
    const produtoEl = document.querySelectorAll(".produto")[i];
    if (produtoEl) produtoEl.classList.remove("marcado");
  }

  atualizarTb();

  // se não há mais itens no carrinho, fechar o carrinho e mostrar produtos
  const qt = lsProduto.filter(p => p.qt >= 1);
  if (qt.length === 0) {
    document.querySelector(".produtos").classList.remove("ocultar");
    divCarrinho.classList.add("ocultar");
    document.querySelector("#qt").innerText = "";
  } else {
    atualizarQt();
  }
}

const frm = document.querySelector("form");
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  // pegar o input corretamente pelo id (ou usar frm.inNome se existir name)
  const nome = document.getElementById("inNome").value.trim();
  let msg = "Olá, Desejo fazer o seguinte pedido!📝\n";
  msg += pedido;
  msg += `Att: ${nome}`;

  if (confirm("Deseja enviar essa mensagem?\n" + msg)) {
    const encoded = encodeURIComponent(msg);
    const link = `https://api.whatsapp.com/send?phone=5561996629300&text=${encoded}`;
    window.open(link, "_blank");
  }
});
