require(['require', 'support/chai.js', 'support/sinon.js', 'support/mocha.js'], function(require, chai, sinon) {
  assert = chai.assert;
  should = chai.should();
  expect = chai.expect;

  mocha.setup({
    ui: 'bdd',
    ignoreLeaks: true
  });

  // load test files
  require(['javascripts/models/test_spec.js'], function() {
    mocha.run()
  });
});
