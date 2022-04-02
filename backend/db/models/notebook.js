'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    name: DataTypes.STRING(50),
    userId: DataTypes.INTEGER
  }, {});
  Notebook.associate = function(models) {
    Notebook.hasMany(models.Note, {foreignKey : "noteBookId"})
    Notebook.belongsTo(models.User, {foreignKey : "userId"})
  };
  return Notebook;
};