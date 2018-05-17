var Model = require('objection').Model;

function User() {
  Model.apply(this, arguments);
}

Model.extend(User);
module.exports = User;

User.tableName = 'users';

User.jsonSchema = {
    type: 'object',
    required: [
    
    ],

    properties: {
        id: { type: 'integer'},
        nome: { type: 'string'},
        email: { type: 'string'},
        senha: { type: 'string'},
    }
};