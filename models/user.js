'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // one side
    User.hasMany(models.Post, {foreignKey: 'userId'})
    User.belongsToMany(models.Subbreaddit, {through: 'Subscription', foreignKey: 'userId', otherKey: 'subbreadditId'})
    // await User.findByPk(1, {include: {model: Subbreaddit, include: Post}})
  };
  return User;
};