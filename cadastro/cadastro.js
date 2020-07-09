const botao = document.getElementById('cadastra')
const username = document.getElementById('usuario')
const senha = document.getElementById('senha')
const confirma_senha = document.getElementById('confirma_senha')
const login = document.getElementById('login')

function verificacao(){
    usuario_valido = localStorage.getItem('V3.users.'+username.value) || false
    console.log(usuario_valido)
    if (username.value === '' || senha.value === ''){
        alert('Por Favor, preencha todos os campos.')
    } else if (usuario_valido !== false){
        alert('Este nome de usuário já está em uso.')
    } else if (confirma_senha.value !== senha.value){
        alert('As senhas nao são iguais.')
    } else {
        localStorage.setItem('V3.users.'+username.value, senha.value)
        console.log('Usuário: '+username.value+' Senha: '+senha.value+' cadastrado.')
        alert('Cadastro efetuado.')
        username.value = ''
        senha.value = ''
        confirma_senha.value = ''
    } 
}

login.setAttribute('onclick', "window.location.replace('../login/login.html')")
botao.onclick = verificacao