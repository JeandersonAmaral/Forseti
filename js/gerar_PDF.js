// Função para gerar o PDF com os dados da eleição
function gerarPDF() {
  var candidatoVencedor = null;
  var maiorNumeroVotos = 0;

  // Encontra o candidato vencedor
  candidatos.forEach(function (candidato) {
    var numVotos = candidato.votos.length;

    if (numVotos > maiorNumeroVotos) {
      maiorNumeroVotos = numVotos;
      candidatoVencedor = candidato;
    } else if (numVotos === maiorNumeroVotos) {
      // Em caso de empate, verifica o desempate por idade
      if (!candidatoVencedor || candidato.idade > candidatoVencedor.idade) {
        candidatoVencedor = candidato;
      }
    }
  });

  // Cria o conteúdo do PDF
  var content = [];

  // Verifica se há um vencedor
  if (candidatoVencedor) {
    content.push('O vencedor(a) da eleição foi:');
    content.push('Nome: ' + candidatoVencedor.nome);
    content.push('Quantidade de Votos: ' + candidatoVencedor.votos.length);
    content.push('\n');
  } else {
    var candidatoMaisVelho = null;
    var maiorIdade = 0;

    candidatos.forEach(function (candidato) {
      if (candidato.idade > maiorIdade) {
        maiorIdade = candidato.idade;
        candidatoMaisVelho = candidato;
      }
    });

    content.push('Empate na Eleição:');
    content.push('Não foi possível determinar um vencedor com base nos critérios.');
    content.push('Considerou-se o candidato mais velho como vencedor por idade:');
    content.push('Nome: ' + candidatoMaisVelho.nome);
    content.push('Idade: ' + candidatoMaisVelho.idade);
    content.push('\n');
  }

  // Adiciona os nomes dos candidatos e a quantidade de votos
  content.push('Participantes e Votos:');
  candidatos.forEach(function (candidato) {
    content.push('Nome: ' + candidato.nome);
    content.push('Quantidade de Votos: ' + candidato.votos.length);
    content.push('\n');
  });

  // Adiciona a lista de matrículas votantes
  content.push('Lista de Matrículas Votantes:');
  var matriculas = Array.from(matriculasVotadas);
  content.push(matriculas.join(', '));

  // Cria o conteúdo final do PDF
  var pdfContent = content.join('\n');

  // Cria o objeto para gerar o PDF
  var docDefinition = { content: pdfContent };

  // Gera o PDF
  pdfMake.createPdf(docDefinition).download('resumo_eleicao.pdf');
}
