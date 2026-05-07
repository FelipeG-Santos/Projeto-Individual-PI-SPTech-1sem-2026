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
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}





// torna possível que outros arquivos vejam esse arquivo:
module.exports = {
    cadastrar,
    listar
};