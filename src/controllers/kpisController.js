var kpisModel = require("../models/kpisModel");

function listar(req, res) {
    kpisModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarKpis(req, res) {

    kpisModel.buscarKpis()
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
   buscarKpis
};