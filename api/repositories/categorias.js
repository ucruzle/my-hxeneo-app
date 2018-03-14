var hdb        = require('../../db/client/hdbClient');
var httpStatus = require('http-status-codes');

exports.retornaCategorias = function(callback) {

    var query = 'SELECT CODIGODACATEGORIA' +
                     ', NOMEDACATEGORIA' + 
                     ', DESCRICAO' + 
                 ' FROM CATEGORIAS' + 
             ' ORDER BY CODIGODACATEGORIA';

    hdb.exec(query, [], function(err, rows) {
        
        if (err) {
            callback(err);
        } else {
            callback({ categorias : rows });
        }

    });

}

exports.retornaCategoria = function(categoriaEntity, callback) {

    var query = `SELECT CODIGODACATEGORIA
                      , NOMEDACATEGORIA
                      , DESCRICAO 
                   FROM CATEGORIAS 
                  WHERE CODIGODACATEGORIA = ${categoriaEntity.CodigoDaCategoria} 
               ORDER BY CODIGODACATEGORIA`;

    hdb.exec(query, [], function(err, rows) {
        
        if (err) {
            callback(err);
        } else {
            callback({ categoria : rows });
        }

    });

}

exports.adicionaCategoria = function(categoriaEntity, callback) {

    var query = `INSERT INTO CATEGORIAS VALUES (CODIGODACATEGORIA.NEXTVAL
                                              , ${categoriaEntity.NomeDaCategoria}
                                              , ${categoriaEntity.Descricao})`;

    hdb.exec(query, [], function(err, affectedRows) {
        
        if (err) {
            callback(err, httpStatus.INTERNAL_SERVER_ERROR);
        } else {

            if (affectedRows > 0) {
                callback(categoriaEntity, httpStatus.CREATED);
            } else {
                callback({}, httpStatus.NO_CONTENT);
            }
        }

    });

}

exports.alteraCategoria = function(categoriaEntity, callback) {

    var query = `UPDATE CATEGORIAS SET NOMEDACATEGORIA = ${categoriaEntity.NomeDaCategoria}
                                     , DESCRICAO = ${categoriaEntity.Descricao}
                                 WHERE CODIGODACATEGORIA = ${categoriaEntity.CodigoDaCategoria}`;
    
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

exports.eliminaCategoria = function(categoriaEntity, callback) {

    var query = `DELETE FROM CATEGORIAS WHERE CODIGODACATEGORIA = ${categoriaEntity.CodigoDaCategoria}`;
    
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