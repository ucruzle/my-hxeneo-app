
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/retornaProdutos', function(req, res) {

    categoriasController.retornaProdutos(function(resp) {
        res.json(resp);
    });

});

router.get('/retornaProduto/:CodigoDoProduto', function(req, res) {

    var CodigoDoProduto = req.params.CodigoDoProduto;

    categoriasController.retornaProduto(CodigoDoProduto, function(resp) {
        res.json(resp);
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

    categoriasController.adicionaCategoria(
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
        function(resp) {
            res.status(resp.status);
            res.json(resp);
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

    categoriasController.alteraProduto(
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
        function(resp) {
            res.status(resp.status);
        }
    );

});

router.delete('/eliminaProduto/:CodigoDoProduto', function(req, res) {

    var CodigoDoProduto = req.params.CodigoDoProduto;

    categoriasController.eliminaProduto(CodigoDoProduto, function(resp) {
        res.status(resp.status);
    });

});

module.exports = router;