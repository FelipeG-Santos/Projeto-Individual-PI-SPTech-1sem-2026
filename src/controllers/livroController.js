var livroModel = require("../models/livroModel");

function listar(req, res) {
    livroModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {

    var nome_livro = req.body.nome_livroServer;
    var nota_livro = req.body.nota_livroServer;
    var descricao = req.body.descricao_livroServer;

    if (nome_livro == undefined) {
        res.status(400).send("O nome do livro está indefinido!");
    } else if (nota_livro == undefined) {
        res.status(400).send("A nota do livro está indefinida!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição do livro está indefinida!");
    }else {

    livroModel.cadastrar(nome_livro, nota_livro, descricao)
    .then(function (resposta) {
        res.status(200).send("livro registrado com sucesso");
    }).catch(function (erro) {
        console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
        res.status(500).json(erro.sqlMessage);
    })
}
}

module.exports = {
    listar,
    cadastrar
}