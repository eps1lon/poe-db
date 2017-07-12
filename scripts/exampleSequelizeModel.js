const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('model_name', {
    attribute_1: { type: DataTypes.STRING },
  });

  return model;
};
