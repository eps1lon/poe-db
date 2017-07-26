module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MiscObjectHabtmPreloadGroup',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['misc_object_row', 'preload_group_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'misc_object_habtm_preload_groups',
      underscored: true,
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
