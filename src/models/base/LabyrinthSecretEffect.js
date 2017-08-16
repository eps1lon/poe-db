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
      buff_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      ot_file: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
    },
    {
      engine: 'MYISAM',
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
              attribute: 'buff_buff_definitions_key',
            },
          ],
          name: 'index_buff_buff_definitions_key',
        },
      ],
      tableName: 'labyrinth_secret_effects',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      as: 'monster_variety',
      $inverse: 'labyrinth_secret_effects',
      $col_order: 1,
      foreignKey: {
        name: 'monster_varieties_key',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_buff_definition',
      $inverse: 'labyrinth_secret_effects',
      $col_order: 2,
      foreignKey: {
        name: 'buff_buff_definitions_key',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthSecretEffects.dat';
  return model;
};
