var express = require("express");
var router = express.Router();

// indo para a próxima etapa
var kpisController = require("../controllers/kpisController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /livros/listar
    kpisController.listar(req, res);
});

router.get("/kpisDash", function (req, res) {
    kpisController.buscarKpis(req, res);
});

module.exports = router;
