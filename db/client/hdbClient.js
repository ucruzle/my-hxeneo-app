var hdb = require('hdb');

var client = hdb.createClient({

    host     : 'HXEHOST',
    port     : 39015, // HANA Express Version = 2.0 SP00; Default Instance ID 90
    user     : 'DBWORK',
    password : 'DBWdesenv1'

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
                
                if (err) {
                    return done(err, null)
                }

                return done(null, result)
            });
        });
    });

}