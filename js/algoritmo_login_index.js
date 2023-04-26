/*A função loginSenha() é responsável por pegar o valor digitado pelo usuário
nos campos de login e senha e verificar se esses valores correspondem aos dados esperados.
Caso correspondam, o usuário é redirecionado para a página inicial (home.html).
Se não corresponderem, uma mensagem de alerta é exibida na tela.*/

function loginSenha() {
    var login = document.querySelector('#login').value; // Seleciona de onde vem a informação de acordo com a ID
    var senha = document.querySelector('#senha').value; // .value faz com que o valor digitado no campo seja utilizado
  
    if ((login === 'Jeanderson' && senha === '123') || (login === 'Tamyres' && senha === '12345')) {
      window.location.href = "./home.html";
    } else {
      alert('Usuário ou senha incorretos.\nTente novamente!');
    }
  }
  
/*O segundo bloco de código utiliza o método addEventListener() para adicionar um ouvinte de eventos ao campo de senha.
Esse ouvinte aguarda a entrada de uma tecla e verifica se a tecla pressionada é o Enter (código de tecla 13).
Se a tecla Enter for pressionada, a função loginSenha() é executada, permitindo que o usuário faça login
pressionando a tecla "Enter" em vez de clicar no botão "Entrar".*/

  document.querySelector('#senha').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      loginSenha();
    }
  });