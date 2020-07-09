const botao_cadastro = document.getElementById('cadastro');

function adicionar_lista() {
    if (nome_da_lista.value != ''){
        localStorage.setItem('V3.listas.'+nome_da_lista.value, JSON.stringify([]));
        alert('Lista '+nome_da_lista.value+' criada com sucesso!');
        mudar_lista();
    }
}

function excluir_lista() {
    localStorage.removeItem('V3.listas.'+nome_da_lista.value);
    todos = [];
    nome_da_lista.value = ''
    renderizar();
}

document.getElementById('adicionar_lista').onclick = adicionar_lista;
document.getElementById('excluir_lista').onclick = excluir_lista;
botao_cadastro.setAttribute('onclick', "window.location.replace('../cadastro/cadastro.html')");