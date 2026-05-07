// criação do caminho para ir para a próxima etapa:
var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// comando de inserção dos dados no banco:
function cadastrar(nome_livro, nota_livro, descricao, fk_usuario) {
    var instrucao = `
        INSERT INTO avaliacao_livros (nome_livro, nota_livro, descricao, fk_usuario) VALUES 
        ('${nome_livro}', '${nota_livro}', '${descricao}', ${fk_usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// funções para a obtenção dos dados para os gráficos:
function buscarUltimosLivros(idLivros, limite_linhas) {

// VER SELECTS PARA GERAR OS GRÁFICOS!!! 
    var instrucaoSql = `SELECT 
        nome_livro as livro,
nota_livro as nota
from avaliacao_livros`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarLivrosEmTempoReal(idLivros) {

    var instrucaoSql = `SELECT 
        nome_livro as livro,
nota_livro as nota
from avaliacao_livros 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





// torna possível que outros arquivos vejam esse arquivo:
module.exports = {
    cadastrar,
    listar
};