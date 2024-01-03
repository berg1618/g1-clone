document.getElementById('usuario').addEventListener('input', function() {
    validarCampoVazio(this, document.getElementById('userLabel'));
});

document.getElementById('senha').addEventListener('input', function() {
    validarCampoVazio(this, document.getElementById('senhaLabel'));
});

function validarCampoVazio(campo, label) {
    if (campo.value.trim() === '') {
        label.style.color = 'red';
    } else {
        label.style.color = '#4038a0';
    }
}

function entrar() {
    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');

    if (usuario.value.trim() === '' || senha.value.trim() === '') {
        document.getElementById('msgError').style.display = 'block';
        document.getElementById('msgError').textContent = 'Por favor, preencha todos os campos.';
    } else {
        document.getElementById('msgError').style.display = 'none';
        
    }
}

document.querySelector('.fa-eye').addEventListener('click', function() {
    var senha = document.getElementById('senha');
    if (senha.type === 'password') {
        senha.type = 'text';
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        senha.type = 'password';
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});