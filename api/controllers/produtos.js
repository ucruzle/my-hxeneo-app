var produtosRepository = require('../repositories/produtos');

exports.retornaProdutos = function(callback) {
    produtosRepository.retornaProdutos(callback);
}

exports.retornaProduto = function(produtoTransfer, callback) {
    
    var produtoEntity = new Object();
    produtoEntity.CodigoDoProduto = produtoTransfer.CodigoDoProduto;
    
    produtosRepository.retornaProduto(produtoEntity, callback);
}

exports.retornaProdutosPorCodigoDaCategoria = function(produtoTransfer, callback) {

    var produtoEntity = new Object();
    produtoEntity.CodigoDaCategoria = produtoTransfer.CodigoDaCategoria;

    produtosRepository.retornaProdutosPorCodigoDaCategoria(produtoEntity, callback);
}

exports.adicionarProduto = function(produtoTransfer, callback) {

    var produtoEntity = new Object();
    produtoEntity.CodigoDoProduto      = produtoTransfer.CodigoDoProduto;
    produtoEntity.NomeDoProduto        = produtoTransfer.NomeDoProduto;
    produtoEntity.CodigoDoFornecedor   = produtoTransfer.CodigoDoFornecedor;
    produtoEntity.CodigoDaCategoria    = produtoTransfer.CodigoDaCategoria;
    produtoEntity.QuantidadePorUnidade = produtoTransfer.QuantidadePorUnidade;
    produtoEntity.PrecoUnitario        = produtoTransfer.PrecoUnitario;
    produtoEntity.UnidadesEmEstoque    = produtoTransfer.UnidadesEmEstoque;
    produtoEntity.UnidadesPedidas      = produtoTransfer.UnidadesPedidas;
    produtoEntity.NivelDeReposicao     = produtoTransfer.NivelDeReposicao;
    produtoEntity.Descontinuado        = produtoTransfer.Descontinuado;

    produtosRepository.adicionarProduto(produtoEntity, callback);                                        

}

exports.alteraProduto = function(produtoTransfer, callback) {

    var produtoEntity = new Object();
    produtoEntity.CodigoDoProduto      = produtoTransfer.CodigoDoProduto;
    produtoEntity.NomeDoProduto        = produtoTransfer.NomeDoProduto;
    produtoEntity.CodigoDoFornecedor   = produtoTransfer.CodigoDoFornecedor;
    produtoEntity.CodigoDaCategoria    = produtoTransfer.CodigoDaCategoria;
    produtoEntity.QuantidadePorUnidade = produtoTransfer.QuantidadePorUnidade;
    produtoEntity.PrecoUnitario        = produtoTransfer.PrecoUnitario;
    produtoEntity.UnidadesEmEstoque    = produtoTransfer.UnidadesEmEstoque;
    produtoEntity.UnidadesPedidas      = produtoTransfer.UnidadesPedidas;
    produtoEntity.NivelDeReposicao     = produtoTransfer.NivelDeReposicao;
    produtoEntity.Descontinuado        = produtoTransfer.Descontinuado;
    
    produtosRepository.alteraProduto(produtoEntity, callback);

}

exports.eliminaProduto = function(produtoTransfer, callback) {
    
    var produtoEntity = new Object();
    produtoEntity.CodigoDoProduto = produtoTransfer.CodigoDoProduto;
    
    produtosRepository.eliminaProduto(produtoEntity, callback);
}