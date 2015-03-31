module.exports = function(app){

  app.get('/', function(req, res, next){
    res.send("hello world node js");
  });

  // resorces users
  app.get('/users', function(req, res, next){
    res.render('users/index', { title: "hello node js" } );
  });

  //sign_up
  app.get('/users/sign_up', function(req, res, next){
    res.render('users/sign_up');
  });


}
