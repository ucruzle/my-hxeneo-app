
var express                = require('express');
var router                 = express.Router();
var fornecedoresController = require('../controllers/fornecedores');

router.get('/retornaFornecedores', function(req, res) {

    fornecedoresController.retornaFornecedores(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaFornecedor/:CodigoDoFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    fornecedoresController.retornaFornecedor(CodigoDoFornecedor, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionaFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    var NomeDaEmpresa      = req.body.NomeDaEmpresa;
    var NomeDoContato      = req.body.NomeDoContato;
    var CargoDoContato     = req.body.CargoDoContato;
    var Endereco           = req.body.Endereco;
    var Cidade             = req.body.Cidade;
    var Regiao             = req.body.Regiao;
    var CEP                = req.body.CEP;
    var Pais               = req.body.Pais;
    var Telefone           = req.body.Telefone;
    var Fax                = req.body.Fax;
    var HomePage           = req.body.HomePage;

    fornecedoresController.adicionaFornecedor(
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
        function(dataResult, statusResult) {
            res.status(statusResult);
            res.json(dataResult);
        }
    );

});

router.put('/alteraFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    var NomeDaEmpresa      = req.body.NomeDaEmpresa;
    var NomeDoContato      = req.body.NomeDoContato;
    var CargoDoContato     = req.body.CargoDoContato;
    var Endereco           = req.body.Endereco;
    var Cidade             = req.body.Cidade;
    var Regiao             = req.body.Regiao;
    var CEP                = req.body.CEP;
    var Pais               = req.body.Pais;
    var Telefone           = req.body.Telefone;
    var Fax                = req.body.Fax;
    var HomePage           = req.body.HomePage;

    fornecedoresController.alteraFornecedor(
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
        function(statusResult) {
            res.status(statusResult);
        }
    );

});

router.delete('/eliminaFornecedor/:CodigoDoFornecedor', function(req, res) {

    var CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    fornecedoresController.eliminaFornecedor(CodigoDoFornecedor, function(statusResult) {
        res.status(statusResult);
    });

});

module.exports = router;