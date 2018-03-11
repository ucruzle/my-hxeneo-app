var produtosRepository = require('../repositories/produtos');

exports.retornaProdutos = function(callback) {
    produtosRepository.retornaProdutos(callback);
}

exports.retornaProduto = function(CodigoDoProduto, callback) {
    produtosRepository.retornaProduto(CodigoDoProduto, callback);
}

exports.adicionarProduto = function(CodigoDoProduto,     
                                    NomeDoProduto,       
                                    CodigoDoFornecedor,  
                                    CodigoDaCategoria,   
                                    QuantidadePorUnidade,
                                    PrecoUnitario,       
                                    UnidadesEmEstoque,   
                                    UnidadesPedidas,     
                                    NivelDeReposicao,    
                                    Descontinuado) {

    produtosRepository.adicionarProduto(CodigoDoProduto,     
                                        NomeDoProduto,       
                                        CodigoDoFornecedor,  
                                        CodigoDaCategoria,   
                                        QuantidadePorUnidade,
                                        PrecoUnitario,       
                                        UnidadesEmEstoque,   
                                        UnidadesPedidas,     
                                        NivelDeReposicao,    
                                        Descontinuado);                                        

}

exports.alteraProduto = function(CodigoDoProduto,     
                                 NomeDoProduto,       
                                 CodigoDoFornecedor,  
                                 CodigoDaCategoria,   
                                 QuantidadePorUnidade,
                                 PrecoUnitario,       
                                 UnidadesEmEstoque,   
                                 UnidadesPedidas,     
                                 NivelDeReposicao,    
                                 Descontinuado) {

produtosRepository.alteraProduto(CodigoDoProduto,     
                                 NomeDoProduto,       
                                 CodigoDoFornecedor,  
                                 CodigoDaCategoria,   
                                 QuantidadePorUnidade,
                                 PrecoUnitario,       
                                 UnidadesEmEstoque,   
                                 UnidadesPedidas,     
                                 NivelDeReposicao,    
                                 Descontinuado);

}

exports.eliminaProduto = function(CodigoDoProduto, callback) {
    produtosRepository.eliminaProduto(CodigoDoProduto, callback);
}