function loginSenha() {
    var login = document.querySelector('#login').value;
    var senha = document.querySelector('#senha').value;

    if ((login === 'Jeanderson' && senha === '123') || (login === 'Tamyres' && senha === '12345')) {
        window.location.href = "./teste.html";
    } else {
        alert('Usuário ou senha incorretos.\nTente novamente!');
    }
}

  
