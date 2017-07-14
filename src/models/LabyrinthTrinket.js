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
      buff_values: {
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
        },
        {
          fields: [
            {
              attribute: 'labyrinth_secrets_key',
            },
          ],
        },
        {
          fields: [
            {
              attribute: 'buff_buff_definitions_key',
            },
          ],
        },
      ],
      tableName: 'labyrinth_trinkets',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BaseItemType.hasMany(model, {
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.LabyrinthSecret, {
      foreignKey: {
        name: 'labyrinth_secrets_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.LabyrinthSecret.hasMany(model, {
      foreignKey: {
        name: 'labyrinth_secrets_key',
        $col_order: 1,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsTo(models.BuffDefinition, {
      foreignKey: {
        name: 'buff_buff_definitions_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.BuffDefinition.hasMany(model, {
      foreignKey: {
        name: 'buff_buff_definitions_key',
        $col_order: 2,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
  };

  model.DAT_FILE = 'LabyrinthTrinkets.dat';
  return model;
};
