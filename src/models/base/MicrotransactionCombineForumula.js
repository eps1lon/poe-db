module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'MicrotransactionCombineForumula',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      _ingredients_base_item_types_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
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
              attribute: 'result_base_item_types_key',
            },
          ],
          name: 'index_result_base_item_types_key',
        },
      ],
      tableName: 'microtransaction_combine_forumulas',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.BaseItemType, {
      as: 'result_base_item_type',
      $inverse: 'microtransaction_combine_forumulas',
      $col_order: 0,
      foreignKey: {
        name: 'result_base_item_types_key',
        $type: 'ulong',
        $col_order: 0,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
    model.belongsToMany(models.BaseItemType, {
      as: 'ingredients_base_item_types',
      through: {
        model:
          models.MicrotransactionCombineForumulaHabtmIngredientsBaseitemtype,
        unique: false,
      },
      foreignKey: 'microtransaction_combine_forumula_row',
      otherKey: 'base_item_type_row',
      $col_order: 1,
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'MicrotransactionCombineForumula.dat';
  return model;
};
