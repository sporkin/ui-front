require('coffee-script');

/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    amqp = require('amqp');


var connection = amqp.createConnection({
  host: '127.0.0.1'
});

connection.addListener('ready', function () {
  var exchange1 = connection.exchange('ui-service', {type: 'fanout'});
  var exchange2 = connection.exchange('auth-service', {type: 'fanout'});

  var q = connection.queue('qsdfw', function() {
    q.bind(exchange1, "*");
    q.bind(exchange2, "*");

    q.subscribe(function (m) {
      console.log(JSON.parse(m.data.toString()))
    })
  });
});

var app = express();

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
