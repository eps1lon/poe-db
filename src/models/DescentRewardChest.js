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
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types1',
      through: models.DescentRewardChestBaseItemTypes1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types2',
      through: models.DescentRewardChestBaseItemTypes2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types3',
      through: models.DescentRewardChestBaseItemTypes3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types4',
      through: models.DescentRewardChestBaseItemTypes4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types5',
      through: models.DescentRewardChestBaseItemTypes5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types6',
      through: models.DescentRewardChestBaseItemTypes6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types7',
      through: models.DescentRewardChestBaseItemTypes7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types8',
      through: models.DescentRewardChestBaseItemTypes8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types9',
      through: models.DescentRewardChestBaseItemTypes9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types10',
      through: models.DescentRewardChestBaseItemTypes10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types11',
      through: models.DescentRewardChestBaseItemTypes11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types12',
      through: models.DescentRewardChestBaseItemTypes12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types13',
      through: models.DescentRewardChestBaseItemTypes13,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'base_item_types14',
      through: models.DescentRewardChestBaseItemTypes14,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DescentRewardChests.dat';
  return model;
};
