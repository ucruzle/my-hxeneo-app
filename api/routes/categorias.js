
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/retornaCategorias', function(req, res) {

    categoriasController.retornaCategorias(function(resp) {
        res.json(resp);
    });

});

router.get('/retornaCategoria/:CodigoDaCategoria', function(req, res) {

    var CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.retornaCategoria(CodigoDaCategoria, function(resp) {
        res.json(resp);
    });

});

router.post('/adicionaCategoria', function(req, res) {

    var CodigoDaCategoria = req.body.CodigoDaCategoria;
    var NomeDaCategoria   = req.body.NomeDaCategoria;
    var Descricao         = req.body.Descricao;

    categoriasController.adicionaCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, function(resp) {
        res.status(resp.status);
        res.json(resp);
    });

});

router.put('/alteraCategoria', function(req, res) {

    var CodigoDaCategoria = req.body.CodigoDaCategoria;
    var NomeDaCategoria   = req.body.NomeDaCategoria;
    var Descricao         = req.body.Descricao;

    categoriasController.alteraCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, function(resp) {
        res.status(resp.status);
    });

});

router.delete('/eliminaCategoria/:CodigoDaCategoria', function(req, res) {

    var CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.eliminaCategoria(CodigoDaCategoria, function(resp) {
        res.status(resp.status);
    });

});

module.exports = router;