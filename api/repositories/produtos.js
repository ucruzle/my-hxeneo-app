var hdb        = require('../../db/client/hdbClient');
var httpStatus = require('http-status-codes');

exports.retornaProdutos = function(callback) {

    var query = 'SELECT CODIGODOPRODUTO' +
                     ', NOMEDOPRODUTO' + 
                     ', CODIGODOFORNECEDOR' + 
                     ', CODIGODACATEGORIA' + 
                     ', QUANTIDADEPORUNIDADE' + 
                     ', PRECOUNITARIO' + 
                     ', UNIDADESEMESTOQUE' + 
                     ', UNIDADESPEDIDAS' + 
                     ', NIVELDEREPOSICAO' + 
                     ', DESCONTINUADO' + 
                 ' FROM PRODUTOS' + 
             ' ORDER BY CODIGODOPRODUTO';
    
    hdb.exec(query, [], function(err, rows) {
        if (err) {
            callback(err);
        } else {
            callback({ produtos : rows });
        }
    });

}

exports.retornaProduto = function(produtoEntity, callback) {

    var query = `SELECT CODIGODOPRODUTO
                      , NOMEDOPRODUTO
                      , CODIGODOFORNECEDOR
                      , CODIGODACATEGORIA
                      , QUANTIDADEPORUNIDADE
                      , PRECOUNITARIO
                      , UNIDADESEMESTOQUE
                      , UNIDADESPEDIDAS
                      , NIVELDEREPOSICAO
                      , DESCONTINUADO
                   FROM PRODUTOS
                  WHERE CODIGODOPRODUTO = ${produtoEntity.CodigoDoProduto}`;
    
    hdb.exec(query, [], function(err, rows) {
        if (err) {
            callback(err);
        } else {
            callback({ produto : rows });
        }
    });

}

exports.adicionarProduto = function(produtoEntity, callback) {

    var query = `INSERT INTO PRODUTOS VALUES (CODIGODOPRODUTO.NEXTVAL
                                            , ${produtoEntity.NomeDoProduto}
                                            , ${produtoEntity.CodigoDoFornecedor}
                                            , ${produtoEntity.CodigoDaCategoria}
                                            , ${produtoEntity.QuantidadePorUnidade}
                                            , ${produtoEntity.PrecoUnitario}
                                            , ${produtoEntity.UnidadesEmEstoque}
                                            , ${produtoEntity.UnidadesPedidas}
                                            , ${produtoEntity.NivelDeReposicao}
                                            , ${produtoEntity.Descontinuado})`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(err, httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback(produtoEntity, httpStatus.CREATED);
            } else {
                callback({}, httpStatus.NO_CONTENT);
            }
        }

    });

}    

exports.alteraProduto = function(produtoEntity, callback) {

    var query = `UPDATE PRODUTOS SET NOMEDOPRODUTO = ${produtoEntity.NomeDoProduto}
                                   , CODIGODOFORNECEDOR = ${produtoEntity.CodigoDoFornecedor}
                                   , CODIGODACATEGORIA = ${produtoEntity.CodigoDaCategoria}
                                   , QUANTIDADEPORUNIDADE = ${produtoEntity.QuantidadePorUnidade}
                                   , PRECOUNITARIO = ${produtoEntity.PrecoUnitario}
                                   , UNIDADESEMESTOQUE = ${produtoEntity.UnidadesEmEstoque}
                                   , UNIDADESPEDIDAS = ${produtoEntity.UnidadesPedidas}
                                   , NIVELDEREPOSICAO = ${produtoEntity.NivelDeReposicao}
                                   , DESCONTINUADO = ${produtoEntity.Descontinuado}
                               WHERE CODIGODOPRODUTO = ${produtoEntity.CodigoDoProduto}`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback(httpStatus.CREATED);
            } else {
                callback(httpStatus.NO_CONTENT);
            }
        }

    });

}

exports.eliminaProduto = function(produtoEntity, callback) {

    var query = `DELETE FROM PRODUTOS WHERE CODIGODOPRODUTO = ${produtoEntity.CodigoDoProduto}`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback(httpStatus.OK);
            } else {
                callback(httpStatus.NO_CONTENT);
            }
        }
        
    });

}    