// returns the router that will act under /api/*
var express             = require('express');
var router              = express.Router();
var categoriasRouters   = require('./routes/categorias');
var fornecedoresRouters = require('./routes/fornecedores');
var produtosRouters     = require('./routes/produtos');
var catalogoRouters     = require('./routes/catalogo');

exports.getRouter = function() {

    router.route('/').get((req, res) => {
        
        res.send({
            entities : [
                "categorias",
                "fornecedores",
                "produtos",
                "catalogo"
            ]
        });
        
    })

    router.use('/categorias/', categoriasRouters);
    router.use('/fornecedores/', fornecedoresRouters);
    router.use('/produtos/', produtosRouters);
    router.use('/catalogo/', catalogoRouters);

    return router
}