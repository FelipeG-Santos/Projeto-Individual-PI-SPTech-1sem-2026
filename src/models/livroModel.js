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
         l.nome_livro AS titulo,
         COUNT(a.id_avaliacao_livros) AS quantidade_avaliacoes
            FROM livros l
            JOIN avaliacao_livros a
            ON l.id_livro = a.fk_livro
        GROUP BY l.nome_livro
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

//select dos melhores avaliados:
function buscarRanking() {

    var instrucao = `
    SELECT 
    l.nome_livro AS titulo,
    TRUNCATE(AVG(a.nota_livro), 2) AS media,
    COUNT(*) AS quantidade_avaliacoes,
    ROUND(
    ((COUNT(*) / (COUNT(*) + 5.0)) * AVG(a.nota_livro) +
            (5.0 / (COUNT(*) + 5.0)) *
            (SELECT AVG(a.nota_livro) FROM avaliacao_livros a)
        ), 2) AS score
FROM avaliacao_livros a
JOIN livros l
ON a.fk_livro = l.id_livro
GROUP BY l.nome_livro
ORDER BY score DESC LIMIT 5;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);
}


// comando de inserção dos dados no banco:
function cadastrar(fk_livro, nota_livro, descricao, fk_usuario) {
    var instrucao = `
        INSERT INTO avaliacao_livros (fk_livro, nota_livro, descricao, fk_usuario) VALUES 
        ('${fk_livro}', '${nota_livro}', '${descricao}', ${fk_usuario});
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

function buscarPesquisar(titulo) {

    var instrucao = `
    select
l.nome_livro as titulo,
l.imagem_livro as imagem,
u.nome as usuario,
a.nota_livro as nota,
a.descricao as descricao,
a.data_avaliacao
from livros l
join avaliacao_livros a
on l.id_livro = a.fk_livro
join usuario u
on a.fk_usuario = u.id_usuario
where l.nome_livro = '${titulo}'
order by a.data_avaliacao desc limit 3;
    `;

    console.log("executando a instrução sql: \n" + instrucao);

    return database.executar(instrucao);
};



// torna possível que outros arquivos vejam esse arquivo:
module.exports = {
    cadastrar,
    listar,
    buscarLivrosMaisAvaliados,
    buscarLivrosLidosPorUsuario,
    buscarRanking,
     buscarPesquisar
};