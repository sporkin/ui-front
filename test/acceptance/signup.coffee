casper = require('casper').create()
casper.start('http://127.0.0.1:3000')

casper.then ->
	this.click("#home")

casper.then ->
  this.test.assertTextExists('Hello World!')

casper.run ->
  this.exit()
  

