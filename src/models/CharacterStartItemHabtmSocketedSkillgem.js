module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartItemHabtmSocketedSkillgem',
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
      tableName: 'character_start_item_habtm_socketed_skillgems',
    },
  );

  model.associate = models => {
    model.belongsTo(models.CharacterStartItem, {
      foreignKey: 'character_start_item_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.SkillGem, {
      foreignKey: 'skill_gem_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
