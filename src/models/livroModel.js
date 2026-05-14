// criação do caminho para ir para a próxima etapa:
var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// select dos livros mais avaliados:
function buscarLivrosMaisAvaliados() {

    var instrucao = `
    SELECT 
            nome_livro,
            COUNT(id_avaliacao_livros) AS quantidade_avaliacoes
        FROM avaliacao_livros
        GROUP BY nome_livro
        ORDER BY quantidade_avaliacoes DESC;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);

}


// select dos livros lidos por usuario:
function buscarLivrosLidosPorUsuario() {

    var instrucao = `
    SELECT
          COUNT(qtd_livros_lidos_por_usuario) AS qtd_de_usuarios,
          qtd_livros_lidos_por_usuario AS qtd_livros_lidos
          FROM (
             SELECT
             COUNT(fk_usuario) AS qtd_livros_lidos_por_usuario
             FROM avaliacao_livros
             GROUP BY fk_usuario
         ) AS quantidade_por_usuario
         GROUP BY qtd_livros_lidos_por_usuario;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

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
    listar,
    buscarLivrosMaisAvaliados,
    buscarLivrosLidosPorUsuario
};