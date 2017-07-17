module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonsterRestrictionMonsterVariety',
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
      tableName: 'invasion_monster_restriction_monster_varieties',
    },
  );

  model.associate = models => {
    model.belongsTo(models.InvasionMonsterRestriction, {
      foreignKey: 'invasion_monster_restriction_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.MonsterVariety, {
      foreignKey: 'monster_variety_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
