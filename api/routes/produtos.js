
var express            = require('express');
var router             = express.Router();
var produtosController = require('../controllers/produtos');

router.get('/retornaProdutos', function(req, res) {

    produtosController.retornaProdutos(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaProduto/:CodigoDoProduto', function(req, res) {

    var CodigoDoProduto = req.params.CodigoDoProduto;

    produtosController.retornaProduto(CodigoDoProduto, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionarProduto', function(req, res) {

    var CodigoDoProduto      = req.body.CodigoDoProduto;
    var NomeDoProduto        = req.body.NomeDoProduto;
    var CodigoDoFornecedor   = req.body.CodigoDoFornecedor;
    var CodigoDaCategoria    = req.body.CodigoDaCategoria;
    var QuantidadePorUnidade = req.body.QuantidadePorUnidade;
    var PrecoUnitario        = req.body.PrecoUnitario;
    var UnidadesEmEstoque    = req.body.UnidadesEmEstoque;
    var UnidadesPedidas      = req.body.UnidadesPedidas;
    var NivelDeReposicao     = req.body.NivelDeReposicao;
    var Descontinuado        = req.body.Descontinuado;

    produtosController.adicionarProduto(
        CodigoDoProduto, 
        NomeDoProduto, 
        CodigoDoFornecedor,
        CodigoDaCategoria,
        QuantidadePorUnidade,
        PrecoUnitario,
        UnidadesEmEstoque,
        UnidadesPedidas,
        NivelDeReposicao, 
        Descontinuado, 
        function(dataResult, statusResult) {
            res.status(statusResult);
            res.json(dataResult);
        }
    );

});

router.put('/alteraProduto', function(req, res) {

    var CodigoDoProduto      = req.body.CodigoDoProduto;
    var NomeDoProduto        = req.body.NomeDoProduto;
    var CodigoDoFornecedor   = req.body.CodigoDoFornecedor;
    var CodigoDaCategoria    = req.body.CodigoDaCategoria;
    var QuantidadePorUnidade = req.body.QuantidadePorUnidade;
    var PrecoUnitario        = req.body.PrecoUnitario;
    var UnidadesEmEstoque    = req.body.UnidadesEmEstoque;
    var UnidadesPedidas      = req.body.UnidadesPedidas;
    var NivelDeReposicao     = req.body.NivelDeReposicao;
    var Descontinuado        = req.body.Descontinuado;

    produtosController.alteraProduto(
        CodigoDoProduto, 
        NomeDoProduto, 
        CodigoDoFornecedor,
        CodigoDaCategoria,
        QuantidadePorUnidade,
        PrecoUnitario,
        UnidadesEmEstoque,
        UnidadesPedidas,
        NivelDeReposicao, 
        Descontinuado, 
        function(statusResult) {
            res.status(statusResult);
        }
    );

});

router.delete('/eliminaProduto/:CodigoDoProduto', function(req, res) {

    var CodigoDoProduto = req.params.CodigoDoProduto;

    produtosController.eliminaProduto(CodigoDoProduto, function(statusResult) {
        res.status(statusResult);
    });

});

module.exports = router;