var express = require("express");
var router = express.Router();

// indo para a próxima etapa
var livroController = require("../controllers/livroController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /livros/cadastrar
    livroController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /livros/listar
    livroController.listar(req, res);
});


// rota para gerar os gráficos:
router.get("/ultimos/:idLivros", function (req, res) {
    livroController.buscarUltimosLivros(req, res);
});

router.get("/tempo-real/:idLivros", function (req, res) {
    livroController.buscarLivrosEmTempoReal(req, res);
})

module.exports = router;