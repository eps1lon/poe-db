module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define(
    'UniqueSet',
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
      unknown0: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 1,
      },
      unknown2: {
        type: DataTypes.INTEGER,
        primaryKey: false,
        allowNull: false,
        $col_order: 3,
      },
      flag0: {
        type: DataTypes.BOOLEAN,
        primaryKey: false,
        allowNull: false,
        $col_order: 4,
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
      tableName: 'unique_sets',
      underscored: true,
    },
  );

  model.associate = models => {
    model.belongsTo(models.Word, {
      as: 'word',
      $inverse: 'unique_sets',
      $col_order: 2,
      foreignKey: {
        name: 'words_key',
        $type: 'ulong',
      },
      targetKey: 'row',
      nullable: true,
      constraints: false,
    });
  };

  model.DAT_FILE = 'UniqueSets.dat';
  return model;
};
