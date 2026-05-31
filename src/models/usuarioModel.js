var database = require("../database/config")

// autentica os dados do usuário permitindo o login
function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoUsuario = `
        SELECT id_usuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoUsuario);
    return database.executar(instrucaoUsuario);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, estado, cidade, bairro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, estado, cidade, bairro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoUsuario = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoUsuario);
    return database.executar(instrucaoUsuario)

    .then(function (resultado) {
         console.log("RESULTADO INSERT USUARIO:", resultado);

            // pega o id do usuário criado e insere os dados da tabela endereço
            var idUsuario = resultado.insertId;

            var instrucaoEndereco = `
                INSERT INTO endereco (estado, cidade, bairro, fk_usuario)
                VALUES ('${estado}', '${cidade}', '${bairro}', ${idUsuario});`;
            return database.executar(instrucaoEndereco);
        });
        }

        function EmailsIguais(email) {
        
            var instrucao =  `SELECT email FROM usuario WHERE email = '${email}';`;
        
            console.log("executando a instrução sql: \n" + instrucao);
            return database.executar(instrucao);
        };

module.exports = {
    autenticar,
    cadastrar,
    EmailsIguais
};