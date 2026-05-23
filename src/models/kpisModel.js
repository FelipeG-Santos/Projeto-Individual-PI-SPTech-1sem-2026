var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarMaisAvaliado() {

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


function buscarMaiorNota() {

    var instrucao = `
    SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score DESC LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);

};


function buscarMenorNota() {

    var instrucao = `
    SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);

};

module.exports = {
    listar,
    buscarMaisAvaliado,
    buscarMaiorNota,
    buscarMenorNota
};