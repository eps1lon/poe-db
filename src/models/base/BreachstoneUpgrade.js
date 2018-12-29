module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BreachstoneUpgrade',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
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
              attribute: 'base_item_types_key0',
            },
          ],
          name: 'index_base_item_types_key0',
        },
        {
          fields: [
            {
              attribute: 'base_item_types_key1',
            },
          ],
          name: 'index_base_item_types_key1',
        },
        {
          fields: [
            {
              attribute: 'base_item_types_key2',
            },
          ],
          name: 'index_base_item_types_key2',
        },
        {
          fields: [
            {
              attribute: 'base_item_types_key3',
            },
          ],
          name: 'index_base_item_types_key3',
        },
      ],
      tableName: 'breachstone_upgrades',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_types0',
      $inverse: 'breachstone_upgrades0',
      $col_order: 0,
      foreignKey: {
        name: 'base_item_types_key0',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_types1',
      $inverse: 'breachstone_upgrades1',
      $col_order: 1,
      foreignKey: {
        name: 'base_item_types_key1',
        $type: 'ulong',
        $col_order: 1,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_types2',
      $inverse: 'breachstone_upgrades2',
      $col_order: 2,
      foreignKey: {
        name: 'base_item_types_key2',
        $type: 'ulong',
        $col_order: 2,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      as: 'base_item_types3',
      $inverse: 'breachstone_upgrades3',
      $col_order: 3,
      foreignKey: {
        name: 'base_item_types_key3',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'BreachstoneUpgrades.dat';
  return model;
};
