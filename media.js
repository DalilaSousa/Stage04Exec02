// Lista de estudantes
var estudantes = [
    { nome: "Emivaldo Júnior", notaProva1: 5, notaProva2: 8 },
    { nome: "Dalila", notaProva1: 8, notaProva2: 6 },
    { nome: "Maria Vitória", notaProva1: 7, notaProva2: 9 },
    { nome: "Pedro", notaProva1: 4, notaProva2: 8 },    
    // Adicione mais estudantes conforme necessário
];

// Função para calcular a média e verificar o sucesso
function verificarSucesso(estudante) {
    var media = (estudante.notaProva1 + estudante.notaProva2) / 2;
    if (media >= 7) {        
        alert(`Média do(a) aluno(a) ${estudante.nome} é: ${media} \nParabéns, ${estudante.nome}! Você foi aprovado(a) no concurso.`);
    } else {
        alert(`Média do(a) aluno(a) ${estudante.nome} é: ${media} \nNão foi dessa vez, ${estudante.nome}! Tente novamente.`);        
    }
}

// Iterar sobre a lista de estudantes e chamar a função para cada um
for (var i = 0; i < estudantes.length; i++) {
    verificarSucesso(estudantes[i]);
}
