module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'Flask',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      name: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      group: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
      },
      life_per_use: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      mana_per_use: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
      },
      recovery_time: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 5,
      },
      buff_stat_values: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 7,
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
              attribute: 'buff_definitions_key',
            },
          ],
          name: 'index_buff_definitions_key',
        },
      ],
      tableName: 'flasks',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_type',
      foreignKey: {
        name: 'base_item_types_key',
        $col_order: 0,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BuffDefinition, {
      as: 'buff_definition',
      foreignKey: {
        name: 'buff_definitions_key',
        $col_order: 6,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'Flasks.dat';
  return model;
};
