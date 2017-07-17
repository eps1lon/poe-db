module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MapHabtmHigherTierMapsBaseitemtype',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [],
      tableName: 'map_habtm_higher_tier_maps_baseitemtypes',
    },
  );

  model.associate = models => {
    model.belongsTo(models.Map, {
      foreignKey: 'map_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.BaseItemType, {
      foreignKey: 'base_item_type_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
