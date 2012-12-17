request = require 'request'

class User
  @create: (cb) ->
    options =
      uri:"http://localhost:3001/users"
      json:
        user:
          email: 'a@a.com'
          password: '12345'
          password_confirmation: '12345'
          first_name: 'foo'
          last_name: 'bar'

    request.post options, (err, _response, _body) ->
      cb JSON.stringify(_body)

  constructor: (attributes) ->
    console.log "foo"

module.exports = User  