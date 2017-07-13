const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    '$model_name',
    {
      attribute_1: { type: DataTypes.STRING },
    },
    {
      classMethods: {
        associate: models => {
          model.belongsTo(BelongsToModel, {
            foreignKey: '$foreignKey',
            targetKey: '$targetKey',
          });
        },
      },
    },
  );

  return model;
};
