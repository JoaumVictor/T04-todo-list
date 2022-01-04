const botaoDeTarefa = document.getElementById("criar-tarefa");
const textoDeEntrada = document.getElementById("texto-tarefa");
const lista = document.getElementById("lista-tarefas");
const alvo = document.getElementsByClassName("item");

botaoDeTarefa.addEventListener("click", addItem)


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

















