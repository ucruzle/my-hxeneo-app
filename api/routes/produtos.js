
var express            = require('express');
var router             = express.Router();
var produtosController = require('../controllers/produtos');

router.get('/retornaProdutos', function(req, res) {

    produtosController.retornaProdutos(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaProduto/:CodigoDoProduto', function(req, res) {

    var produtoTransfer = new Object();
    produtoTransfer.CodigoDoProduto = req.params.CodigoDoProduto;

    produtosController.retornaProduto(produtoTransfer, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionarProduto', function(req, res) {

    var produtoTransfer = new Object();
    produtoTransfer.CodigoDoProduto      = req.body.CodigoDoProduto;
    produtoTransfer.NomeDoProduto        = req.body.NomeDoProduto;
    produtoTransfer.CodigoDoFornecedor   = req.body.CodigoDoFornecedor;
    produtoTransfer.CodigoDaCategoria    = req.body.CodigoDaCategoria;
    produtoTransfer.QuantidadePorUnidade = req.body.QuantidadePorUnidade;
    produtoTransfer.PrecoUnitario        = req.body.PrecoUnitario;
    produtoTransfer.UnidadesEmEstoque    = req.body.UnidadesEmEstoque;
    produtoTransfer.UnidadesPedidas      = req.body.UnidadesPedidas;
    produtoTransfer.NivelDeReposicao     = req.body.NivelDeReposicao;
    produtoTransfer.Descontinuado        = req.body.Descontinuado;

    produtosController.adicionarProduto(produtoTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.put('/alteraProduto', function(req, res) {

    var produtoTransfer = new Object();
    produtoTransfer.CodigoDoProduto      = req.body.CodigoDoProduto;
    produtoTransfer.NomeDoProduto        = req.body.NomeDoProduto;
    produtoTransfer.CodigoDoFornecedor   = req.body.CodigoDoFornecedor;
    produtoTransfer.CodigoDaCategoria    = req.body.CodigoDaCategoria;
    produtoTransfer.QuantidadePorUnidade = req.body.QuantidadePorUnidade;
    produtoTransfer.PrecoUnitario        = req.body.PrecoUnitario;
    produtoTransfer.UnidadesEmEstoque    = req.body.UnidadesEmEstoque;
    produtoTransfer.UnidadesPedidas      = req.body.UnidadesPedidas;
    produtoTransfer.NivelDeReposicao     = req.body.NivelDeReposicao;
    produtoTransfer.Descontinuado        = req.body.Descontinuado;

    produtosController.alteraProduto(produtoTransfer, function(statusResult) {
        res.status(statusResult);
    });

});

router.delete('/eliminaProduto/:CodigoDoProduto', function(req, res) {

    var produtoTransfer = new Object();
    produtoTransfer.CodigoDoProduto = req.params.CodigoDoProduto;

    produtosController.eliminaProduto(produtoTransfer, function(statusResult) {
        res.status(statusResult);
    });

});

module.exports = router;