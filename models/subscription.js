'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    userId: DataTypes.INTEGER,
    subbreadditId: DataTypes.INTEGER
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};