var fornecedoresRepository = require('../repositories/fornecedores');

exports.retornaFornecedores = function(callback) {
    fornecedoresRepository.retornaFornecedores(callback);
}

exports.retornaFornecedor = function(fornecedorTransfer, callback) {

    var fornecedorEntity = new Object();
    fornecedorEntity.CodigoDoFornecedor = fornecedorTransfer.CodigoDoFornecedor;

    fornecedoresRepository.retornaFornecedor(fornecedorEntity, callback);
}

exports.retornaFornecedoresPorCodigoDoProduto = function(produtoTransfer, callback) {

    var produtoEntity = new Object();
    produtoEntity.CodigoDoProduto = produtoTransfer.CodigoDoProduto;

    fornecedoresRepository.retornaFornecedoresPorCodigoDoProduto(produtoEntity, callback);
}

exports.adicionaFornecedor = function(fornecedorTransfer, callback) {

    var fornecedorEntity = new Object();
    fornecedorEntity.CodigoDoFornecedor = fornecedorTransfer.CodigoDoFornecedor;
    fornecedorEntity.NomeDaEmpresa      = fornecedorTransfer.NomeDaEmpresa;
    fornecedorEntity.NomeDoContato      = fornecedorTransfer.NomeDoContato;
    fornecedorEntity.CargoDoContato     = fornecedorTransfer.CargoDoContato;
    fornecedorEntity.Endereco           = fornecedorTransfer.Endereco;
    fornecedorEntity.Cidade             = fornecedorTransfer.Cidade;
    fornecedorEntity.Regiao             = fornecedorTransfer.Regiao;
    fornecedorEntity.CEP                = fornecedorTransfer.CEP;
    fornecedorEntity.Pais               = fornecedorTransfer.Pais;
    fornecedorEntity.Telefone           = fornecedorTransfer.Telefone;
    fornecedorEntity.Fax                = fornecedorTransfer.Fax;
    fornecedorEntity.HomePage           = fornecedorTransfer.HomePage;

    fornecedoresRepository.adicionaFornecedor(fornecedorEntity, callback);

}

exports.alteraFornecedor = function(fornecedorTransfer, callback) {

    var fornecedorEntity = new Object();
    fornecedorEntity.CodigoDoFornecedor = fornecedorTransfer.CodigoDoFornecedor;
    fornecedorEntity.NomeDaEmpresa      = fornecedorTransfer.NomeDaEmpresa;
    fornecedorEntity.NomeDoContato      = fornecedorTransfer.NomeDoContato;
    fornecedorEntity.CargoDoContato     = fornecedorTransfer.CargoDoContato;
    fornecedorEntity.Endereco           = fornecedorTransfer.Endereco;
    fornecedorEntity.Cidade             = fornecedorTransfer.Cidade;
    fornecedorEntity.Regiao             = fornecedorTransfer.Regiao;
    fornecedorEntity.CEP                = fornecedorTransfer.CEP;
    fornecedorEntity.Pais               = fornecedorTransfer.Pais;
    fornecedorEntity.Telefone           = fornecedorTransfer.Telefone;
    fornecedorEntity.Fax                = fornecedorTransfer.Fax;
    fornecedorEntity.HomePage           = fornecedorTransfer.HomePage;
    
    fornecedoresRepository.alteraFornecedor(fornecedorEntity, callback);

}

exports.eliminaFornecedor = function(fornecedorTransfer, callback) {

    var fornecedorEntity = new Object();
    fornecedorEntity.CodigoDoFornecedor = fornecedorTransfer.CodigoDoFornecedor;

    fornecedoresRepository.eliminaFornecedor(fornecedorEntity, callback);
}