var express            = require('express');
var router             = express.Router();
var catalogoController = require('../controllers/catalogo');

router.get('/retornaCatalogoDeProdutosPorCategorias', function(req, res) {

    catalogoController.retornaCatalogoDeProdutosPorCategorias(function(err, dataResult) {
        if (err) {
            res.json(err);
        } else {
            res.json(dataResult);
        }
    });

});

module.exports = router;