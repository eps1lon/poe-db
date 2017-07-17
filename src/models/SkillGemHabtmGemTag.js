module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillGemHabtmGemTag',
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
      tableName: 'skill_gem_habtm_gem_tags',
    },
  );

  model.associate = models => {
    model.belongsTo(models.SkillGem, {
      foreignKey: 'skill_gem_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.GemTag, {
      foreignKey: 'gem_tag_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
