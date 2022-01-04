const botaoDeTarefa = document.getElementById("criar-tarefa");
const textoDeEntrada = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
const alvo = document.getElementsByClassName("item");
const botaoApagaTudo = document.getElementById("apaga-tudo");
let alvos = lista.children;
const apagaCheck = document.getElementById("remover-finalizados");
const salvarTudo = document.getElementById("salvar-tarefas");

botaoDeTarefa.addEventListener("click", addItem)
apagaCheck.addEventListener("click", apagaCheckF)
botaoApagaTudo.addEventListener("click", apagadasso)
salvarTudo.addEventListener("click", salvarTudoF)

function pegarDadosLocal() {
    let dadosAdd = localStorage.getItem("chave1")
    console.log(dadosAdd);
    if (dadosAdd !== null) {
        lista.innerHTML = dadosAdd;
    }
}
pegarDadosLocal();

function salvarTudoF() {
    let armazenar = lista.innerHTML;
    localStorage.setItem("chave1", armazenar);
    alert("Seus itens foram salvos com sucesso!")
}

function apagadasso() {
    lista.innerHTML = "";
    alert("Você acabou de apagar a lista completa, para voltar ao último salvamento da lista recarregue a página!");
}

function apagaCheckF() {
    const alvosCheck = document.getElementsByClassName("completed");
    while (alvosCheck.length > 0) alvosCheck[0].remove();
}


function addItem() {
    let itemDaLista = document.createElement("li");
    itemDaLista.className = "item";
    itemDaLista.innerHTML = textoDeEntrada.value;
    itemDaLista.addEventListener("click", alteraCor)
    itemDaLista.addEventListener("dblclick", riscadinho)
    textoDeEntrada.value = "";
    lista.appendChild(itemDaLista);
}


function alteraCor(event) {
    for(i=0; i < alvo.length; i+=1) {
    alvo[i].style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

function riscadinho(event) {
event.target.classList.toggle("completed")
}


