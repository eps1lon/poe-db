module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MiscObjectHabtmPreloadGroup',
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
      tableName: 'misc_object_habtm_preload_groups',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MiscObject, {
      foreignKey: 'misc_object_row',
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
