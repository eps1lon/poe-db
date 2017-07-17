module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecretHabtmLabyrinthSecretEffects0',
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
      indexes: [
        {
          fields: ['labyrinth_secret_row', 'labyrinth_secret_effect_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'labyrinth_secret_habtm_labyrinth_secret_effects0s',
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
