module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'BuffVisualPreloadGroup',
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
      tableName: 'buff_visual_preload_groups',
    },
  );

  model.associate = models => {
    model.belongsTo(models.BuffVisual, {
      foreignKey: 'buff_visual_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.PreloadGroup, {
      foreignKey: 'preload_group_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
