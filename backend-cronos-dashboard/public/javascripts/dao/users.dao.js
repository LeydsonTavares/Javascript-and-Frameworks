/**
* @file Representa o DAO (Objeto de acesso a dados) para a tabela de Usuário.
* @author Italo
*/

//var bcrypt = require('bcrypt-nodejs');
//var jwt = require('jsonwebtoken');
//var async = require('async');
var objection = require('objection');

//var config = require('../../../config.js');
var UserModel = require('../models/users.model.js');

var UserDao = {
    findById: findById,
    findAll: findAll
};

module.exports = UserDao;

function findById(userId, callback) {

    UserModel
        .query()
        .first()
        .where('id', userId)
        .then(function (user) {
            callback(null, user)

        })
        .catch(function (err) {
            callback(err);
        });
}

function findAll(callback) {

    UserModel
        .query()
        .select('id', 'nome', 'email', 'senha')
        .orderBy('id')
        .then(function (user) {
            callback(null, user);
        })
        .catch(function (err) {
            callback(err);
        });
}


let user = UserDao.findById(1, function(result){
	console.log(result);
});

console.log(user);