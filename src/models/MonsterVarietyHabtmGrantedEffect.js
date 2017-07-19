module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MonsterVarietyHabtmGrantedEffect',
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
          fields: ['monster_variety_row', 'granted_effect_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'monster_variety_habtm_granted_effects',
    },
  );

  model.associate = models => {
    model.belongsTo(models.MonsterVariety, {
      foreignKey: 'monster_variety_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GrantedEffect, {
      foreignKey: 'granted_effect_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
