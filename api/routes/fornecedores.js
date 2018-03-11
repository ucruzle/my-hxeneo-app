
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/fornecedores');

router.get('/retornaFornecedores', function(req, res) {

    categoriasController.retornaFornecedores(function(resp) {
        res.json(resp);
    });

});

router.get('/retornaFornecedore/:CodigoDoFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    categoriasController.retornaFornecedor(CodigoDoFornecedor, function(resp) {
        res.json(resp);
    });

});

router.post('/adicionaFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    var NomeDaEmpresa      = req.body.NomeDaCategoria;
    var NomeDoContato      = req.body.Descricao;
    var CargoDoContato     = req.body.CargoDoContato;
    var Endereco           = req.body.Endereco;
    var Cidade             = req.body.Cidade;
    var Regiao             = req.body.Regiao;
    var CEP                = req.body.CEP;
    var Pais               = req.body.Pais;
    var Telefone           = req.body.Telefone;
    var Fax                = req.body.Fax;
    var HomePage           = req.body.HomePage;

    categoriasController.adicionaFornecedor(
        CodigoDoFornecedor, 
        NomeDaEmpresa, 
        NomeDoContato, 
        CargoDoContato, 
        Endereco, 
        Cidade, 
        Regiao,
        CEP,
        Pais,
        Telefone,
        Fax,
        HomePage, 
        function(resp) {
            res.status(resp.status);
            res.json(resp);
        }
    );

});

router.put('/alteraFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    var NomeDaEmpresa      = req.body.NomeDaCategoria;
    var NomeDoContato      = req.body.Descricao;
    var CargoDoContato     = req.body.CargoDoContato;
    var Endereco           = req.body.Endereco;
    var Cidade             = req.body.Cidade;
    var Regiao             = req.body.Regiao;
    var CEP                = req.body.CEP;
    var Pais               = req.body.Pais;
    var Telefone           = req.body.Telefone;
    var Fax                = req.body.Fax;
    var HomePage           = req.body.HomePage;

    categoriasController.alteraFornecedor(
        CodigoDoFornecedor, 
        NomeDaEmpresa, 
        NomeDoContato, 
        CargoDoContato, 
        Endereco, 
        Cidade, 
        Regiao,
        CEP,
        Pais,
        Telefone,
        Fax,
        HomePage, 
        function(resp) {
            res.status(resp.status);
        }
    );

});

router.delete('/eliminaFornecedor/:CodigoDoFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    categoriasController.eliminaFornecedor(CodigoDoFornecedor, function(resp) {
        res.status(resp.status);
    });

});

module.exports = router;