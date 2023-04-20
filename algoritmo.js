function loginSenha() {
    var usuario = document.querySelector('#login');
    var senha = document.querySelector('#senha');

    if ((usuario.value === 'Jeanderson' && senha.value === '123') || (usuario.value === 'Tamyres' && senha.value === '12345')) {
        window.location.href = "pagina-secreta.html";
    } else {
        alert('Usuário ou senha incorretos.\nTente novamente!');
    }
  }
  