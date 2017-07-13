const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    '$model_name',
    {
      attribute_1: { type: DataTypes.STRING },
    },
    {},
  );

  model.associate = models => {
    model.belongsTo(models.BelongsToModel, {
      foreignKey: '$foreignKey',
      targetKey: '$targetKey',
    });

    models.belongsToMany(models.BelongsToManyModel, {
      foreignKey: '$foreignKey',
      targetKey: '$targetKey',
      through: '$through',
    });
  };

  return model;
};
