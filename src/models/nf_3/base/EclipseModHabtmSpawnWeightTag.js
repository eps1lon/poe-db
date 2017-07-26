module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EclipseModHabtmSpawnWeightTag',
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
          fields: ['eclipse_mod_row', 'tag_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'eclipse_mod_habtm_spawn_weight_tags',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.EclipseMod, {
      foreignKey: 'eclipse_mod_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Tag, {
      foreignKey: 'tag_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
