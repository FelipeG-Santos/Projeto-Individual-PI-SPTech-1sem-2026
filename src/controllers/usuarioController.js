/*Validações do usuário referente ao cadastro e login:
autenticar,
    cadastrar */

var usuarioModel = require("../models/usuarioModel");

// autenticando no login: ----------------------------------------------------------
function autenticar(req, res) {
    // recebe as variáveis enviadas pela rota
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fk_usuario = req.body.fk_usuarioServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
        // a verificação é retornada através do then:
            .then( function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);

                    // caso encontre o email e a senha do usuário:
                    if (resultadoAutenticar.length == 1) {

                        // envia os dados encontrados no banco:
                        res.json({
                            id: resultadoAutenticar[0].id_usuario,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha,
                            fk_usuario: resultadoAutenticar[0].fk_usuario
                        });
                        // caso não encotre o email e a senha:
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// função para cadastrar o usuário: -------------------------------------------------
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está indefinido!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está indefinida!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, estado, cidade, bairro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

// verifica se o email já tem no banco: ------------------------------------------------
function EmailsIguais(req, res) {

    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    } else {

        usuarioModel.EmailsIguais(email)
            .then(
                function (resultadoEmail) {
                    console.log(`\nResultados encontrados: ${resultadoEmail.length}`);

                    if (resultadoEmail.length == 1) {

                        res.status(403).send("Email e/ou senha inválido(s)");

                    } else if (resultadoEmail.length == 0) {

                        return res.status(200).send("Email disponível");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    EmailsIguais
}