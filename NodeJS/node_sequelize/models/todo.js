'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    timestamps: false
  });
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};