'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    subbreadditId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    // many side
    Post.belongsTo(models.User, {foreignKey: 'userId'})
    Post.belongsTo(models.Subbreaddit, {foreignKey: 'subbreadditId'})
  };
  return Post;
};