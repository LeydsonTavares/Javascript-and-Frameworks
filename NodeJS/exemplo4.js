var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-type': 'text/html;charset=utf-8'});
	
	if(req.url == '/'){
		res.write('<h1>Página Home</h1>');
	}else if(req.url == '/contatos'){
		res.write('<h1>Página Contatos</h1>');
	}else if(req.url == '/usuarios'){
		res.write('<h1>Página Usuários</h1>');
	}else{
		res.write('<h1>Página não encontrada</h1>');
	}

	var resultado = url.parse(req.headers.host+req.url);
	res.write('<br>');
	res.write(resultado.href);
	res.end();

	var fs = require('fs');
	var jsonData = fs.readFileSync("../Angular/primeiro-projeto/tsconfig.json", "utf8");
	var jsonObject = JSON.parse(jsonData);	
	var teste = jsonObject.compilerOptions.lib;

	for(var i=0; i<teste.length; i++){
		console.log(teste[i]);
	}
});

server.listen(4000, function(){
	console.log('Servidor rodando na página 4000');
});