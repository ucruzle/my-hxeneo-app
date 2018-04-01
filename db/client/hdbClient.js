var hdb = require('hdb');

var client = hdb.createClient({

    host     : '<Host Name>',
    port     : 99999, // Port Number - 90 = HANA instance
    user     : '<User Name>',
    password : '<Password>'

});

exports.exec = function(query, params, done) {

    client.on('error', function(err) {
        return done(err, null)
    });

    client.connect(function(err) {
        
        if (err) {
            return done(err, null)
        }

        client.prepare(query, function(err, statement) {
            
            if (err) {
                return done(err, null)
            }

            statement.exec(params, function(err, result) {
                
                /*
                * Após a coxão com o banco de dados bem sucedida e
                * a execução do comando com o retorna dos dados no
                * objeto result, deve-se fechar a conexão para execução
                * de uma novo comando, ou seja, uma nova chamado de outro
                * serviço da API, para isso utilizar o comando end()
                * do client. Exemplo: client.end()
                */

                client.end();
                
                if (err) {
                    return done(err, null)
                }

                return done(null, result)
            });
        });
    });

}