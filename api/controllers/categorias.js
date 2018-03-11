var categoriasRepository = require('../repositories/categorias');

exports.retornaCategorias = function(callback) {
    categoriasRepository.retornaCategorias(callback);
}

exports.retornaCategoria = function(CodigoDaCategoria, callback) {
    categoriasRepository.retornaCategoria(CodigoDaCategoria, callback);
}

exports.adicionaCategoria = function(CodigoDaCategoria, NomeDaCategoria, Descricao, callback) {
    categoriasRepository.adicionaCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, callback);
}

exports.alteraCategoria = function(CodigoDaCategoria, NomeDaCategoria, Descricao, callback) {
    categoriasRepository.alteraCategoria(CodigoDaCategoria, NomeDaCategoria, Descricao, callback);
}

exports.eliminaCategoria = function(CodigoDaCategoria, callback) {
    categoriasRepository.eliminaCategoria(CodigoDaCategoria, callback);
}