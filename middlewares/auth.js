exports.userRequired = function (req, res, next){
  if(!req.session.user){
    return res.redirect('users/login')
  }
  next();
}

exports.adminAuth = function (req, res, next){

}