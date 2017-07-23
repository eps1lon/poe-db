module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'LabyrinthTrinket',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      buff__values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
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
              attribute: 'base_item_types_key',
            },
          ],
          name: 'index_base_item_types_key',
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key',
            },
          ],
          name: 'index_labyrinth_secrets_key',
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
      tableName: 'labyrinth_trinkets',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      $inverse: 'labyrinth_trinkets',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.LabyrinthSecret, {
      as: 'labyrinth_secret',
      $inverse: 'labyrinth_trinkets',
      $col_order: 1,
      foreignKey: {
        name: 'labyrinth_secrets_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff__buff_definition',
      $inverse: 'labyrinth_trinkets',
      $col_order: 2,
      foreignKey: {
        name: 'buff__buff_definitions_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'LabyrinthTrinkets.dat';
  return model;
};
