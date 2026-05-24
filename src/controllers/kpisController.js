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

function buscarClassificacao(req, res) {

    var id_usuario = req.query.id_usuario

    kpisModel.buscarClassificacao(id_usuario)
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar id para a classificação");

        res.status(500).json(erro.sqlMessage);
    });
};

function buscarCompletaram(req, res) {

    kpisModel.buscarCompletaram()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros mais avaliados");

        res.status(500).json(erro.sqlMessage);
    });
};

function buscarUltimaSemana(req, res) {

    kpisModel.buscarUltimaSemana()
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
   buscarMenorNota,
   buscarClassificacao,
   buscarCompletaram,
   buscarUltimaSemana
};