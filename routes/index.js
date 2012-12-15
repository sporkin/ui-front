User = require('../models/user')

exports.index = function(req, res){
  User.create(function(body){
    res.render('index', { title: body });
  })
};