
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/retornaCategorias', function(req, res) {

    categoriasController.retornaCategorias(function(dataResult) {
        res.json(dataResult);
    });

});

router.get('/retornaCategoria/:CodigoDaCategoria', function(req, res) {

    var CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.retornaCategoria(CodigoDaCategoria, function(dataResult) {
        res.json(dataResult);
    });

});

router.post('/adicionaCategoria', function(req, res) {

    var CodigoDaCategoria = req.body.CodigoDaCategoria;
    var NomeDaCategoria   = req.body.NomeDaCategoria;
    var Descricao         = req.body.Descricao;

    categoriasController.adicionaCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.put('/alteraCategoria', function(req, res) {

    var CodigoDaCategoria = req.body.CodigoDaCategoria;
    var NomeDaCategoria   = req.body.NomeDaCategoria;
    var Descricao         = req.body.Descricao;

    categoriasController.alteraCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, function(statusResult) {
        res.status(statusResult);
    });

});

router.delete('/eliminaCategoria/:CodigoDaCategoria', function(req, res) {

    var CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.eliminaCategoria(CodigoDaCategoria, function(statusResult) {
        res.status(statusResult);
    });

});

module.exports = router;