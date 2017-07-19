module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthSecretEffect',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      buff__values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      o_t_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
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
              attribute: 'monster_varieties_key',
            },
          ],
          name: 'index_monster_varieties_key',
        },
        {
          fields: [
            {
              attribute: 'buff__buff_definitions_key',
            },
          ],
          name: 'index_buff__buff_definitions_key',
        },
      ],
      tableName: 'labyrinth_secret_effects',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      foreignKey: {
        name: 'monster_varieties_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff__buff_definition',
      foreignKey: {
        name: 'buff__buff_definitions_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSecretEffects.dat';
  return model;
};
