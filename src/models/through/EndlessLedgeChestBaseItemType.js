module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EndlessLedgeChestBaseItemType',
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
      tableName: 'endless_ledge_chest_base_item_types',
    },
  );

  model.associate = models => {
    model.belongsTo(models.EndlessLedgeChest, {
      foreignKey: 'endless_ledge_chest_row',
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
