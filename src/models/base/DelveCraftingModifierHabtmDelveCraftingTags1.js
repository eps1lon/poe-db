module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveCraftingModifierHabtmDelveCraftingTags1',
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
              attribute: 'delve_crafting_modifier_row',
            },
            {
              attribute: 'delve_crafting_tag_row',
            },
          ],
          name: 'composite primary_alias',
          unique: true,
        },
      ],
      tableName: 'delve_crafting_modifier__delve_crafting_tags1s',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.DelveCraftingModifier, {
      foreignKey: 'delve_crafting_modifier_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsTo(models.DelveCraftingTag, {
      foreignKey: 'delve_crafting_tag_row',
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'ThroughModelAlias';
  return model;
};
