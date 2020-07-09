const botao = document.getElementById('login')
const username = document.getElementById('usuario')
const senha = document.getElementById('senha')

function verificacao(){
    senha_certa = localStorage.getItem('V3.users.'+username.value) || ''
    if (username.value === '' || senha.value === ''){
        alert('Por Favor, preencha todos os campos.')
    } else if (senha_certa === ''){
        alert('O nome de usuário informado não está cadastrado.')
    } else if (senha_certa === senha.value){
        window.location.replace("../user/user.html")
    } else {
        alert('Senha incorreta.')
    }
}

botao.onclick = verificacao