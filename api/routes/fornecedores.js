
var express                = require('express');
var router                 = express.Router();
var fornecedoresController = require('../controllers/fornecedores');

router.get('/retornaFornecedores', function(req, res) {

    fornecedoresController.retornaFornecedores(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaFornecedor/:CodigoDoFornecedor', function(req, res) {

    var fornecedorTransfer = new Object();
    fornecedorTransfer.CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    fornecedoresController.retornaFornecedor(fornecedorTransfer, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionaFornecedor', function(req, res) {

    var fornecedorTransfer = new Object();
    fornecedorTransfer.CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    fornecedorTransfer.NomeDaEmpresa      = req.body.NomeDaEmpresa;
    fornecedorTransfer.NomeDoContato      = req.body.NomeDoContato;
    fornecedorTransfer.CargoDoContato     = req.body.CargoDoContato;
    fornecedorTransfer.Endereco           = req.body.Endereco;
    fornecedorTransfer.Cidade             = req.body.Cidade;
    fornecedorTransfer.Regiao             = req.body.Regiao;
    fornecedorTransfer.CEP                = req.body.CEP;
    fornecedorTransfer.Pais               = req.body.Pais;
    fornecedorTransfer.Telefone           = req.body.Telefone;
    fornecedorTransfer.Fax                = req.body.Fax;
    fornecedorTransfer.HomePage           = req.body.HomePage;

    fornecedoresController.adicionaFornecedor(fornecedorTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.put('/alteraFornecedor', function(req, res) {

    var fornecedorTransfer = new Object();
    fornecedorTransfer.CodigoDoFornecedor = req.body.CodigoDoFornecedor;
    fornecedorTransfer.NomeDaEmpresa      = req.body.NomeDaEmpresa;
    fornecedorTransfer.NomeDoContato      = req.body.NomeDoContato;
    fornecedorTransfer.CargoDoContato     = req.body.CargoDoContato;
    fornecedorTransfer.Endereco           = req.body.Endereco;
    fornecedorTransfer.Cidade             = req.body.Cidade;
    fornecedorTransfer.Regiao             = req.body.Regiao;
    fornecedorTransfer.CEP                = req.body.CEP;
    fornecedorTransfer.Pais               = req.body.Pais;
    fornecedorTransfer.Telefone           = req.body.Telefone;
    fornecedorTransfer.Fax                = req.body.Fax;
    fornecedorTransfer.HomePage           = req.body.HomePage;

    fornecedoresController.alteraFornecedor(fornecedorTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.delete('/eliminaFornecedor/:CodigoDoFornecedor', function(req, res) {

    var fornecedorTransfer = new Object();
    fornecedorTransfer.CodigoDoFornecedor = req.params.CodigoDoFornecedor;

    fornecedoresController.eliminaFornecedor(fornecedorTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

module.exports = router;