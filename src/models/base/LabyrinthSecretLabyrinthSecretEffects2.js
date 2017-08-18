module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecretLabyrinthSecretEffects2',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'labyrinth_secret_row',
            },
            {
              attribute: 'labyrinth_secret_effect_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'labyrinth_secret__labyrinth_secret_effects2s',
      underscored: true,
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
