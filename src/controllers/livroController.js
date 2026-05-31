

var livroModel = require("../models/livroModel");

function listar(req, res) {
    livroModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

// FUNÇÃO CADASTRAR LIVROS -----------------------------------------------------------------
function cadastrar(req, res) {

    var fk_livro = req.body.fk_livroServer;
    var nota_livro = req.body.nota_livroServer;
    var descricao = req.body.descricaoServer;
    var fk_usuario = req.body.fk_usuarioServer;

     if (nota_livro == undefined) {
        res.status(400).send("A nota do livro está indefinida!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição do livro está indefinida!");
    }else {

    livroModel.cadastrar(fk_livro, nota_livro, descricao, fk_usuario)
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


// gráfico de barras:
function buscarLivrosMaisAvaliados(req, res) {

    livroModel.buscarLivrosMaisAvaliados()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros mais avaliados");

        res.status(500).json(erro.sqlMessage);
    });
}


//gráfico de pizza:
function buscarLivrosLidosPorUsuario(req, res) {

    livroModel.buscarLivrosLidosPorUsuario()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros lidos por usuario");

        res.status(500).json(erro.sqlMessage);
    });
}

// ranking de melhores avaliações:
function buscarRanking(req, res) {

    livroModel.buscarRanking()
    .then(function(resultado) {

        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar livros lidos por usuario");

        res.status(500).json(erro.sqlMessage);
    });
}

// busca os livros pesquisados na página de "meus livros"
function buscarPesquisar(req, res) {

    // recebe o titulo enviado no fetch
    var titulo = req.query.titulo

    livroModel.buscarPesquisar(titulo)
    .then(function(resultado) {

        // caso encontre o livro pesquisado:
        res.status(200).json(resultado);

    }).catch(function(erro) {

        console.log(erro);
        console.log("Erro ao buscar últimas avaliações");
        res.status(500).json(erro.sqlMessage);
    });
};


module.exports = {
    listar,
    cadastrar,
    buscarLivrosMaisAvaliados,
    buscarLivrosLidosPorUsuario,
    buscarRanking,
    buscarPesquisar
}