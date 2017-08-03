module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'CharacterStartItemHabtmSocketedSkillgem',
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
          fields: ['character_start_item_row', 'skill_gem_row'],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_start_item_habtm_socketed_skillgems',
      underscored: true,
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
