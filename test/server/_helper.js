process.env.NODE_ENV = 'test';
require('coffee-script');

chai = require("chai");
expect = chai.expect;
should = chai.should();
sinonChai = require("sinon-chai");
sinon = require("sinon");

chai.use(sinonChai);

