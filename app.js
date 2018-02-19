var app = require('./config/app_config');
var ui5Router = require('./ui5/ui5Router'); 

app.get('/', function(req, res){
    res.end('Bem-vindo a API HXENEO (HANA Express Edition, Node.js, Express.js e openUI5) stack sample APP');
});

app.use('/ui5/', ui5Router.getRouter()); // adds the routes for ui5