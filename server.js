var Hapi = require('hapi');
var app = require('./routes/app');

var port = process.env.PORT || 80;
var host = process.env.HOST || 'http://servicedemo.azurewebsites.net/';
var server = new Hapi.Server(host,port,{ cors: true });
app.routes(server);

server.start(function() {
    console.log("Hapi server started @ " + server.info.uri);
});
