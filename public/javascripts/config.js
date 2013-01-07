require.config({
  baseUrl: '/javascripts/',

  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',

    bootstrap: 'packages/bootstrap',
    dust: 'packages/dust',
    handlebars: 'packages/handlebars-1.0.rc.1',
    text: 'packages/require-text-2.0.3',
    chaplin: 'packages/chaplin',    
    socket: '/socket.io/socket.io.js'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    dust: {
      exports: "dust"
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },

  urlArgs: 'uncache=' + (new Date()).getTime()
});
