module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'GrantedEffectsPerLevelEffectivenessCostConstant',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        $col_order: -1,
      },
      priority: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: false,
        autoIncrement: false,
        $col_order: -1,
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
              attribute: 'granted_effects_per_level_row',
            },
            {
              attribute: 'effectiveness_cost_constant_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'granted_effects_per_level__effectiveness_cost_constants',
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
    model.belongsTo(models.EffectivenessCostConstant, {
      foreignKey: 'effectiveness_cost_constant_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
