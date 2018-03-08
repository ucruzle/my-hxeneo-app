// returns the router that will act under /api/*
var express             = require('express');
var router              = express.Router();
var categoriasRouters   = require('./routes/categorias');
var fornecedoresRouters = require('./routes/fornecedores');
var produtosRouters     = require('./routes/produtos');

exports.getRouter = function() {

    router.route('/').get((req, res) => {
        
        res.send({
            entities : [
                "categorias",
                "fornecedores",
                "produtos"
            ]
        });
        
    })

    router.use('/categorias/', categoriasRouters);
    router.use('/fornecedores/', fornecedoresRouters);
    router.use('/produtos/', produtosRouters);

    return router
}