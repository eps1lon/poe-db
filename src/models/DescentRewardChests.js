module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DescentRewardChests',
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
          fields: ['world_areas_key'],
        },
      ],
    },
  );

  model.associate = models => {
    model.belongsTo(models.WorldAreas, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 13,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    models.WorldAreas.hasMany(model, {
      foreignKey: {
        name: 'world_areas_key',
        $col_order: 13,
      },
      targetKey: undefined,
      nullable: true,
      constraints: false,
      sourceKey: 'row',
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types1',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types2',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 2,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types3',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 3,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types4',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 4,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types5',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 5,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types6',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 6,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types7',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 7,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types8',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 8,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types9',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 9,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types10',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 10,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types11',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 11,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types12',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 12,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types13',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 14,
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemTypes, {
      as: 'base_item_types14',
      through: 'DescentRewardChestsBaseItemTypes',
      $col_order: 15,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DescentRewardChests.dat';
  return model;
};
