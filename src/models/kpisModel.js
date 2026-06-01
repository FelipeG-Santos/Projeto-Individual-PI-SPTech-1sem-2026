var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// busca os livros mais avaliados ---------------------------------------------------------------------
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

// busca os livros com maiores notas ---------------------------------------------------------------------
function buscarMaiorNota() {

    var instrucao = `
   SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
   ROUND(
    (((select avg(nota_livro) 
    from avaliacao_livros) * 5)
    + 
    (avg(a.nota_livro) 
    * count(*)))
    /
    (5 + count(*)), 
    2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score DESC LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);
    return database.executar(instrucao);

};

// busca os livros com menores notas ---------------------------------------------------------------------
function buscarMenorNota() {

    var instrucao = `
    SELECT 
    l.nome_livro AS titulo,
    l.imagem_livro AS imagem,
    ROUND(
    (((select avg(nota_livro) 
    from avaliacao_livros) * 5)
    + 
    (avg(a.nota_livro) 
    * count(*)))
    /
    (5 + count(*)), 
    2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro, l.imagem_livro
ORDER BY score LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);
    return database.executar(instrucao);
};

// busca a classificação do usuário para completar a série ---------------------------------------------------------------------
function buscarClassificacao(id_usuario) {

    var instrucao = `
    SELECT
u.nome AS usuario,
COUNT(a.fk_usuario) AS qtd_lidos
FROM usuario u
JOIN avaliacao_livros a
ON u.id_usuario = a.fk_usuario
WHERE u.id_usuario = '${id_usuario}'
GROUP BY a.fk_usuario;
    `;

    console.log("executando a instrução sql: \n" + instrucao);
    return database.executar(instrucao);
};

// busca os usuários que completaram a série ---------------------------------------------------------------------
function buscarCompletaram() {

    var instrucao = `
   SELECT(
SELECT COUNT(*)
FROM usuario) AS total_usuarios,
COUNT(*) AS usuarios_completaram
FROM (
SELECT fk_usuario
FROM avaliacao_livros
GROUP BY fk_usuario
HAVING COUNT(fk_livro) = 20
) AS usuarios_completos;
    `;

    console.log("executando a instrução sql: \n" + instrucao);
    return database.executar(instrucao);
};

// busca os livros mais avaliados na última semana ---------------------------------------------------------------------
function buscarUltimaSemana() {

    var instrucao = `
    SELECT
l.nome_livro AS titulo,
l.imagem_livro AS imagem
FROM livros l
JOIN avaliacao_livros a
ON l.id_livro = a.fk_livro
WHERE a.data_avaliacao >= CURDATE() - INTERVAL 7 DAY
GROUP BY a.fk_livro, l.nome_livro, l.imagem_livro
ORDER BY COUNT(a.fk_livro) DESC LIMIT 1;
    `;

    console.log("executando a instrução sql: \n" + instrucao);
    return database.executar(instrucao);
};

module.exports = {
    listar,
    buscarMaisAvaliado,
    buscarMaiorNota,
    buscarMenorNota,
    buscarClassificacao,
    buscarCompletaram,
    buscarUltimaSemana
};