'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    noteBookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, {foreignKey: "userId"})
    Note.belongsTo(models.Notebook, {foreignKey: "noteBookId"})
    Note.hasMany(models.Tag, {foreignKey: "noteId"})
  };
  return Note;
};