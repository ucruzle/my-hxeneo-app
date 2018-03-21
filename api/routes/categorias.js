
var express              = require('express');
var router               = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/retornaCategorias', function(req, res) {

    categoriasController.retornaCategorias(function(err, rows) {
        if (err) {
            res.json(err);
        } else {    
            res.json({ categorias : rows });
        }
    });

});

router.get('/retornaCategoria/:CodigoDaCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.retornaCategoria(categoriaTransfer, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json({ categoria : rows });
        }
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

    categoriasController.alteraCategoria(categoriaTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

router.delete('/eliminaCategoria/:CodigoDaCategoria', function(req, res) {

    var categoriaTransfer = new Object();
    categoriaTransfer.CodigoDaCategoria = req.params.CodigoDaCategoria;

    categoriasController.eliminaCategoria(categoriaTransfer, function(dataResult, statusResult) {
        res.status(statusResult);
        res.json(dataResult);
    });

});

module.exports = router;