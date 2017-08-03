module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'SkillGemHabtmGemTag',
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
          fields: ['skill_gem_row', 'gem_tag_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'skill_gem_habtm_gem_tags',
      underscored: true,
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
