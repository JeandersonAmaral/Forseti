// Variável global para armazenar os candidatos
var candidatos = []; 


// Função para adicionar candidato
function adicionarCandidato() {
    var nome = document.getElementById("nome_candidato").value;
    var idade = document.getElementById("idade").value;
    var numero = document.getElementById("numero_candidato").value;
    var motivo = document.getElementById("motivo").value;
    var turma = document.getElementById("turma").value;

    // Verifica se todos os campos estão preenchidos
    if (nome && idade && numero) {
        var candidato = {
            nome: nome,
            idade: idade,
            numero: numero
        };

        candidatos.push(candidato);
        exibirCandidatos();
        limparCampos();
    }

    else {
        alert("Por favor, preencha todos os campos do candidato.");
    }
}


// Função para exibir os candidatos na lista
function exibirCandidatos() {
  var listaCandidatos = document.getElementById("lista_candidatos");
  listaCandidatos.innerHTML = ""; // Limpa a lista antes de exibir os candidatos

  candidatos.forEach(function(candidato) {
    var divCandidato = document.createElement("div");
    divCandidato.classList.add("candidato");

    divCandidato.innerHTML = `
      <br>
      <p>Nome: ${candidato.nome}</p>
      <p>Idade: ${candidato.idade}</p>
      <p>Número: ${candidato.numero}</p>
      <hr>`;

    listaCandidatos.appendChild(divCandidato); //Adiciona dentro da Div mãe listaCandidatos
  });
}


// Função para exibir motivo e turma

function exibirMotivo() {
  var divItensMotivoTurma = document.getElementById("itens_motivo_turma");
  var motivo = document.getElementById("motivo").value;
  var turma = document.getElementById("turma").value;

  divItensMotivoTurma.innerHTML = `
    <p>Motivo: ${motivo}</p>
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
}
