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
              attribute: 'character_start_item_row',
            },
            {
              attribute: 'skill_gem_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'character_start_item__socketed__skill_gems',
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
