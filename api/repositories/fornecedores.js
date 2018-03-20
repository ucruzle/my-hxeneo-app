var hdb        = require('../../db/client/hdbClient');
var httpStatus = require('http-status-codes');

exports.retornaFornecedores = function(callback) {

    var query = 'SELECT CODIGODOFORNECEDOR' +
                     ', NOMEDAEMPRESA' + 
                     ', NOMEDOCONTATO' + 
                     ', CARGODOCONTATO' + 
                     ', ENDERECO' + 
                     ', CIDADE' + 
                     ', REGIAO' + 
                     ', CEP' + 
                     ', PAIS' + 
                     ', TELEFONE' + 
                     ', FAX' + 
                     ', HOMEPAGE' + 
                 ' FROM FORNECEDORES' + 
             ' ORDER BY CODIGODOFORNECEDOR';

    hdb.exec(query, [], function(err, rows) {
        if (err) {
            callback(err);
        } else {
            callback({ fornecedores : rows });
        }
    });

}

exports.retornaFornecedor = function(fornecedorEntity, callback) {

    var query = `SELECT CODIGODOFORNECEDOR
                      , NOMEDAEMPRESA
                      , NOMEDOCONTATO
                      , CARGODOCONTATO
                      , ENDERECO
                      , CIDADE
                      , REGIAO
                      , CEP
                      , PAIS
                      , TELEFONE
                      , FAX
                      , HOMEPAGE
                   FROM FORNECEDORES
                  WHERE CODIGODOFORNECEDOR = ${fornecedorEntity.CodigoDoFornecedor}`;
    
    hdb.exec(query, [], function(err, rows) {
        
        if (err) {
            callback(err);
        } else {
            callback({ fornecedor : rows });
        }

    });

}

exports.retornaFornecedoresPorCodigoDoProduto = function(produtoEntity, callback) {

    var query = `SELECT CODIGODOFORNECEDOR
                      , NOMEDAEMPRESA
                      , NOMEDOCONTATO
                      , CARGODOCONTATO
                      , ENDERECO
                      , CIDADE
                      , REGIAO
                      , CEP
                      , PAIS
                      , TELEFONE
                      , FAX
                      , HOMEPAGE
                   FROM FORNECEDORES
                  WHERE CODIGODOFORNECEDOR = (SELECT CODIGODOFORNECEDOR 
                                                FROM PRODUTOS 
                                               WHERE CODIGODOPRODUTO = ${produtoEntity.CodigoDoProduto})`;
    
    hdb.exec(query, [], function(err, rows) {
        
        if (err) {
            callback(err);
        } else {
            callback({ fornecedor : rows });
        }

    });

}

exports.adicionaFornecedor = function(fornecedorEntity, callback) {

    var query = `INSERT INTO FORNECEDORES VALUES (CODIGODOFORNECEDOR.NEXTVAL
                                                , '${fornecedorEntity.NomeDaEmpresa}'
                                                , '${fornecedorEntity.NomeDoContato}'
                                                , '${fornecedorEntity.CargoDoContato}'
                                                , '${fornecedorEntity.Endereco}'
                                                , '${fornecedorEntity.Cidade}'
                                                , '${fornecedorEntity.Regiao}'
                                                , '${fornecedorEntity.CEP}'
                                                , '${fornecedorEntity.Pais}'
                                                , '${fornecedorEntity.Telefone}'
                                                , '${fornecedorEntity.Fax}'
                                                , '${fornecedorEntity.HomePage}')`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(err, httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback(fornecedorEntity, httpStatus.CREATED);
            } else {
                callback({}, httpStatus.NO_CONTENT);
            }
        }

    });

}

exports.alteraFornecedor = function(fornecedorEntity, callback) {

    var query = `UPDATE FORNECEDORES SET NOMEDAEMPRESA = '${fornecedorEntity.NomeDaEmpresa}'
                                       , NOMEDOCONTATO = '${fornecedorEntity.NomeDoContato}'
                                       , CARGODOCONTATO = '${fornecedorEntity.CargoDoContato}'
                                       , ENDERECO = '${fornecedorEntity.Endereco}'
                                       , CIDADE = '${fornecedorEntity.Cidade}'
                                       , REGIAO = '${fornecedorEntity.Regiao}'
                                       , CEP = '${fornecedorEntity.CEP}'
                                       , PAIS = '${fornecedorEntity.Pais}'
                                       , TELEFONE = '${fornecedorEntity.Telefone}'
                                       , FAX = '${fornecedorEntity.Fax}'
                                       , HOMEPAGE = '${fornecedorEntity.HomePage}'
                                   WHERE CODIGODOFORNECEDOR = ${fornecedorEntity.CodigoDoFornecedor}`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback({ AffectedRows : affectedRows }, httpStatus.CREATED);
            } else {
                callback({}, httpStatus.NO_CONTENT);
            }
        }

    });

}

exports.eliminaFornecedor = function(fornecedorEntity, callback) {

    var query = `DELETE FROM FORNECEDORES WHERE CODIGODOFORNECEDOR = ${fornecedorEntity.CodigoDoFornecedor}`;
    
    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback({ AffectedRows : affectedRows }, httpStatus.OK);
            } else {
                callback({}, httpStatus.NO_CONTENT);
            }
        }
        
    });

}    