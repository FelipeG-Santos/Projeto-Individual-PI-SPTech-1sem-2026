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

// torna possível que outros arquivos vejam esse arquivo:
module.exports = {
    cadastrar,
    listar
};