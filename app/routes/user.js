
/*
 * GET users listing.
 */
exports.new = function(req, res){
  res.render('users/new', { title: "foo"});
}

exports.list = function(req, res){
  res.send("respond with a resource");
};
