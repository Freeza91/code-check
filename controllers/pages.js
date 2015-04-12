exports.home = function (req, res, next) {
  res.locals.hello = 'this is a home page'
  res.render('home')
}