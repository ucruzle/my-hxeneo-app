var fornecedoresRepository = require('../repositories/fornecedores');

exports.retornaFornecedores = function(callback) {
    fornecedoresRepository.retornaFornecedores(callback);
}

exports.retornaFornecedor = function(CodigoDoFornecedor, callback) {
    fornecedoresRepository.retornaFornecedor(CodigoDoFornecedor, callback);
}

exports.adicionaFornecedor = function(CodigoDoFornecedor, 
                                      NomeDaEmpresa, 
                                      NomeDoContato, 
                                      CargoDoContato,
                                      Endereco,
                                      Cidade,
                                      Regiao,
                                      CEP,
                                      Pais,
                                      Telefone,
                                      Fax,
                                      HomePage,
                                      callback) {

    fornecedoresRepository.adicionaFornecedor(CodigoDoFornecedor, 
                                              NomeDaEmpresa, 
                                              NomeDoContato, 
                                              CargoDoContato,
                                              Endereco,
                                              Cidade,
                                              Regiao,
                                              CEP,
                                              Pais,
                                              Telefone,
                                              Fax,
                                              HomePage,
                                              callback);

}

exports.alteraFornecedor = function(CodigoDoFornecedor, 
                                    NomeDaEmpresa, 
                                    NomeDoContato, 
                                    CargoDoContato,
                                    Endereco,
                                    Cidade,
                                    Regiao,
                                    CEP,
                                    Pais,
                                    Telefone,
                                    Fax,
                                    HomePage,
                                    callback) {

    fornecedoresRepository.alteraFornecedor(CodigoDoFornecedor, 
                                            NomeDaEmpresa, 
                                            NomeDoContato, 
                                            CargoDoContato,
                                            Endereco,
                                            Cidade,
                                            Regiao,
                                            CEP,
                                            Pais,
                                            Telefone,
                                            Fax,
                                            HomePage,
                                            callback);

}

exports.eliminaFornecedor = function(CodigoDoFornecedor, callback) {
    fornecedoresRepository.eliminaFornecedor(CodigoDoFornecedor, callback);
}