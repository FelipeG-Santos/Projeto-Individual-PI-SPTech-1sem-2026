var kpisModel = require("../models/kpisModel");

function listar(req, res) {
    kpisModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarMaisAvaliado(req, res) {

    kpisModel.buscarMaisAvaliado()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros mais avaliados");

        res.status(500).json(erro.sqlMessage);
    });
};

function buscarMaiorNota(req, res) {

    kpisModel.buscarMaiorNota()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros mais avaliados");

        res.status(500).json(erro.sqlMessage);
    });
};

function buscarMenorNota(req, res) {

    kpisModel.buscarMenorNota()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros mais avaliados");

        res.status(500).json(erro.sqlMessage);
    });
};


module.exports = {
    listar,
   buscarMaisAvaliado,
   buscarMaiorNota,
   buscarMenorNota
};