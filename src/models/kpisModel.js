var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarKpis() {

    var instrucao = `
    SELECT 
         l.nome_livro AS titulo,
         l.imagem_livro AS imagem
            FROM livros l
            JOIN avaliacao_livros a
            ON l.id_livro = a.fk_livro
    GROUP BY a.fk_livro
    ORDER BY COUNT(a.fk_livro) DESC LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);

};

module.exports = {
    listar,
    buscarKpis
};