module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffectsPerLevelHabtmStat',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
    },
    {
      engine: 'MyISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: ['granted_effects_per_level_row', 'stat_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'granted_effects_per_level_habtm_stats',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.GrantedEffectsPerLevel, {
      foreignKey: 'granted_effects_per_level_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.Stat, {
      foreignKey: 'stat_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
