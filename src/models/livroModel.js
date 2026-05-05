var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM avaliacao_livros;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome_livro, nota_livro, descricao) {
    var instrucao = `
        INSERT INTO avaliacao_livros (nome_livro, nota_livro, descricao) VALUES 
        ('${nome_livro}', '${nota_livro}', '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};