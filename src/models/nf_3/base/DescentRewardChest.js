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
          name: 'index_world_areas_key',
        },
      ],
      tableName: 'descent_reward_chests',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldArea, {
      as: 'world_area',
      $inverse: 'descent_reward_chests',
      $col_order: 13,
      foreignKey: {
        name: 'world_areas_key',
        $type: 'ulong',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types1',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes1,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types2',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes2,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types3',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes3,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types4',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes4,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types5',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes5,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types6',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes6,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types7',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes7,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types8',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes8,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types9',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes9,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types10',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes10,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types11',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes11,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types12',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes12,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types13',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes13,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types14',
      through: {
        model: models.DescentRewardChestHabtmBaseItemTypes14,
        unique: false,
      },
      foreignKey: 'descent_reward_chest_row',
      otherKey: 'base_item_type_row',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DescentRewardChests.dat';
  return model;
};
