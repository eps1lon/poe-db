module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'InvasionMonsterRestrictionHabtmMonsterVariety',
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
          fields: ['invasion_monster_restriction_row', 'monster_variety_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'invasion_monster_restriction_habtm_monster_varieties',
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
