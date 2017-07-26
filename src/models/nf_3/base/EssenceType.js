module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'EssenceType',
    {
      row: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        $col_order: -1,
      },
      id: {
        type: DataTypes.TEXT,
        primaryKey: false,
        allowNull: false,
        $col_order: 0,
      },
      essence_type: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      is_corrupted_essence: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 2,
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
              attribute: 'words_key',
            },
          ],
          name: 'index_words_key',
        },
      ],
      tableName: 'essence_types',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Word, {
      as: 'word',
      $inverse: 'essence_types',
      $col_order: 3,
      foreignKey: {
        name: 'words_key',
        $type: 'ulong',
        $col_order: 3,
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'EssenceType.dat';
  return model;
};
