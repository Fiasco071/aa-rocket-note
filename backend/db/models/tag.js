'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    noteId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    Tag.belongsTo(models.User, {foreignKey: "userId"})
    Tag.belongsTo(models.Note, {foreignKey: "noteId"})
  };
  return Tag;
};