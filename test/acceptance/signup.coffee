casper = require('casper').create()
casper.start('http://127.0.0.1:3000/signup')

casper.then ->
  this.test.assertTextExists('email')
  this.test.assertTextExists('password')

casper.run ->
  this.exit()
  

