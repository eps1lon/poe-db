module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecretLabyrinthSecretEffects0',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'labyrinth_secret_labyrinth_secret_effects0s',
    },
  );

  model.associate = models => {
    model.belongsTo(models.LabyrinthSecret, {
      foreignKey: 'labyrinth_secret_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecretEffect, {
      foreignKey: 'labyrinth_secret_effect_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
