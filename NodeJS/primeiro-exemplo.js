var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type': 'text/html'});
	res.write('Hello World!');
	res.write('<br/>')
	res.write('bem vindo!');
	res.end();
});

server.listen(3000, function(){
	console.log("servidor rodando na porta 3000");
});

