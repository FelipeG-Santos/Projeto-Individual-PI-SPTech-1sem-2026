

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

console.log("BODY teste:", req.body);

    var nome_livro = req.body.nome_livroServer;
    var nota_livro = req.body.nota_livroServer;
    var descricao = req.body.descricaoServer;
    var fk_usuario = req.body.fk_usuarioServer;

    if (nome_livro == undefined) {
        res.status(400).send("O nome do livro está indefinido!");
    } else if (nota_livro == undefined) {
        res.status(400).send("A nota do livro está indefinida!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição do livro está indefinida!");
    }else {

    livroModel.cadastrar(nome_livro, nota_livro, descricao, fk_usuario)
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



// controller para gerar os gráficos da dashboard:
function buscarUltimosLivros(req, res) {

    const limite_linhas = 7;

    var idLivros = req.params.idLivros;

    console.log(`Recuperando os ultimos ${limite_linhas} livros`);

    livroModel.buscarUltimosLivros(idLivros, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos livros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarLivrosEmTempoReal(req, res) {

    var idLivros = req.params.idLivros;

    console.log(`Recuperando livros em tempo real`);

    livroModel.buscarLivrosEmTempoReal(idLivros).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos livros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    listar,
    cadastrar,
    buscarUltimosLivros,
    buscarLivrosEmTempoReal,
    buscarLivrosMaisAvaliados
}