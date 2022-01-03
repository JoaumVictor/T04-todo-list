let botaoDeTarefa = document.getElementById("criar-tarefa");
let textoDeEntrada = document.getElementById("texto-tarefa");
let lista = document.getElementById("lista-tarefas");

botaoDeTarefa.addEventListener("click", addItem)


function addItem() {
    let itemDaLista = document.createElement("li");
    itemDaLista.className = "item";
    itemDaLista.innerHTML = textoDeEntrada.value;
    textoDeEntrada.value = "";
    lista.appendChild(itemDaLista);
}


function alteraCor() {
itemAlvo.style.backgroundcolor = "rgb(128,128,128)";
}
















