var categoriasRepository = require('../repositories/categorias');

exports.retornaCategorias = function(callback) {
    categoriasRepository.retornaCategorias(callback);
}

exports.retornaCategoria = function(categoriaTransfer, callback) {

    var categoriaEntity = new Object();
    categoriaEntity.CodigoDaCategoria = categoriaTransfer.CodigoDaCategoria;

    categoriasRepository.retornaCategoria(categoriaEntity, callback);
}

exports.adicionaCategoria = function(categoriaTransfer, callback) {

    var categoriaEntity = new Object();
    categoriaEntity.CodigoDaCategoria = categoriaTransfer.CodigoDaCategoria;
    categoriaEntity.NomeDaCategoria   = categoriaTransfer.NomeDaCategoria;
    categoriaEntity.Descricao         = categoriaTransfer.Descricao;

    categoriasRepository.adicionaCategoria(categoriaEntity, callback);
}

exports.alteraCategoria = function(categoriaTransfer, callback) {
    
    var categoriaEntity = new Object();
    categoriaEntity.CodigoDaCategoria = categoriaTransfer.CodigoDaCategoria;
    categoriaEntity.NomeDaCategoria   = categoriaTransfer.NomeDaCategoria;
    categoriaEntity.Descricao         = categoriaTransfer.Descricao;
    
    categoriasRepository.alteraCategoria(categoriaEntity, callback);
}

exports.eliminaCategoria = function(categoriaTransfer, callback) {
    
    var categoriaEntity = new Object();
    categoriaEntity.CodigoDaCategoria = categoriaTransfer.CodigoDaCategoria;
    
    categoriasRepository.eliminaCategoria(categoriaEntity, callback);
}