request = require 'request'

class User
  @i: 1
  @create: (cb) ->
    testingEmail = ['a@a.com', 'b@b.com', 'c@c.com']

    options =
      uri:"http://localhost:3001/users"
      json:
        user:
          email: testingEmail[@i++%3]
          password: '12345'
          password_confirmation: '12345'
          first_name: 'foo'
          last_name: 'bar'

    request.post options, (err, _response, _body) ->
      cb JSON.stringify(_body)

  constructor: (attributes) ->
    console.log "foo"

module.exports = User  