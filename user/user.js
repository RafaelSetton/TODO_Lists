const admin_botao = document.getElementById('admin_button');
const admin_input = document.getElementById('admin_pass');

function admin() {
    if (admin_input.value === 'agateemeele') {
        window.location.replace('../admin/admin.html')
    } else {
        alert('Senha incorreta')
    }
}

admin_botao.onclick = admin;
