module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentRewardChest',
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
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'world_areas_key',
            },
          ],
        },
      ],
      tableName: 'descent_reward_chests',
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldArea.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 13,
        $type: 'ulong',
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types1',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types2',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types3',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types4',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types5',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types6',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types7',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types8',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types9',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types10',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types11',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types12',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types13',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types14',
      through: 'DescentRewardChestBaseItemType',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DescentRewardChests.dat';
  return model;
};
