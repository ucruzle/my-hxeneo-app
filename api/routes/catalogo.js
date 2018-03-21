var express            = require('express');
var router             = express.Router();
var catalogoController = require('../controllers/catalogo');

router.get('/retornaCatalogoDeProdutosPorCategorias', function(req, res) {

    catalogoController.retornaCatalogoDeProdutosPorCategorias(function(err, catalogo) {
        if (err) {
            res.json(err);
        } else {
            res.json({ Catalogo : catalogo });
        }
    });

});

module.exports = router;