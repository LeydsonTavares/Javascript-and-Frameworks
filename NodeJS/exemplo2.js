var http = require('http');

var arquivo = require('fs');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type': 'text/html;charset=utf-8'});

	arquivo.readFile('arquivos/index.html', function(err, data){
		if (err) {
			res.write('index.html não encontrado');
		}else{
			res.write(data);
		}
		res.end();
	});
});

server.listen(3000, function(){
	console.log("servidor rodando na porta 3000");
});