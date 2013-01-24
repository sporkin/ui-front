require('coffee-script');
var express = require('express'),
    routes = require('./app/routes'),
    user = require('./app/routes/user'),
    http = require('http'),
    path = require('path'),
    amqp = require('amqp'),
    stylus = require('stylus'),
    nib = require('nib'),
    dust = require('dustjs-linkedin'),
    cons = require('consolidate');

// var app = express(),
//     server = app.listen(3000),
//     io = require('socket.io').listen(server);

var app = express(),
    server = app.listen(3000),
    io = require('socket.io').listen(server);

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 30); 
});

app.configure(function() {
  app.engine('dust', cons.dust);
  app.set('views', __dirname + '/app/views');
  app.set('view engine', 'jade');
  app.set('template_engine', 'dust');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware({
    src: __dirname + '/app/assets',
    dest: __dirname + '/public',
    compile: function(str, path) {
      return stylus(str).set('filename', path).set('compress', true).use(require('nib')());
    }
  }));

  app.use(express.static(path.join(__dirname, '/public/javascripts')));
  app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
  app.use(express.static(path.join(__dirname, '/test')));
  app.use(express.static(path.join(__dirname, '/test/browser')));
});


/**
 * Routing Prototype
 */
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/signup', user.new);

/**
 * AMQP Messaging prototype
 */
// var connection = amqp.createConnection({
//   host: '127.0.0.1'
// });


// var emailToRenderEventsMap = {};
// connection.addListener('ready', function() {
//   var exchange1 = connection.exchange('ui-service', {
//     type: 'fanout'
//   });
//   var exchange2 = connection.exchange('auth-service', {
//     type: 'fanout'
//   });
//   var i = 0;
//   var q = connection.queue('ui-front-shared-queue', function() {
//     q.bind(exchange1, "*");
//     q.bind(exchange2, "*");
//     q.subscribe(function(m) {
//       data = JSON.parse(m.data.toString())
//       console.log(emailToRenderEventsMap)
//       if (data.email) {
//         if (emailToRenderEventsMap[data.email] != undefined) {
//           emailToRenderEventsMap[data.email].push((data.email + " -> " + i++));
//         } else {
//           emailToRenderEventsMap[data.email] = [data.email + " -> " + i++];
//         }
//       }
//     })
//   });
// });


/**
 * Async UI rendering events propagation prototype
 * TODO: add pubsub dynamic channeling
 */
// 
// setInterval(function() {
//   User.create(function() {})
// }, 2000)

io.sockets.on('connection', function(socket) {
  socket.emit('news', {
    hello: 'world'
  });
  // var email = null;
  // socket.on('my other event', function(data) {
  //   email = data.email
  //   console.log(data)
  // });
  // 
  // setInterval(function() {
  //   if (email != null) {
  //     if (emailToRenderEventsMap[email] != undefined) {
  //       d = emailToRenderEventsMap[email].pop()
  //       socket.emit('new-data', {
  //         cell: d,
  //         table: emailToRenderEventsMap[email]
  //       });
  //     }
  //   }
  // }, 2000)
});
