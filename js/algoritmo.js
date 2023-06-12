// Variáveis globais para armazenar os candidatos
var candidatos = []; // Matriz
var matriculasVotadas = new Set(); // Conjunto



//Função de login
function loginSenha() {
  var login = document.getElementById('login').value; // Seleciona de onde vem a informação de acordo com a ID
  var senha = document.getElementById('senha').value; // .value faz com que o valor digitado no campo seja utilizado

  if ((login === 'Jeanderson' && senha === '123') || (login === 'Tamyres' && senha === '12345')) {
    window.location.href = "./config.html";

  } else {
    alert('Usuário ou senha incorretos.\nTente novamente!');
  }
}



// Função para adicionar um candidato
function adicionarCandidato() {
  var nome = document.getElementById("nome_candidato").value;
  var idade = document.getElementById("idade").value;
  var numero = document.getElementById("numero_candidato").value;

  // Verifica se todos os campos estão preenchidos
  if (nome && idade && numero) {
    var candidato = {
      nome: nome,
      idade: idade,     // Objeto
      numero: numero,
      votos: [] // Armazena os votos recebidos
    };

    candidatos.push(candidato);
    exibirCandidatos();
    limparCampos();
  } else {
    alert("Por favor, preencha todos os campos do candidato.");
  }
}



// Função para exibir os candidatos na lista
function exibirCandidatos() {
  var listaCandidatos = document.getElementById("lista_candidatos");
  listaCandidatos.innerHTML = ""; // Limpa a lista antes de exibir os candidatos

  candidatos.forEach(function (candidato) {
    var divCandidato = document.createElement("div");
    divCandidato.classList.add("candidato");

    divCandidato.innerHTML = `
          <br>
          <p>Nome: ${candidato.nome}</p>
          <p>Idade: ${candidato.idade}</p>
          <p>Número: ${candidato.numero}</p>
          <hr>`;

    listaCandidatos.appendChild(divCandidato); // Adiciona dentro da Div mãe listaCandidatos
  });
}



// Função para exibir motivo e turma
function exibirMotivo() {
  var divItensMotivoTurma = document.getElementById("itens_motivo_turma");
  var motivo = document.getElementById("motivo").value;
  var turma = document.getElementById("turma").value;

  divItensMotivoTurma.innerHTML =
    `<p>Motivo: ${motivo}</p>
        <p>Turma: ${turma}</p>
        <hr>`;
}



// Função para limpar os campos do candidato após adicionar
function limparCampos() {
  document.getElementById("nome_candidato").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("numero_candidato").value = "";
  document.getElementById("motivo").value = "";
  document.getElementById("turma").value = "";
  document.getElementById("matricula").value = "";
  document.getElementById("numero_candidato_vota").value = "";
}



// Função para esconder as divs de cadastro de candidatos
function esconderDivs() {
  var parteCima = document.getElementById("parte_cima");
  var janela1 = document.getElementById("janela_1");
  var iniciar = document.getElementById("iniciar");

  iniciar.style.display = "none";
  parteCima.style.display = "none";
  janela1.style.display = "none";
  mostrarDiv()
}



// Função para emostrar divs ocultas
function mostrarDiv() {
  var janela3 = document.getElementById("janela_3");
  janela3.style.display = "block";
}



// Função para realizar votos
function realizarVoto() {
  var matricula = parseInt(document.getElementById('matricula').value);

  if (matricula === 0) {
      resultado();
      return;
  }

  var numeroCandidatoVota = document.getElementById('numero_candidato_vota').value; //Número digitado ao votar
  // Encontra o candidato com base no número digitado
  var candidatoVotado = candidatos.find(function (candidato) {
    return candidato.numero === numeroCandidatoVota;
  });

  if (candidatoVotado) {
    // Verifica se o votante já registrou seu voto
    if (matriculasVotadas.has(matricula)) {
      alert("Votante já registrou seu voto. Por favor, informe uma matrícula válida.");
      return; 
    }

    // Adiciona o voto ao candidato
    candidatoVotado.votos.push(matricula);

    matriculasVotadas.add(matricula);

    alert("Voto registrado com sucesso!");
    limparCampos();

  } else if (numeroCandidatoVota.trim() !== '') { // Verifica se o número de candidato não está vazio
    alert("Número de candidato inválido. Por favor, informe um número válido.");
    limparCampos();
  }
}



// Função para exibir os resultados
function resultado() {
  var maiorNumeroVotos = 0;
  var candidatoVencedor = null;

  candidatos.forEach(function (candidato) {
    var numVotos = candidato.votos.length;

    if (numVotos > maiorNumeroVotos) {
      maiorNumeroVotos = numVotos;
      candidatoVencedor = candidato;

    } else if (numVotos === maiorNumeroVotos) {
      candidatoVencedor = null; // Define como nulo em caso de empate
    }
  });

  var janela4 = document.getElementById("janela_4");
  var resultadoDiv = document.getElementById("resultado_votos");

  if (candidatoVencedor) {
    resultadoDiv.innerHTML =
      `<p>O candidato vencedor é:</p>
      <p>${candidatoVencedor.nome}</p>
      <p>Com um total de: ${maiorNumeroVotos} votos!</p>`;

    resultadoDiv.style.display = "block";
    janela4.style.display = "block";

  } else {
    desempatePorIdade();
  }
}



// Função para desempate
function desempatePorIdade() {
  var maiorIdade = 0;
  var candidatoVencedor = null;

  candidatos.forEach(function (candidato) {
    if (candidato.idade > maiorIdade) {
      maiorIdade = candidato.idade;
      candidatoVencedor = candidato;
    }
  });

  if (candidatoVencedor) {
    var janela4 = document.getElementById("janela_4");
    var resultadoDiv = document.getElementById("resultado_votos");
    resultadoDiv.innerHTML +=
      `<p>Temos um empate, nesse caso o candidato mais velho é declarado vencedor:</p>
      <br>
      <p>Nome: ${candidatoVencedor.nome}</p>
      <p>Idade: ${candidatoVencedor.idade}</p>`;

    resultadoDiv.style.display = "block";
    janela4.style.display = "block";
  }
}

