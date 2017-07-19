module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'PassiveSkillHabtmStat',
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
          fields: ['passive_skill_row', 'stat_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'passive_skill_habtm_stats',
    },
  );

  model.associate = models => {
    model.belongsTo(models.PassiveSkill, {
      foreignKey: 'passive_skill_row',
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
