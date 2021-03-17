'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subbreaddit = sequelize.define('Subbreaddit', {
    name: DataTypes.STRING,
    sidebar: DataTypes.TEXT
  }, {});
  Subbreaddit.associate = function(models) {
    // associations can be defined here
  };
  return Subbreaddit;
};