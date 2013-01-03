require.config({
  baseUrl: '../../',
  paths: {
    bootstrap: "./public/javascripts/libs/bootstrap"
  },

  packages: [{
    name: 'jquery',
    location: './public/javascripts/vendor/jquery',
    main: 'dist/jquery.js'
  }, {
    name: 'underscore',
    location: './public/javascripts/vendor/underscore',
    main: 'underscore.js'
  }, {
    name: 'backbone',
    location: './public/javascripts/vendor/backbone',
    main: 'backbone.js'
  }],

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery']
    },
    underscore: {
      exports: '_'
    }
  },
  urlArgs: 'uncache=' + (new Date()).getTime()
});

require(['require', './test/browser/support/chai', './test/browser/support/sinon', './node_modules/mocha/mocha'], function(require, chai, sinon) {
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  // all test files
  require(['./test/browser/models/test_spec'], function() {
    mocha.run()
  });
});
