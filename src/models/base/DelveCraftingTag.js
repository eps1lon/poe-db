module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'DelveCraftingTag',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      item_class: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: true,
        $col_order: 1,
      },
    },
    {
      engine: 'MYISAM',
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        {
          fields: [
            {
              attribute: 'tags_key',
            },
          ],
          name: 'index_tags_key',
        },
      ],
      tableName: 'delve_crafting_tags',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Tag, {
      as: 'tag',
      $inverse: 'delve_crafting_tags',
      $col_order: 0,
      foreignKey: {
        name: 'tags_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'DelveCraftingTags.dat';
  return model;
};
