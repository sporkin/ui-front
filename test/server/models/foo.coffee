require('../_helper.js')
User = require('../../../app/models/user')

describe "foo", ->
  it "does foo", ->
    spy = sinon.spy()
    spy.should.have.been.not.called

  it "does bar", ->
    spy = sinon.spy()
    expect(spy.called).to.be.false

  it "does baz", ->
    sinon.spy(User, "create")
    User.create (res) ->
      console.log 'foo'
    User.create.should.have.been.calledOnce
