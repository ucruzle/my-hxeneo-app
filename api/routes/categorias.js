
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/retornaCategorias', function(req, res) {

    categoriasController.retornaCategorias(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaCategoria/:CodigoDaCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.retornaCategoria(categoriaTransfer, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionaCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.body.CodigoDaCategoria;
    categoriaTransfer.NomeDaCategoria   = req.body.NomeDaCategoria;
    categoriaTransfer.Descricao         = req.body.Descricao;

    categoriasController.adicionaCategoria(categoriaTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.put('/alteraCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.body.CodigoDaCategoria;
    categoriaTransfer.NomeDaCategoria   = req.body.NomeDaCategoria;
    categoriaTransfer.Descricao         = req.body.Descricao;

    categoriasController.alteraCategoria(categoriaTransfer, function(statusResult) {
        res.status(statusResult);
    });

});

router.delete('/eliminaCategoria/:CodigoDaCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.eliminaCategoria(categoriaTransfer, function(statusResult) {
        res.status(statusResult);
    });

});

module.exports = router;