const lista = document.getElementById('ul_itens');
const input = document.getElementById('item');
const botao = document.getElementById('adiciona_item');
const nome_da_lista = document.getElementById('nome_da_lista');

const version = "3.3"
var todos;


function renderizar() {
    lista.innerHTML = '';
    for (todo of todos){
        var item = document.createElement('li');
        var link = document.createElement('button');
        var linkText = document.createTextNode('Excluir');
        var todoText = document.createTextNode(todo+' ');

        link.appendChild(linkText);
        link.setAttribute('class', 'excluir')
        
        var pos = todos.indexOf(todo);
        link.setAttribute('onclick', 'deleta_item('+pos+')');

        item.appendChild(todoText);
        item.appendChild(link);
        lista.appendChild(item);
    }
}

function adicionar_item(){
    var novo = input.value;
    if (novo != '') {
        todos.push(novo);
        input.value = '';
        renderizar();
        salva_lista();
    }
}

function deleta_item(posicao){
    todos.splice(posicao, 1);
    renderizar();
    salva_lista();
}

function salva_lista(){
    localStorage.setItem(`${version}.listas.${nome_da_lista.value}`, JSON.stringify(todos));
}

function mudar_lista() {
    todos = JSON.parse(localStorage.getItem(`${version}.listas.${nome_da_lista.value}`)) || -1;
    if (todos === -1){
        alert('A lista informada não existe.');
        botao.setAttribute('onclick', "alert('A lista informada não existe.')");
    } else {
        renderizar()
        botao.onclick = adicionar_item;
        alert(`Você abriu a lista ${nome_da_lista.value}.`);
    }

}

botao.onclick = adicionar_item;
document.getElementById('abrir_lista').onclick = mudar_lista;
