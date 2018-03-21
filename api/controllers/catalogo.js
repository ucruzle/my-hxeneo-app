var catalogoRepository = require('../repositories/catalogo');

exports.retornaCatalogoDeProdutosPorCategorias = function(callback) {
    catalogoRepository.retornaCatalogoDeProdutosPorCategorias(callback);
}