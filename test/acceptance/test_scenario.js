var casper = require('casper').create();

casper.start('http://127.0.0.1:3000')

casper.then(function() {
  this.click("#home")
});

casper.then(function() {
  this.test.assertTextExists('respond');
});

casper.run(function() {
  this.exit();
});
