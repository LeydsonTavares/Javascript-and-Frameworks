

var express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var session = require('express-session');
var bcrypt = require('bcrypt');


var app = express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(session({
	secret: '2C44-4D44-WppQ38S',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));


// Landing page
app.get('/', function (req, res) { 
	res.render('pages/index/index'); 
});

// Blog page
app.get('/blog', function (req, res) { res.render('pages/blog/index'); });

app.post('/validar', function (req, res) {
	var login = req.body.inputUsername;
	var senha = req.body.inputPassword;

	if(typeof login != 'undefined') filter = ' WHERE login=' + login;
	execSQLQuery('SELECT * FROM login' + filter, function(error, results) {
		if (error != null && typeof error != 'undefined') {
			console.log("Um problema aconteceu com o banco de dados! "+error);
			res.render('pages/dashboard/login', { mensagem: 'Ocorreu um problema..'});
		} else {
			if (results == "" || typeof results == 'undefined') {
				console.log("Algum erro aconteceu..");
				res.render('pages/dashboard/login', { mensagem: 'Dados inválidos'});
			} else {
				console.log(senha);
				var stringResult = JSON.stringify(results);
				var jsonResult =  JSON.parse(stringResult);
				var part = jsonResult[0];
				if(bcrypt.compareSync(senha,part.senha)) {
					console.log("As senhas bateram");
					session.mlogin = part.login;
					session.logado = true;
					res.render('pages/dashboard/index', { login: part}); 
				} else {
					res.render('pages/dashboard/login', { mensagem: 'Login ou senha incorretos'});
				}
			}
		}
	});

});

app.get('/logout', function(req, res, next) {
	session.logado = false;
	session.login = "";
	return res.redirect('/'); 
});

// Sistema
app.get('/dashboard/login', function (req, res) { res.render('pages/dashboard/login'); });

app.get('/dashboard/index', function (req, res) {
	if (session.logado) {
		console.log(session.login);
		res.render('pages/dashboard/index');
	  }
	  else {
		res.render('pages/dashboard/login');
	  } 
});

app.listen(port, "0.0.0.0", function() {
	console.log("Listening on Port 5000");
});

function execSQLQuery(sqlQry, callback){
  const connection = mysql.createConnection({
    host     : 'localhost:3308',
    user     : 'root',
    password : '',
    database : 'hotelnet'
  });
 
  connection.query(sqlQry, function(error, results, fields){
	  if(error) 
	  	callback(error, null);
      else
        callback(null, results);
      connection.end();
      console.log('executou!');
  });
}
/*var login;
var senha;

$("#buttonLogin").click(function(){
    login = $("#inputUsername").val();
    senha = $("#inputPassword").val();

    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost:3308',
      user     : 'root',
      password : '',
      database : 'hotelnet'
    });
    
    connection.connect();
    
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    
    connection.end();

});*/