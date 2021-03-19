'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subbreaddit = sequelize.define('Subbreaddit', {
    name: DataTypes.STRING,
    sidebar: DataTypes.TEXT
  }, {});
  Subbreaddit.associate = function(models) {
    // associations can be defined here
    Subbreaddit.hasMany(models.Post, {foreignKey: 'subbreadditId'})
    Subbreaddit.belongsToMany(models.User, {through: 'Subscription', foreignKey: 'subbreadditId', otherKey: 'userId'})
  };
  return Subbreaddit;
};