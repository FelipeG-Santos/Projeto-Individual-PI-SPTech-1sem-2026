var express = require("express");
var router = express.Router();

// indo para a próxima etapa
var kpisController = require("../controllers/kpisController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /livros/listar
    kpisController.listar(req, res);
});

router.get("/maisAvaliados", function (req, res) {
    kpisController.buscarMaisAvaliado(req, res);
});

router.get("/MaiorNota", function (req, res) {
    kpisController.buscarMaiorNota(req, res);
});

router.get("/MenorNota", function (req, res) {
    kpisController.buscarMenorNota(req, res);
});

router.get("/Classificacao", function (req, res) {
    kpisController.buscarClassificacao(req, res);
});

router.get("/Completaram", function (req, res) {
    kpisController.buscarCompletaram(req, res);
});


module.exports = router;
