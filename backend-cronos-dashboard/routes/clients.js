var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Este será o retorno dos clientes');
});

//criar um novo recurso
router.post('/', function(req, res, next){
    res.send('Cliente cadastrado com sucesso');
});

//excluir um recurso
router.delete('/', function(req, res, next){
    res.send('Cliente deletado com sucesso');
});

//atualizar parcialmente
router.patch('/', function(req, res, next){
    res.send('cliente parcialmente atualizado com sucesso');
});

//substituir os dados de um recurso
router.put('/', function(req, res, next){
    res.send('Cliente atualizado com sucesso');
});

//obter quais manipulações podem ser realizadas em um recurso
//router.OPTIONS

//obter cabeçalhos da resposta
//router.HEAD

module.exports = router;
